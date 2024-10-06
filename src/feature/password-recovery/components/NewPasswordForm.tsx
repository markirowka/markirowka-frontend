/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TypographyH2 } from "@/components/ui/typography/h2"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";
import { backendInstance } from "@/services/backendService"
import { toast } from "sonner"
import { NewPasswordFormSchema, NewPasswordFormSchemaType } from "../config"
import { useEffect } from "react"

export const NewPasswordForm = () => {
	const { search } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
	}, [navigate, search])

	const form = useForm<NewPasswordFormSchemaType>({
		resolver: zodResolver(NewPasswordFormSchema),
		defaultValues: { password: '', confirmPassword: '' },
	})

	const watchPassword = form.watch('password')
	const watchConfirmPassword = form.watch('confirmPassword')

	useEffect(() => {
		if (watchPassword !== watchConfirmPassword) {
			form.setError('confirmPassword', { type: 'custom', message: 'Подтверждающий пароль не совпадает с исходным' })
		} else {
			form.clearErrors()
		}
	}, [watchPassword, watchConfirmPassword])

	const onSubmit: SubmitHandler<NewPasswordFormSchemaType> = async (data) => {
		try {
			if (data.password !== data.confirmPassword) return;
			const token = search.slice(7)
			await backendInstance.setNewPassword(token,  data.password)

			toast(
				'Пароль успешно изменен!',
				{
					description: `Вы можете войти в свой аккаунт`,
					action: { label: 'Войти', onClick: () => { navigate('/auth') } }
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
				<TypographyH2>Введите новый пароль</TypographyH2>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4	">
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Новый пароль</FormLabel>
								<FormControl>
									<Input type={'password'} placeholder="Введите новый пароль" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Подтвердите новый пароль</FormLabel>
								<FormControl>
									<Input type={'password'} placeholder="Подтвердите новый пароль" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-between">
						<Button className="flex w-[100%]" type="submit">Сохранить пароль</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}