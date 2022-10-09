import React, { Fragment } from "react";
import { getRoute } from "../../getRoute/getRoute";
import { ButtonContainer } from "../../pages/authPage/styled";
import { Button } from "./button";
import { ButtonApple } from "./buttonApple";
import { ButtonReady } from "./buttonReady";

export const ButtonFamily = ({ navigate }) => {
  return (
    <Fragment>
      <ButtonReady
        width="230px"
        text="Готово"
        onClick={() => navigate(getRoute("mainpage"))}
      />
    </Fragment>
  );
};

export const ButtonTransaction = ({ navigate }) => {
  return (
    <Fragment>
      <ButtonReady
        width="230px"
        text="Перевести"
        onClick={() => navigate(getRoute("success"))}
      />
    </Fragment>
  );
};

export const ButtonSuccess = ({ navigate }) => {
  return (
    <Fragment>
      <ButtonReady
        width="200px"
        text="Вернуться на главную"
        onClick={() => navigate(getRoute("mainpage"))}
      />
    </Fragment>
  );
};

export const ButtonError = ({ navigate }) => {
  return (
    <Fragment>
      <ButtonReady
        width="230px"
        text="Попробовать ещё раз"
        onClick={() => navigate(getRoute("transaction"))}
      />
    </Fragment>
  );
};

export const ButtonAuth = ({ navigate }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
