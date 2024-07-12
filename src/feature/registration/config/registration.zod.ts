import { z } from "zod"

export const RegistrationFormSchema = z.object({
	email: z
	.string()
	.min(1, { message: "Это поле должно быть заполнено" })
	.email("Данный E-mail некорретный."),
	password: z.string().min(6, { message: 'Пароль должен содержать не менее 6-ти символов' }),
	phone: z.string().refine(
		(value) => {
		  const digits = value.replace(/\D/g, "");
		  return digits.length >= 10;
		},
		{
		  message: "Номер телефона должен содержать не менее 10 цифр",
		}
	  ),
	full_name: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo_full: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	ceo_genitive: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	law_address: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	inn: z.coerce.number(),
  cargo_recevier: z.string().optional(),
  cargo_city: z.string().optional(),
})

export type RegistrationFormSchemaType = z.infer<typeof RegistrationFormSchema>