import { z } from "zod"

export const RegistrationFormSchema = z.object({
	email: z
	.string()
	.min(1, { message: "Это поле должно быть заполнено" })
	.email("Данный E-mail некорретный."),
	password: z.string().min(6, { message: 'Пароль должен содержать не менее 6-ти символов' }),
	full_name: z.string(),
	ceo: z.string(),
	ceo_full: z.string(),
	ceo_genitive: z.string(),
	law_address: z.string(),
	inn: z.coerce.number(),
  cargo_recevier: z.string().optional(),
  cargo_city: z.string().optional(),
})

export type RegistrationFormSchemaType = z.infer<typeof RegistrationFormSchema>