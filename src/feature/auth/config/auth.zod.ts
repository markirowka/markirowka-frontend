import { z } from "zod"

export const AuthFormSchema = z.object({
	email: z.string().min(2, {
		message: "Имя пользователя должно содержать не менее 2-х символов.",
	}),
	password: z.string().min(6, {
		message: "Пароль должен содержать не менее 6-ти символов.",
	}),
})

export type AuthFormSchemaType = z.infer<typeof AuthFormSchema>