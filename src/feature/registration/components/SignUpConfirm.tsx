import { Separator } from "@/components/ui/separator"
import { TypographyH3 } from "@/components/ui/typography"
import { backendInstance } from "@/services/backendService"
// import { Button } from "@components/ui/button";
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"


const registrationTexts = {
	none: "",
	start: "Мы отправили письмо на ваш E-mail. Пожалуйста, перейдите по ссылке в нем и подтвердите регистрацию",
	received: "Проверка токена регистрации...",
	success: "E-mail успешно подтвержден, перенаправляем на страницу профиля...",
    fail: "Не удалось подтвердить E-mail, попробуйте ещё раз:"
}

type RegistrationState = keyof typeof registrationTexts

export const SignUpConfirm = () => {
	const { search } = useLocation()
	const [registrationState, setRegState] = useState<RegistrationState>("none")

	const sendEmailConfirm = async () => {
		const token = search.slice(7);
		if (token) {
			setRegState("received")
			const { message } = await backendInstance.sendEmailConfirm(token)
			toast(
				message,
				{
					description: `Почта успешно подтверждена`,
					action: { label: 'Скрыть', onClick: () => { } }
				}
			)
			setRegState("success")
			setTimeout(() => {
				navigate('/auth')
			}, 1500);
		} else {
			setRegState("start")
		}
	}
	const navigate = useNavigate()

	useEffect(() => {

		if (search) {
			sendEmailConfirm()
		} else {
			setRegState("start")
		}
	}, [navigate, search])

	return (
		<div className="max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg">
			<div className="flex flex-row items-center gap-2 mb-4">
				<Mail />
				<TypographyH3>Подтвердите регистрацию</TypographyH3>
			</div>
			<Separator className="mt-2" />
			<p className="mt-4 leading-6 font-normal text-base">{registrationTexts[registrationState] || ""}</p>
			{/* registrationState === "start" || registrationState === "fail" ? <Button>Отправить email повторно</Button> : null */}
		</div >
	)
}