import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { TypographyH2 } from "@/components/ui/typography"
import { ProfileOrders } from "@/feature/profile"
import { Edit2 } from "lucide-react"
import { Link } from "react-router-dom"

export const ProfilePage = () => {
	return (
		<div className="flex flex-row max-w-full w-full justify-between gap-8">
			<div className="w-full max-w-[75%]">
				<div className="">
					<TypographyH2>Список актиsвных заказов</TypographyH2>
				</div>
				<ProfileOrders />
			</div>

			<div className="w-full max-w-[25%] m-auto my-4 p-6 bg-white rounded-xl shadow-lg">
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
				<Separator className="my-4" />
				<div className="my-2">
					<Label>E-mail</Label>
					<CardDescription className="mb-2">example@gmail.com</CardDescription>
					<Separator />
				</div>
				<div className="my-2">
					<Label>ИП</Label>
					<CardDescription className="mb-2">ИП Ромашкин Роман</CardDescription>
					<Separator />
				</div>
				<div className="my-2">
					<Label>ФИО Директора</Label>
					<CardDescription className="mb-2">Ромашкин Роман Романович</CardDescription>
					<Separator />
				</div>
				<div className="my-2">
					<Label>ИНН</Label>
					<CardDescription className="mb-2">11111111111111</CardDescription>
					<Separator />
				</div>
				<div className="my-2">
					<Label>Грузополучатель</Label>
					<CardDescription className="mb-2">Советский рай-он, ул. н.м. Грибачева, д 3</CardDescription>
					<Separator />
				</div>
				<div className="mt-2 mb-10">
					<Label>Город получатель товаров</Label>
					<CardDescription className="mb-2">Москва</CardDescription>

				</div>

				<Link to={'/edit-profile'}>
					<Button className="flex flex-row items-center gap-2">
						<Edit2 className="max-w-[20px]" />
						Редактировать профиль
					</Button>
				</Link>
			</div>
		</div>
	)
}