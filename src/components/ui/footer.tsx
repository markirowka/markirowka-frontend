import { Mail, Phone, Send } from "lucide-react";
import { Button } from "./button";
import { topMenu } from "@/feature/common/content";
import { useAtom } from "jotai";
import { sortMenuByIndex } from "@/utils";
import { Link } from "react-router-dom";

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
              +7 993 909 74-42
            </a>
            <a className="footer__label flex gap-2 items-center">
              <Mail />
              pinkikosmetics@mail.ru
            </a>
            <a
              href="https://t.me/snexdj"
              className="footer__label flex gap-2 items-center"
            >
              <Send />
              @snexdj
            </a>
          </div>
          <div className="marking">
            {menu.sort(sortMenuByIndex).map((item, index) => {
              return (
                <a
                  key={`sm${index * 8.91}`}
                  className="footer__marking"
                  href={`/${item.url}`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="footer__button">
            <Link to="/auth">
              <Button className="mt-5">Подключиться к платформе</Button>
            </Link>
          </div>
          <div className="copyright">
            Copyright 2024 Markirowka.ru все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};
