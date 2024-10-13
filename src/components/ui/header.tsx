import { useEffect, useMemo, useState } from "react";
import { LogIn } from "lucide-react";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { statsAtom, userAtom } from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { topMenu } from "@/feature/common/content";
import { sortMenuByIndex } from "@/utils";
import { functional_urls } from "@/config/env";

export const Header = () => {
  const [user, setUser] = useAtom(userAtom);
  const [menu, setMenu] = useAtom(topMenu);
  const [readStats, setReadStats] = useAtom(statsAtom);
  const [isStatsRequested, saveStatsRequest] = useState(false);
  const [expanded, Expand] = useState(false);
  const navigate = useNavigate();

  const fetchMenu = async () => {
    const menu = await backendInstance.getMenu();
    setMenu(menu);
  };

  const logOut = async () => {
    await backendInstance.logout();
    localStorage.clear();
    navigate("/");
  };

  useMemo(() => {
    backendInstance
      .getUser()
      .then((usr) => {
        setUser(usr.error ? false : usr.data);
        if (!usr.error) fetchMenu();
      })
      .catch(() => {
        setUser(false);
      });
  }, []);

  useEffect(() => {
    if (!isStatsRequested) {
      backendInstance.getReadArticles().then((stats) => {
        setReadStats(stats);
        saveStatsRequest(true);
      })
    }
  }, [])

  const isNeedMarked = (url: string) => {
       if (!isStatsRequested || functional_urls.indexOf(url) > -1) {
         return false;
       }
       const itemInStatsList = readStats.find((item) => {
          return item.url === url;
       })
       return itemInStatsList ? !itemInStatsList.is_read : true;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img className="header__logo" src="/logo.svg" alt="" />
          </Link>
          {menu.length > 0 ? (
            <div className="header__burger" onClick={() => Expand((e) => !e)}>
              <span></span>
            </div>
          ) : null}
          <div className="header__menu">
            <ul className="flex gap-4">
              {menu.sort(sortMenuByIndex).map((item, index) => {
                return (
                  <li key={`mi${index * 9.012}`} className="menuNav">
                    {isNeedMarked(item.url) ? <div className="unreadMark" /> : null}
                    <a className="nav__link" href={`/${item.url}`}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`mobileMenu${expanded ? " selected" : ""}`}>
            <div
              className="closeBtn"
              style={{
                display: expanded ? "block" : "none",
                position: "fixed",
                top: 10,
                right: 10,
                width: 24,
                height: 24,
                zIndex: 150,
              }}
              onClick={() => Expand((e) => !e)}
            >
              <img src="/close.svg" />
            </div>
            <ul
              className="gap-4"
              style={{
                fontSize: 24,
                fontWeight: 600,
                marginTop: 40,
              }}
            >
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
            <>
              <Link
                to={"/profile"}
                className="flex flex-row gap-2 items-center"
              >
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
              <div onClick={logOut}>
                <img src="/exit.svg" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
