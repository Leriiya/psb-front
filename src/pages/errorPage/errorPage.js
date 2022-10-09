import React from "react";
import { ButtonError } from "../../components/button/buttonContainer";
import { PageContainer } from "../mainPage/styled";
import { ErrorImg, ErrorText } from "./styled";
import { observer } from "mobx-react-lite";
import { useVidgets } from "../mainPage/hook";

export const ErrorPage = observer(() => {
  const { navigate } = useVidgets();
  return (
    <PageContainer>
      <ErrorText>Что-то пошло не так...</ErrorText>
      <ErrorImg />
      <ButtonError navigate={navigate} />
    </PageContainer>
  );
});
