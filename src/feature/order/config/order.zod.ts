import { z } from "zod"

export const OrderFormSchema = z.object({
	category: z.string(),
	name: z.string().min(3, {message: 'Название должно содержать не менее 6-ти символов'}),
	quantity: z.coerce.number(),
	price: z.coerce.number(),
	date:  z.coerce.date().refine((date) => {
		const today = new Date();
        const thirtyDaysAgo = new Date(today);
              thirtyDaysAgo.setDate(today.getDate() - 30);
        const tomorrow = new Date(today);
              tomorrow.setDate(today.getDate() + 1);
		return date >= thirtyDaysAgo && date <= tomorrow
	}, {
        message: 'Дата должна быть не больше чем за 30 дней до и на 1 день после сегодняшнего'
    })
})

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>