/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { RegistrationFormSchema, RegistrationFormSchemaType } from ".."
import { Separator } from "@/components/ui/separator"
import { backendInstance } from "@/services/backendService"
import { toast } from "sonner"
import { Send, User } from "lucide-react"
import { TypographyH3 } from "@/components/ui/typography"

export const RegistrationForm = () => {
	const navigate = useNavigate()
	const form = useForm<RegistrationFormSchemaType>({
		resolver: zodResolver(RegistrationFormSchema),
		defaultValues: {
			email: '',
			password: '',
			full_name: "",
			ceo: '',
			ceo_full: "",
			ceo_genitive: "",
			law_address: "",
			cargo_recevier: "",
			cargo_city: "",
		},
	})

	const onSubmit: SubmitHandler<RegistrationFormSchemaType> = async (data) => {
		try {
			const response = await backendInstance.signUp(data)

			toast(
				'Пользователь создан!',
				{
					description: `Почта для входа: ${response.email}`,
					action: { label: 'Скрыть', onClick: () => { } }
				}
			)

			// setTimeout(() => { navigate('/signupconfirm', { state: { token: response. } }) }, 500);
			setTimeout(() => { navigate('/auth') });
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
				<div className="flex gap-2 items-center">
					<User />
					<TypographyH3>Регистрация</TypographyH3>
				</div>
				<Separator className="mt-2" />
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

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Введите пароль" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Separator className="mt-2" />

					<FormField
						control={form.control}
						name="full_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Введите полное наименование (ИП)</FormLabel>
								<FormControl>
									<Input placeholder="ИП Ромашкин Роман Романович" {...field} />
								</FormControl>
								<FormDescription>
									Это наименование будет использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="ceo"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Введите ФИО директора ИП</FormLabel>
								<FormControl>
									<Input placeholder="Ромашкин Р.Р." {...field} />
								</FormControl>
								<FormDescription>
									Это наименование будет использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="ceo_full"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Введите Полное ФИО</FormLabel>
								<FormControl>
									<Input placeholder="Ромашкин Роман Романович" {...field} />
								</FormControl>
								<FormDescription>
									Это наименование будет использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="ceo_genitive"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Введите ФИО в родительном падеже</FormLabel>
								<FormControl>
									<Input placeholder="Ромашкину Роману Романовичу" {...field} />
								</FormControl>
								<FormDescription>
									Это наименование будет использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="law_address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Юридический адрес</FormLabel>
								<FormControl>
									<Input placeholder="Введите юридический адресс вашей компании" {...field} />
								</FormControl>
								<FormDescription>
									Юр. адрес будет использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="inn"
						render={({ field }) => (
							<FormItem>
								<FormLabel>ИНН</FormLabel>
								<FormControl>
									<Input type="number" placeholder="Введите ИНН" {...field} />
								</FormControl>
								<FormDescription>
									Эти данные будут использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cargo_recevier"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Грузополучатель (Полный адрес получателя товаров)</FormLabel>
								<FormControl>
									<Input placeholder="Введите полный адрес получателя товаров" {...field} />
								</FormControl>
								<FormDescription>
									Эти данные будут использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cargo_city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Город получатель товаров (например: г. Гомель)</FormLabel>
								<FormControl>
									<Input placeholder="Введите город получателя товаров" {...field} />
								</FormControl>
								<FormDescription>
									Эти данные будут использоваться для заполнения документов
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-between">
						<Button type="submit" className="gap-2">
							<Send />
							Зарегистрироваться
						</Button>
						<Link to="/auth"><Button variant="ghost">Уже есть аккаунт? Войти</Button></Link>
					</div>
				</form>
			</Form >
		</div >
	)
}