import { LogIn } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./button"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export const Header = () => {

	return (
		<header className="header">
			<div className="container">
				<div className="flex justify-between items-center">
					<Link to="/" className="logo">
						<img className="header__logo" src="/logo.svg" alt="" />
					</Link>
					<div className="header__burger">
						<span></span>
					</div>
					<div className="header__menu">
						<ul className="flex gap-4">
							<li>
								<a className="nav__link" href="#">Что такое маркировка?</a>
							</li>
							<li>
								<a className="nav__link" href="#">Список маркировок</a>
							</li>
							<li>
								<a className="nav__link" href="#">Проверка маркировки</a>
							</li>
							<li>
								<a className="nav__link" href="#">Контакты</a>
							</li>
							<li>
								<a className="nav__link" href="#">База знаний</a>
							</li>
						</ul>
					</div>
					<Link to={'/auth'}>
						<Button className="flex gap-2 items-center">
							Войти
							<LogIn />
						</Button>
					</Link>
					<Link to={'/profile'} className="flex flex-row gap-2 items-center">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>EH</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<h5 className="text-base font-medium">John Jonson</h5>
							<p className="text-sm">example@gmail.com</p>
						</div>
					</Link>
				</div>
			</div>
		</header>
	)
}