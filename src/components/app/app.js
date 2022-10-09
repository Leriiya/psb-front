import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import { AuthPage } from "../../pages/authPage/authPage";
import { MainPage } from "../../pages/mainPage/mainPage";
import { map } from "lodash";
import { PageContainer } from "./styled";
import { routesConfig } from "../../getRoute/routeConfig";
import { useApp } from "./hooks";

export const App = () => {
  const { isAuth } = useApp();
  return (
    // <Fragment>
    // {!isAuth ?
    <Fragment>
      {/* <AuthPage /> */}

      {/* <PageContainer> */}
        <Routes>
          {map(routesConfig, ({ path, element }, i) => (
            <Route path={path} element={element} key={i} />
          ))}
        </Routes>
      {/* </PageContainer> */}
    </Fragment>
    //  : <AuthPage />}
    // </Fragment>
  );
};
