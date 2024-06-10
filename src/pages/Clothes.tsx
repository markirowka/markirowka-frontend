import { TypographyH2 } from "@/components/ui/typography"
import { ClothesForm, ClothesTable } from "@/feature/clothes"

export const Clothes = () => {

	return (
		<>
			<TypographyH2>Новая накладная «Одежда»</TypographyH2>
			<ClothesForm />
			<ClothesTable />
		</>
	)
}