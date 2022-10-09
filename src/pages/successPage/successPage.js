import React from "react";
import { ButtonSuccess } from "../../components/button/buttonContainer";
import { PageContainer } from "../mainPage/styled";
import { SuccessImg, SuccessText } from "./styled";
import { observer } from "mobx-react-lite";
import { useVidgets } from "../mainPage/hook";

export const SuccessPage = observer(() => {
  const { navigate } = useVidgets();
  return (
    <PageContainer>
      <SuccessText>Операция прошла успешно!</SuccessText>
      <SuccessImg />
      <ButtonSuccess navigate={navigate} />
    </PageContainer>
  );
});
