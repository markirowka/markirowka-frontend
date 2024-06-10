import { TypographyH2 } from "@/components/ui/typography"
import { ShoesForm, ShoesTable } from "@/feature/shoes"

export const Shoes = () => {
	return (
		<>
			<TypographyH2>Новая накладная «Обувь»</TypographyH2>
			<ShoesForm />
			<ShoesTable />
		</>
	)
}