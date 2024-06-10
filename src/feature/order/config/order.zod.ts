import { z } from "zod"

export const OrderFormSchema = z.object({
	category: z.string(),
	name: z.string().min(3, {message: 'Название должно содержать не менее 6-ти символов'}),
	quantity: z.coerce.number(),
	price: z.coerce.number(),
})

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>