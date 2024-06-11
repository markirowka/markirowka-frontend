import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { OrderFormSchemaType } from "../../config"
import { FC } from "react"

interface IOrderTableViewProductProps {
	id: number,
	product: OrderFormSchemaType
}

export const OrderTableViewProduct: FC<IOrderTableViewProductProps> = ({ id, product }) => (
	<AlertDialog>
		<AlertDialogTrigger asChild>
			<Button variant={"ghost"}>Смотреть</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle className="p-1">Продукт №{id + 1}</AlertDialogTitle>
				<AlertDialogDescription>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Категория товаров</span>
						<span className="text-base">{product.category}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Наименование</span>
						<span className="text-base">{product.name}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Кол-во товаров</span>
						<span className="text-base">{product.quantity} шт.</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Цена</span>
						<span className="text-base">{product.price} ₽</span>
					</div>
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Закрыть</AlertDialogCancel>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
)