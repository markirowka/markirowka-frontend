"use client"

import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { TypographyH3 } from "@/components/ui/typography"
import { useMemo, useState } from "react"
import { useAtom } from "jotai"
import { columns } from "./columns"
import { PackageSearch } from "lucide-react"
import { orderProductsStoreAtom } from "../../store"
import { userAtom } from "@/feature/common"
import { useNavigate } from "react-router-dom"
import { backendInstance } from "@/services/backendService"


export function OrderTable() {
	const [user] = useAtom(userAtom)
	const navigate = useNavigate();
	const [orderProducts] = useAtom(orderProductsStoreAtom)
	const [pending, Pending] = useState(false)
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: orderProducts,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	const createOrderAction = async () => {
		Pending(true);
		const { files } = await backendInstance.createOrder(orderProducts);
		files.forEach((file: any) => {
			if (user && user.id) backendInstance.downloadFile(file.name, user.id)
		})
		Pending(false);
	}

	useMemo(() => {
		if (!user) {
			navigate("/auth");
			return;
		}
	}, [])

	return (
		<div className="w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg">
			<div className="flex gap-2 items-center">
				<PackageSearch />
				<TypographyH3>Список товаров для поставки</TypographyH3>
			</div>
			<div className="flex items-center py-4 justify-between">
				<Input
					placeholder="Поиск по названию"
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<div>Добавлено {orderProducts.length} шт</div>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									Товаров не найдено.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} из{" "}
					{table.getFilteredRowModel().rows.length} строк выделено.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={createOrderAction}
						disabled={orderProducts.length === 0 || pending}
					>
						Сформировать заказ
					</Button>
				</div>
			</div>
		</div>
	)
}
