import { Mail, Phone, Send } from "lucide-react"
import { Button } from "./button"
import { topMenu } from "@/feature/common/content";
import { useAtom } from "jotai";

export const Footer = () => {
	const [menu] = useAtom(topMenu);

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__logo">Markirowka.ru</div>
					<div className="label">
						<a className="footer__label flex gap-2 items-center">
							<Phone />
							+9 999 999 99-99
						</a>
						<a className="footer__label flex gap-2 items-center">
							<Mail />
							office@markirowka.ru
						</a>
						<a href="#" className="footer__label flex gap-2 items-center">
							<Send />
							@markirowka
						</a>
					</div>
					<div className="marking">
						{menu.map((item, index) => {
							return(
								<a key={`sm${index * 8.91}`} className="footer__marking" href={`/${item.url}`}>{item.name}</a>
							)
						})}
					</div>
					<div className="footer__button">
						<Button className="mt-5">Подключиться к платформе</Button>
					</div>
					<div className="copyright">
						Copyright 2024 Markirowka.ru все права защищены
					</div>
				</div>
			</div>
		</footer>
	)
}