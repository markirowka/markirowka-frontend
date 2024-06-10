import { TypographyH3 } from "@/components/ui/typography"
import { Link } from "react-router-dom"

export const HomePage = () => {
	return (
		<div className="m-w-lg flex flex-col">
			<TypographyH3><Link to={'/category/shoes'}>Форма обувь</Link></TypographyH3>
			<TypographyH3><Link to={'/category/clothes'}>Форма одежда</Link></TypographyH3>
		</div>
	)
}