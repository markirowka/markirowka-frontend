import { z } from "zod";

export const ClothesFormSchema = z.object({
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

export type ClothesFormSchemaType = z.infer<typeof ClothesFormSchema>