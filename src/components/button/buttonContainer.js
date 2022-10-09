import React, { Fragment } from "react";
import { getRoute } from "../../getRoute/getRoute";
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
