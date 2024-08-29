import { z } from "zod"

export const OrderFormSchema = z.object({
	category: z.string(),
	name: z.string().min(3, {message: 'Название должно содержать не менее 6-ти символов'}),
	quantity: z.coerce.number(),
	price: z.coerce.number(),
	date:  z.coerce.string().refine((value) => {
		const dt = new Date(value);
		const today = new Date();
        const thirtyDaysAgo = new Date(today);
              thirtyDaysAgo.setDate(today.getDate() - 30);
        const tomorrow = new Date(today);
              tomorrow.setDate(today.getDate() + 1);
		return !isNaN(dt.getTime()) && dt >= thirtyDaysAgo && dt <= tomorrow
	}, {
        message: 'Дата должна быть не больше чем за 30 дней до и на 1 день после сегодняшнего'
    })
})

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>