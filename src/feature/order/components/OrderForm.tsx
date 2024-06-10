import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { TypographyH3 } from "../../../components/ui/typography"
import { SubmitHandler, useForm } from "react-hook-form"
// import { ShoesFormSchema, ShoesFormSchemaType } from "../config/shoes.zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSelect } from "../../../components/ui/form-select"
import { useAtom } from "jotai"
// import { shoesAtom } from "../store/shoesStore"
import { Separator } from "@/components/ui/separator"
import { PackageSearch } from "lucide-react"
import { OrderFormSchema, OrderFormSchemaType } from "../config"


export const OrderForm = () => {
	// const [shoes, setShoes] = useAtom(shoesAtom)

	const form = useForm<OrderFormSchemaType>({
		resolver: zodResolver(OrderFormSchema),
	})

	const onSubmit: SubmitHandler<ShoesFormSchemaType> = (data) => {
		setShoes([...shoes, data])
	}

	return (
		<>
			return (
			<div className="m-auto my-12 p-12 bg-white rounded-xl shadow-lg">
				<Form {...form}>
					<div className="flex gap-2 items-center">
						<PackageSearch />
						<TypographyH3>Добавить новый товар</TypographyH3>
					</div>
					<Separator className="mt-2" />
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
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
						</div>
					</form>
				</Form>
			</div>
			)
		</>
	)
}