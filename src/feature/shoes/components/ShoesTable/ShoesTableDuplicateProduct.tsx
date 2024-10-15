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
import { shoesAtom } from "../../store"
import { useAtom } from "jotai"

interface IShoesTableDuplicateProductProps {
	id: number,
}

export const ShoesTableDuplicateProduct: FC<IShoesTableDuplicateProductProps> = ({ id }) => {
	const [shoes, setShoes] = useAtom(shoesAtom)

	const handleDuplicateProduct = (id: number) => {
		const duplicatedProduct = { ...shoes[id] };
		const updatedProducts = [
		  ...shoes.slice(0, id + 1),
		  duplicatedProduct,
		  ...shoes.slice(id + 1).map((product, index) => ({
			...product,
			id: id + 1 + index,
		  })),
		];
		setShoes(updatedProducts);
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