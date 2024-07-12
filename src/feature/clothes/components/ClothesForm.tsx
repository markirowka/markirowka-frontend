import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { TypographyH3 } from "../../../components/ui/typography"
import { SubmitHandler, useForm } from "react-hook-form"
import { ClothesFormSchema, ClothesFormSchemaType } from "../config/clothes.zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../components/ui/button"
import { FormSelect } from "../../../components/ui/form-select"
import { CLOTHES_COLORS, CLOTHES_SIZES, CLOTHES_TYPES } from "../config/clothes.data"
import { useAtom } from "jotai"
import { clothesAtom } from "../store/shoesStore"
import { Separator } from "@/components/ui/separator"
import { PackageSearch } from "lucide-react"
import { useEffect } from "react"

export const ClothesForm = () => {
	const [clothes, setClothes] = useAtom(clothesAtom)

	const form = useForm<ClothesFormSchemaType>({
		resolver: zodResolver(ClothesFormSchema),
		defaultValues: {
			fullName: "",
			tradeMark: "",
			articleType: "",
			articleName: "",
			clothesType: "",
			color: "",
			size: "",
			composition: "",
			tnved: "",
		},
	})

	const onSubmit: SubmitHandler<ClothesFormSchemaType> = (data) => {
		setClothes([...clothes, data])
	}

	const watcherShoesType = form.watch('clothesType')
	const watcherTradeMark = form.watch('tradeMark')
	const watcherArticleName = form.watch('articleName')
	const watcherColor = form.watch('color')
	const watcherSize = form.watch('size')

	useEffect(() => {
		const fullNameValue = `${watcherShoesType} ${watcherTradeMark} арт. ${watcherArticleName} Цвет: ${watcherColor} Размер: ${watcherSize}`

		form.setValue('fullName', fullNameValue)
	}, [form, watcherShoesType, watcherTradeMark, watcherArticleName, watcherColor, watcherSize])

	return (
		<div className="m-auto my-12 p-12 bg-white rounded-xl shadow-lg">
			<Form {...form}>
				<div className="flex gap-2 items-center">
					<PackageSearch />
					<TypographyH3>Добавить новый товар</TypographyH3>
				</div>
				<Separator className="mt-2" />
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
					<FormField
						control={form.control}
						name="fullName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Введите полное наименование товара (Формируется автоматически)</FormLabel>
								<FormControl>
									<Input disabled placeholder="Полное наименование товара" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex gap-6">
						<FormField
							control={form.control}
							name="tradeMark"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Товарный знак</FormLabel>
									<FormControl>
										<Input placeholder="Введите товарный знак" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormSelect
							className="flex-1"
							form={form}
							name="articleType"
							label="Артикул/Модель"
							placeholder="Артикул/Модель"
							options={['Артикул', 'Модель']}
						/>
						<FormField
							control={form.control}
							name="articleName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Артикул/Модель (Значение)</FormLabel>
									<FormControl>
										<Input placeholder="Артикул/Модель" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Select */}
					<div className="flex gap-6">
						<FormSelect
							className="flex-1"
							form={form}
							name="shoesType"
							label="Вид одежды"
							placeholder="Выберите вид одежды"
							options={CLOTHES_TYPES}
						/>

						<FormSelect
							className="flex-1"
							form={form}
							name="color"
							label="Цвет"
							placeholder="Выберите цвет одежды"
							options={CLOTHES_COLORS}
						/>

						<FormSelect
							className="flex-1"
							form={form}
							name="size"
							label="Размер в штихмассовой системе"
							placeholder="Размер в штихмассовой системе"
							options={CLOTHES_SIZES}
						/>
					</div>
					{/* Select */}

					<div className="flex gap-6">
						<FormField
							control={form.control}
							name="composition"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Состав</FormLabel>
									<FormControl>
										<Input placeholder="Состав" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex justify-between gap-6 items-end">
						<FormField
							control={form.control}
							name="tnved"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Код ТНВЭД</FormLabel>
									<FormControl>
										<Input placeholder="Введите код ТНВЭД (Оставьте пустой если не знаете код)" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Добавить товар</Button>
					</div>
				</form>
			</Form>
		</div>
	)

}	