import { ColumnDef } from "@tanstack/react-table"
import { OrderFormSchemaType } from "../../config"
import { Button } from "@/components/ui/button"
import { Pencil } from 'lucide-react';
import { OrderTableViewProduct } from "./OrderTableViewProduct";
import { OrderTableDeleteProduct } from "./OrderTableRemoveProduct";
import { OrderTableDuplicateProduct } from "./OrderTableDuplicateProduct";

export const columns: ColumnDef<OrderFormSchemaType>[] = [
	{
		id: "id",
		header: "#",
		cell: ({ row }) => {
			return (<div className="capitalize font-medium">#{row.index + 1}</div>)
		},
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: "Наименование",
		cell: ({ row }) => (
			<div className="capitalize font-medium">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "category",
		header: "Категория",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("category")}</div>
		),
	},
	{
		accessorKey: "quantity",
		header: "Кол-во",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("quantity")} шт.</div>
		),
	},
	{
		accessorKey: "price",
		header: "Цена",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("price")} ₽</div>
		),
	},
	/* {
		accessorKey: "date",
		header: "Дата",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("date")} ₽</div>
		),
	}, */
	{
		accessorKey: "action",
		header: () => (
			<div className="text-right"></div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex flex-row gap-2 items-center justify-end">
					<OrderTableViewProduct product={row.original} id={row.index} />
					<Button variant={"outline"} size={'icon'}><Pencil className="w-4" /></Button>
					<OrderTableDeleteProduct id={row.index} />
					<OrderTableDuplicateProduct id={row.index} />
				</div>
			)
		}
	}
]