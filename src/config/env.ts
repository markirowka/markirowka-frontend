// export const API_URL = 'https://api.markirowka.ru'
export const API_URL = "https://markirowka.ru";
export const ordersPerPage = 5;
export const ADMIN_ROLE = "ADMIN";
export const functional_urls = [
  "/",
  "/home",
  "/auth",
  "/registration",
  "/category/shoes",
  "/category/clothes",
  "/signupconfirm",
  "/password-recovery",
  "/recoverpassword",
  "/new-order",
  "/profile",
  "/edit-profile",
];

export const orderStatusNames = {
  new: "Новый",
  pay_messaged: "Сообщили об оплате",
  paid: "Оплачен"
}

export const watching_urls = [
    "news",
  ];

export const contentSeparator = "<!-- block -->"
export const orderRowLimit = 100;
export const markRowLimit = 700;

export const popUpStyle = {
  fontSize: "16px",
  padding: "15px",
  width: 300,
  top: 100,
  left: "calc(50% - 150px)",
  transform: "translateX(-50%) scale(1.5)"
};