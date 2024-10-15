import { ColumnDef } from "@tanstack/react-table"
import { ShoesFormSchemaType } from "../../config"
import { Button } from "@/components/ui/button"
import { Pencil } from 'lucide-react';
import { ShoesTableViewProduct } from "./ShoesTableViewProduct";
import { ShoesTableDeleteProduct } from "./ShoesTableRemoveProduct";
import { ShoesTableDuplicateProduct } from "./ShoesTableDuplicateProduct";

export const columns: ColumnDef<ShoesFormSchemaType>[] = [
	{
		id: "id",
		header: "#",
		cell: ({ row }) => {
			console.log(row)
			return (<div className="capitalize font-medium">{row.index + 1}</div>)
		},
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "articleName",
		header: "Артикул/Модель",
		cell: ({ row }) => (
			<div className="capitalize font-medium">{row.getValue("articleName")}</div>
		),
	},
	{
		accessorKey: "tradeMark",
		header: "Товарный знак",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("tradeMark")}</div>
		),
	},
	{
		accessorKey: "action",
		header: () => (
			<div className="text-right"></div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex flex-row gap-2 items-center justify-end">
					<ShoesTableViewProduct product={row.original} id={row.index} />
					<Button variant={"outline"} size={'icon'}><Pencil className="w-4" /></Button>
					<ShoesTableDeleteProduct id={row.index} />
					<ShoesTableDuplicateProduct id={row.index} />
				</div>
			)
		}
	}
]