import { TypographyH2 } from "@/components/ui/typography"
import { ClothesForm, ClothesTable } from "@/feature/clothes"


export const ClothesPage = (props: { withBtn: boolean}) => {


	return (
		<>
			<TypographyH2>Маркировка «Одежда»</TypographyH2>
			<ClothesForm />
			<ClothesTable withBtn={props.withBtn} />
		</>
	)
}