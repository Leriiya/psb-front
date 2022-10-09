import {
  AuthPageContainer,
  AuthTitle,
  AuthWrapper,
  RecoveryButton,
  Logo,
  Remember,
  Client,
} from "./styled";
import React from "react";
import { AuthInput } from "./components/authInput/authInput";
import LogoIcon from "../../images/logo.svg";
import { useVidgets } from "../mainPage/hook";
import { observer } from 'mobx-react-lite'
import { ButtonAuth } from "../../components/button/buttonContainer";

export const AuthPage = observer(() => {
  const { navigate } = useVidgets();

  return (
    <AuthPageContainer>
      <Logo src={LogoIcon} />
      <AuthWrapper>
        <AuthTitle>Добро пожаловать!</AuthTitle>
        <AuthInput
          type="number"
          // value={phoneNumber}
          setValue={() => {}}
          placeholder="Введите логин"
        />
        <AuthInput
          type="password"
          // value={password}
          setValue={() => {}}
          placeholder="Введите пароль"
        />
        <RecoveryButton onClick={() => {}}>Забыли пароль?</RecoveryButton>
        <ButtonAuth navigate={navigate} />
        <Remember>Не помню пароль или логин</Remember>
        <Remember>Правила безопасности</Remember>
      </AuthWrapper>
      <Client>Стать клиентом через биометрию</Client>
    </AuthPageContainer>
  );
});
