import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema, AuthFormSchemaType, UserData } from "../config"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TypographyH2 } from "@/components/ui/typography/h2"
import { Input } from "@/components/ui/input"
import { RegistrationToast } from "@/feature/registration"
import { backendInstance } from "@/services/backendService"
import { toast } from "sonner"
import { useAtom } from "jotai"
import { authAtom } from "../store"
import { statsAtom, userAtom } from "@/feature/common"
import { topMenu } from "@/feature/common/content";

export const AuthForm = () => {
	const [authStore, setAuthStore] = useAtom(authAtom);
	const [readStats, setReadStats] = useAtom(statsAtom);
	const [user, setUser] = useAtom(userAtom);
	const [menu, setMenu] = useAtom(topMenu);
	const navigate = useNavigate()

    useEffect(() => {
         if (user) {
            navigate("/profile")
		 }
	}, [user])

	const form = useForm<AuthFormSchemaType>({
		resolver: zodResolver(AuthFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const fetchMenu = async () => {
		const menu = await backendInstance.getMenu();
		setMenu(menu);
	  };

	const onSubmit: SubmitHandler<AuthFormSchemaType> = async (data) => {
		menu
		try {
			const response = await backendInstance.signIn(data)
			localStorage.setItem('bearerToken', response.token)
			setAuthStore({ ...authStore, id: response.userId, bearerToken: response.token })

			const res: UserData = await (await backendInstance.getUser()).data
			readStats;
			backendInstance.getReadArticles().then((stats) => {
				setReadStats(stats);
				fetchMenu();
			  })
			toast(
				'Вы вошли в аккаунт!',
				{
					action: { label: 'Скрыть', onClick: () => { } }
				}
			);
			setUser(res);
			// setTimeout(() => { navigate('/') }, 500);
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
		<>
			<div className="max-w-lg m-auto mt-3 p-12 bg-white rounded-xl shadow-lg">
				<Form {...form}>
					<TypographyH2>Вход</TypographyH2>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Введите E-mail</FormLabel>
									<FormControl>
										<Input placeholder="example@gmail.com" {...field} />
									</FormControl>
									<FormDescription>
										На этот E-mail придет письмо о подтверждении пользователя
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Введите пароль</FormLabel>
									<FormControl>
										<Input type="password" placeholder="**************" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-between mobileBlock">
							<Button type="submit">Войти в аккаунт</Button>
							<Link to={'/password-recovery'}><Button variant="ghost">Забыл пароль? Восстановить</Button></Link>
						</div>
					</form>
				</Form>
			</div>
			<RegistrationToast />
		</>
	)
}