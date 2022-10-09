import React from "react";
import { ButtonSuccess } from "../../components/button/buttonContainer";
import { PageContainer } from "../mainPage/styled";
import { SuccessImg, SuccessText } from "./styled";
import { observer } from "mobx-react-lite";
import { useVidgets } from "../mainPage/hook";
import Pros from '../../images/Pros.svg'

export const SuccessPage = observer(() => {
  const { navigate } = useVidgets();
  return (
    <PageContainer>
      <SuccessText>Операция прошла успешно!</SuccessText>
      <SuccessImg height='200px' src={Pros} />
      <ButtonSuccess navigate={navigate} />
    </PageContainer>
  );
});
