import { TypographyH2 } from "@/components/ui/typography"
import { ShoesForm, ShoesTable } from "@/feature/shoes"

export const ShoesPage = () => {

	return (
		<>
			<TypographyH2>Новая накладная «Обувь»</TypographyH2>
			<ShoesForm />
			<ShoesTable />
		</>
	)
}