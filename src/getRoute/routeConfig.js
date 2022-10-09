import { AuthPage } from "../pages/authPage/authPage";
import { FamilyPage } from "../pages/familyPage/familyPage";
import { MainPage } from "../pages/mainPage/mainPage";
import { SuccessPage } from "../pages/successPage/successPage";
import { TransactionPage } from "../pages/transactionPage/transactionPage";
import { getRoute } from "./getRoute";

export const routesConfig = [
  {
    //   isNav: true,
    title: "Главная страница",
    path: getRoute("mainpage"),
    element: <MainPage />,
  },
  {
    //   isNav: false,
    title: "Транзакция",
    path: getRoute("transaction"),
    element: <TransactionPage />,
  },
  {
    //   isNav: false,
    title: "Семейная группа",
    path: getRoute("family"),
    element: <FamilyPage />,
  },
  {
    //   isNav: false,
    title: "Успех",
    path: getRoute("success"),
    element: <SuccessPage />,
  },
  {
    //   isNav: false,
    title: "Не успех",
    path: getRoute("tryagain"),
    element: <MainPage />,
  },
  {
    //   isNav: false,
    title: "Авторизация",
    path: getRoute("auth"),
    element: <AuthPage />,
  },
];
