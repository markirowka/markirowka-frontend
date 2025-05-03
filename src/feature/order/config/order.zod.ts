// import { hasCommonElement, markableCategories } from "@/utils";
import { z } from "zod"

export const OrderFormSchema = z.object({
	category: z.string(),
	name: z.string().min(3, { message: 'Название должно содержать не менее 3-х символов' }),
	quantity: z.coerce.number(),
	price: z.coerce.number(),
	date: z.string(),
	tnved: z.string().optional(),
	country: z.string().optional()
  }).superRefine((data, ctx) => {
	const dt = new Date(data.date);
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);

	// const hasMarkableCategory = hasCommonElement(markableCategories, [data.category]);
	const daysBack = 30 // hasMarkableCategory ? 7 : 30;
  
	const startDate = new Date(today);
	startDate.setDate(today.getDate() - daysBack);
  
	if (isNaN(dt.getTime()) || dt < startDate || dt > tomorrow) {
	  ctx.addIssue({
		code: z.ZodIssueCode.custom,
		message: `Для категории "${data.category}" дата должна быть в 
		не более ${daysBack} дней до или 1 дня после`,
		path: ['date'],
	  });
	}
  });

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>


