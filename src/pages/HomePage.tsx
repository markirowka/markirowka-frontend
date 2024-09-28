import { CategoryCard } from "@/components"
import { TypographyH1 } from "@/components/ui/typography"

export const HomePage = () => {

	return (
		<>
			<TypographyH1>Выберите категорию маркировки</TypographyH1>
			<div className="flex flex-row gap-8 justify-between mt-8">
				<CategoryCard to="/category/shoes" name="Обувь" picture="/category-shoes.png" />
				<CategoryCard to="/category/clothes" name="Товары легкой промышл." picture="/category-clothes.png" />
				{/* <CategoryCard to="/category/shoes" name="Духи и туалетная вода" picture="/category-perfumes.png" /> */}
				{/* <CategoryCard to="/category/shoes" name="Шубы" picture="/category-coat.png" /> */}
			</div>
		</>
	)
}