import {
  AuthPageContainer,
  AuthTitle,
  AuthWrapper,
  ButtonContainer,
  RecoveryButton,
  Logo,
  LogoImg,
  Remember,
  Client
} from "./styled";
import React from "react";
import { AuthInput } from "./components/authInput/authInput";
import { Button } from "../../components/button/button";
import { ButtonApple } from "../../components/button/buttonApple";
import { getRoute } from "../../getRoute/getRoute";
import { LogoSvg } from "../../images/logosvg";
import LogoIcon from '../../images/logo.svg'

export const AuthPage = ({ navigate }) => {
  return (
    <AuthPageContainer>
      <Logo src={LogoIcon} />
      {/* <LogoImg><Logos /></LogoImg> */}

      {/* <LogoSvg /> */}
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
        <ButtonContainer>
          <ButtonApple
            width="230px"
            text="Sign in with Apple"
            onClick={() => {}}
          />
          <Button
            width="230px"
            text="Войти"
            onClick={() => navigate(getRoute("mainpage"))}
          />
        </ButtonContainer>
        <Remember>Не помню пароль или логин</Remember>
        <Remember>Правила безопасности</Remember>
      </AuthWrapper>
      <Client>Стать клиентом через биометрию</Client>
    </AuthPageContainer>
  );
};
