import React from "react";
import { VisibleSvg } from "../../images/VisibleSvg";
import { Card, CardCash, CardData, CardInfo, CardsContainer, CardTitle } from "./styled";

export const CardList = () => {
  return (
    <CardsContainer>
      <CardTitle>Карты</CardTitle>
      <Card >
        <CardInfo>
          <VisibleSvg />
          <CardData>Карта ****</CardData>
        </CardInfo>
        <CardCash>12 033</CardCash>
      </Card>
      <Card>
        <CardInfo>
          <VisibleSvg />
          <CardData>Карта ****</CardData>
        </CardInfo>
        <CardCash>20 300</CardCash>
      </Card>
    </CardsContainer>
  );
};
