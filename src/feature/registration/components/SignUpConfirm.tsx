import { Separator } from "@/components/ui/separator"
import { TypographyH3 } from "@/components/ui/typography"
import { backendInstance } from "@/services/backendService"
import { Mail } from "lucide-react"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const SignUpConfirm = () => {
	const { search } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const sendEmailConfirm = async () => {
			const token = search.slice(7)
			const { message } = await backendInstance.sendEmailConfirm(token)
			toast(
				message,
				{
					description: `Почта успешно подтверждена`,
					action: { label: 'Скрыть', onClick: () => { } }
				}
			)
			setTimeout(() => {
				navigate('/auth')
			}, 1500);
		}

		if (search) sendEmailConfirm()
	}, [navigate, search])

	return (
		<div className="max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg">
			<div className="flex flex-row items-center gap-2 mb-4">
				<Mail />
				<TypographyH3>Подтвердите регистрацию</TypographyH3>
			</div>
			<Separator className="mt-2" />
			<p className="mt-4 leading-6 font-normal text-base">Мы отправили письмо на ваш E-mail, пожалуйста перейдите по ссылке в нем и подтвердите регистрацию</p>
		</div >
	)
}