import { z } from "zod"

export const PasswordRecoveryFormSchema = z.object({
	email: z
	.string()
	.min(1, { message: "Это поле должно быть заполнено" })
	.email("Данный E-mail некорретный."),
})

export type PasswordRecoveryFormSchemaType = z.infer<typeof PasswordRecoveryFormSchema>

export const NewPasswordFormSchema = z.object({
	password: z.string().min(6, 'Пароль должен содержать не менее 6-ти символов'),
	confirmPassword: z.string().min(6, 'Пароль должен содержать не менее 6-ти символов'),
})

export type NewPasswordFormSchemaType = z.infer<typeof NewPasswordFormSchema>