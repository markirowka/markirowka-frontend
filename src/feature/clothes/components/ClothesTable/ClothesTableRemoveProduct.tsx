import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { FC } from "react"
import { TypographyP } from "@/components/ui/typography"
import { Trash } from "lucide-react"
import { clothesAtom } from "../../store"
import { useAtom } from "jotai"

interface IClothesTableRemoveProductProps {
	id: number,
}

export const ClothesTableRemoveProduct: FC<IClothesTableRemoveProductProps> = ({ id }) => {
	const [clothes, setClothes] = useAtom(clothesAtom)

	const handleDeleteProduct = (id: number) => {
		setClothes([...clothes.slice(0, id), ...clothes.slice(id + 1)])
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={"outline"} size={'icon'}><Trash className="w-4" /></Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Удалить: Продукт №{id + 1}</AlertDialogTitle>
					<AlertDialogDescription>
						<TypographyP>Вы уверены что хотите удалить продукт из списка?</TypographyP>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отмена</AlertDialogCancel>
					<AlertDialogAction onClick={() => { handleDeleteProduct(id) }}>Подтвердить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}