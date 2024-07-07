import { useMemo, useState } from "react";
import { LogIn } from "lucide-react";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { userAtom } from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { topMenu } from "@/feature/common/content";

export const Header = () => {
  const [user, setUser] = useAtom(userAtom);
  const [menu, setMenu] = useAtom(topMenu);
  const [expanded, Expand] = useState(false);

  const fetchMenu = async () => {
      const menu = await backendInstance.getMenu();
      setMenu(menu);
  };



  useMemo(() => {
    backendInstance
      .getUser()
      .then((usr) => {
        setUser(usr.error ? false : usr.data);
      })
      .catch(() => {
        setUser(false);
      });
    fetchMenu();
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img className="header__logo" src="/logo.svg" alt="" />
          </Link>
          <div className="header__burger" onClick={() => Expand(e => !e)}>
            <span></span>
          </div>
          <div className="header__menu">
            <ul className="flex gap-4">
                  <li>
                    <a className="nav__link" href="/home">
                      Категории товаров
                    </a>
                  </li>
                  <li>
                    <a className="nav__link" href="/new-order">
                      Сделать заказ
                    </a>
                  </li>
              {menu.map((item, index) => {
                return (
                  <li key={`mi${index * 9.012}`}>
                    <a className="nav__link" href={`/${item.url}`}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`mobileMenu${expanded ? " selected" : ""}`}>
          <div className="closeBtn" style={{
            display: expanded ? "block" :"none",
            position: "fixed",
            top: 10,
            right: 10,
            width: 24,
            height: 24,
            zIndex: 150
          }} onClick={() => Expand(e => !e)}>
             <img src="/close.svg" />
          </div>
          <ul className="gap-4" style={{
            fontSize: 24,
            fontWeight: 600,
            marginTop: 40
          }}>
                  <li>
                    <a className="mb" href="/home">
                      Категории товаров
                    </a>
                  </li>
                  <li>
                    <a className="mb" href="/new-order">
                      Сделать заказ
                    </a>
                  </li>
              {menu.map((item, index) => {
                return (
                  <li key={`mi${index * 9.012}`}>
                    <a className="mb" href={`/${item.url}`}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {!user ? (
            <Link to={"/auth"}>
              <Button className="flex gap-2 items-center">
                Войти
                <LogIn />
              </Button>
            </Link>
          ) : (
            <Link to={"/profile"} className="flex flex-row gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>EH</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-base font-medium">
                  {user ? user.full_name || user.inn : ""}
                </h5>
                <p className="text-sm">{user?.email || ""}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
