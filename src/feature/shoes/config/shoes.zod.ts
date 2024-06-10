import { z } from "zod";

export const ShoesFormSchema = z.object({
	fullName: z.string(),
	tradeMark: z.string(),
	articleType: z.string(),
	articleName: z.string(),
	shoesType: z.string(),
	color: z.string(),
	size: z.string(),
	upperMaterial: z.string(),
	liningMaterial: z.string(),
	bottomMaterial: z.string(),
	tnved: z.string(),
})

export type ShoesFormSchemaType = z.infer<typeof ShoesFormSchema>