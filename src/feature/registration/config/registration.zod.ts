import { z } from "zod"

export const RegistrationFormSchema = z.object({
	email: z
	.string()
	.min(1, { message: "Это поле должно быть заполнено" })
	.email("Данный E-mail некорретный."),
	password: z.string().min(6, { message: 'Пароль должен содержать не менее 6-ти символов' }),
	full_name: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo_full: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo_genitive: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	law_address: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	inn: z.coerce.number()
	.min(100000000000, { message: 'ИНН должен содержать 12 символов' })
	.max(999999999999, { message: 'ИНН должен содержать 12 символов' }),
  cargo_recevier: z.string().optional(),
  cargo_city: z.string().optional(),
})

export type RegistrationFormSchemaType = z.infer<typeof RegistrationFormSchema>