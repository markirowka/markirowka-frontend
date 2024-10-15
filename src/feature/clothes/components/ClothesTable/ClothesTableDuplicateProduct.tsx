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
import { Copy } from "lucide-react"
import { clothesAtom } from "../../store"
import { useAtom } from "jotai"

interface IClothesTableDuplicateProductProps {
	id: number,
}

export const ClothesTableDuplicateProduct: FC<IClothesTableDuplicateProductProps> = ({ id }) => {
	const [clothes, setClothes] = useAtom(clothesAtom)

	const handleDuplicateProduct = (id: number) => {
		const duplicatedProduct = { ...clothes[id] };
		const updatedProducts = [
		  ...clothes.slice(0, id + 1),
		  duplicatedProduct,
		  ...clothes.slice(id + 1).map((product, index) => ({
			...product,
			id: id + 1 + index,
		  })),
		];
		setClothes(updatedProducts);
	  };

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={"outline"} size={'icon'}><Copy className="w-4" /></Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Копировать: №{id + 1}</AlertDialogTitle>
					<AlertDialogDescription>
						<TypographyP>Вы уверены что хотите создать копию?</TypographyP>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отмена</AlertDialogCancel>
					<AlertDialogAction onClick={() => { handleDuplicateProduct(id) }}>Подтвердить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}