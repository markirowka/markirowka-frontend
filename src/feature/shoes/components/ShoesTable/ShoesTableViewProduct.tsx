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
import { ShoesFormSchemaType } from "../../config"
import { FC } from "react"

interface IShoesTableViewProductProps {
	id: number,
	product: ShoesFormSchemaType
}

export const ShoesTableViewProduct: FC<IShoesTableViewProductProps> = ({ id, product }) => (
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
						<span className="text-base">{product.shoesType}</span>
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
						<span className="font-semibold text-base">Материал верха</span>
						<span className="text-base">{product.upperMaterial}</span>
					</div>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Материал подкладки</span>
						<span className="text-base">{product.liningMaterial}</span>
					</div>
					<div className="flex justify-between mb-2 p-1 border-b border-gray-200">
						<span className="font-semibold text-base">Материал низа/подошвы</span>
						<span className="text-base">{product.bottomMaterial}</span>
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