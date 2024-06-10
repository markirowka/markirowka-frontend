import { ColumnDef } from "@tanstack/react-table"
import { ClothesFormSchemaType } from "../../config"
import { Button } from "@/components/ui/button"
import { Copy, Pencil } from 'lucide-react';
import { ClothesTableViewProduct } from "./ClothesTableViewProduct";
import { ClothesTableRemoveProduct } from "./ClothesTableRemoveProduct";

export const columns: ColumnDef<ClothesFormSchemaType>[] = [
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
					<ClothesTableViewProduct product={row.original} id={row.index} />
					<Button variant={"outline"} size={'icon'}><Pencil className="w-4" /></Button>
					<ClothesTableRemoveProduct id={row.index} />
					<Button variant={"outline"} size={'icon'}><Copy className="w-4" /></Button>
				</div>
			)
		}
	}
]