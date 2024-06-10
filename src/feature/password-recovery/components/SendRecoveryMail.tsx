/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TypographyH2 } from "@/components/ui/typography/h2"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { backendInstance } from "@/services/backendService"
import { toast } from "sonner"
import { PasswordRecoveryFormSchema, PasswordRecoveryFormSchemaType } from "../config"

export const SendRecoveryMail = () => {
	const form = useForm<PasswordRecoveryFormSchemaType>({
		resolver: zodResolver(PasswordRecoveryFormSchema),
		defaultValues: { email: '', },
	})

	const onSubmit: SubmitHandler<PasswordRecoveryFormSchemaType> = async (data) => {
		try {
			await backendInstance.sendResetPasswordRequest(data)
			toast(
				'Запрос был отправлен вам на E-mail',
				{
					description: `Перейдите по ссылке отправленной в письме`,
					action: { label: 'Скрыть', onClick: () => { } }
				}
			)
		} catch (e: any) {
			console.log(e)
			toast(
				'Что-то пошло не так',
				{
					description: e?.message ? e?.message : 'Попробуйте позже',
					action: {
						label: 'Скрыть', onClick: () => console.error(e)
					}
				}
			)
		}
	}

	return (
		<div className="max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg">
			<Form {...form}>
				<TypographyH2>Восстановить пароль</TypographyH2>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>E-mail</FormLabel>
								<FormControl>
									<Input placeholder="Введите ваш E-mail" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-between">
						<Button type="submit">Отправить пароль</Button>
						<Link to="/auth"><Button variant="ghost">Уже есть аккаунт? Войти</Button></Link>
					</div>
				</form>
			</Form>
		</div>
	)
}