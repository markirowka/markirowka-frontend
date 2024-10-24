import { TypographyH2 } from "@/components/ui/typography"
import { ShoesForm, ShoesTable } from "@/feature/shoes"

export const ShoesPage = (props: { withBtn: boolean}) => {

	return (
		<>
			<TypographyH2>Новая накладная «Обувь»</TypographyH2>
			<ShoesForm />
			<ShoesTable withBtn={props.withBtn} />
		</>
	)
}