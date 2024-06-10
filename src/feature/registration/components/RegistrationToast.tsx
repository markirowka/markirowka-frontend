import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export const RegistrationToast = () => {
	return (
		<div className="max-w-lg m-auto mt-3 p-12 bg-white rounded-xl shadow-lg">
			<TypographyH3>Еще нет аккаунта?</TypographyH3>
			<TypographyMuted>Пройдите регистрацию</TypographyMuted>
			<Link to="/registration"><Button className="mt-4">Зарегистрироваться</Button></Link>
		</div>
	)
}