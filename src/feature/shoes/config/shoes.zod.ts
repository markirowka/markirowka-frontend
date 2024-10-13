import { z } from "zod";

export const ShoesFormSchema = z.object({
	fullName: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	tradeMark: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	articleType: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	articleName: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	shoesType: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	color: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	size: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	upperMaterial: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	liningMaterial: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	bottomMaterial: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
	tnved: z.string(),
})

export type ShoesFormSchemaType = z.infer<typeof ShoesFormSchema>