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
import { ClothesFormSchemaType } from "../../config"
import { FC } from "react"

interface IClothesTableViewProductProps {
	id: number,
	product: ClothesFormSchemaType
}

export const ClothesTableViewProduct: FC<IClothesTableViewProductProps> = ({ id, product }) => (
	<AlertDialog>
		<AlertDialogTrigger asChild>
			<Button variant={"ghost"}>Смотреть</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle className="p-1">Продукт №{id + 1}</AlertDialogTitle>
				<AlertDialogDescription>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Товарный знак</span>
						<span className="text-base">{product.tradeMark}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Артикул/Модель</span>
						<span className="text-base">{product.articleType}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Артикул/Модель (Значение)</span>
						<span className="text-base">{product.articleName}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Вид обуви</span>
						<span className="text-base">{product.clothesType}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Цвет</span>
						<span className="text-base">{product.color}</span>
					</div>

					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Размер в штихмассовой системе</span>
						<span className="text-base">{product.size}</span>
					</div>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Состав</span>
						<span className="text-base">{product.composition}</span>
					</div>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Код ТНВЭД</span>
						<span className="text-base">{product.tnved}</span>
					</div>
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Закрыть</AlertDialogCancel>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
)