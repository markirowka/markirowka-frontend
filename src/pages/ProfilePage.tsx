import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { TypographyH2 } from "@/components/ui/typography";
import { userAtom } from "@/feature/common";
import { ProfileOrders, UserList } from "@/feature/profile";
import { useAtom } from "jotai";
import { Edit2 } from "lucide-react";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <div className="flex flex-row max-w-full w-full justify-between gap-8">
        <div className="w-full max-w-[75%]">
          <div className="">
            <TypographyH2>Список активных заказов</TypographyH2>
          </div>
          <ProfileOrders />
        </div>

        <div className="w-full max-w-[25%] m-auto my-4 p-6 bg-white rounded-xl shadow-lg">
          <Link to={"/profile"} className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>EH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h5 className="text-base font-medium">
                {user ? user.full_name || user.inn : ""}
              </h5>
              <p className="text-sm">{user ? user.email || "" : ""}</p>
            </div>
          </Link>
          <Separator className="my-4" />
          <div className="my-2">
            <Label>E-mail</Label>
            <CardDescription className="mb-2">
              {user ? user.email || "" : ""}
            </CardDescription>
            <Separator />
          </div>
          <div className="my-2">
            <Label>Организация</Label>
            <CardDescription className="mb-2">
              {user ? user.full_name || "" : ""}
            </CardDescription>
            <Separator />
          </div>
          <div className="my-2">
            <Label>ФИО Директора</Label>
            <CardDescription className="mb-2">
              {user ? user.ceo || "" : ""}
            </CardDescription>
            <Separator />
          </div>
          <div className="my-2">
            <Label>ИНН</Label>
            <CardDescription className="mb-2">
              {user ? user.inn || "" : ""}
            </CardDescription>
            <Separator />
          </div>
          <div className="my-2">
            <Label>Грузополучатель</Label>
            <CardDescription className="mb-2">
              {user ? user.cargo_recevier || "" : ""}
            </CardDescription>
            <Separator />
          </div>
          <div className="mt-2 mb-10">
            <Label>Город получатель товаров</Label>
            <CardDescription className="mb-2">
              {user ? user.cargo_city || "" : ""}
            </CardDescription>
          </div>

          <Link to={"/edit-profile"}>
            <Button className="flex flex-row items-center gap-2">
              <Edit2 className="max-w-[20px]" />
              Редактировать профиль
            </Button>
          </Link>
        </div>
      </div>
      {user && user.user_role === "ADMIN" ? (
        <div className="w-full max-w-[100%] m-auto my-4 p-6 bg-white rounded-xl shadow-lg">
          <div className="">
            <TypographyH2>Пользователи</TypographyH2>
          </div>
          <UserList />
		  <div className="">
            <TypographyH2>Меню</TypographyH2>
          </div>
        </div>
      ) : null}
    </>
  );
};
