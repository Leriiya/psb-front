import React from "react";
import { CardList } from "../../components/cardList/cardList";
import { CardsCarousel } from "../../components/carousel/carousel";
import { Vidgets } from "../../components/vidgets/vidgets";
import { VisibleSvg } from "../../images/VisibleSvg";
import { observer } from 'mobx-react-lite'
import { useVidgets } from './hook'
import {
  Banner,
  FinanceDiagram,
  Header,
  Icon,
  Information,
  Name,
  PageContainer,
} from "./styled";
import BannerIcon from '../../images/banner.svg'
import Diagram from '../../images/diagramm.svg'

import { ContactSvg } from "../../images/ContactSvg";
import { Card, CardCash, CardData, CardInfo, CardsContainer, CardTitle } from "../../components/cardList/styled";

export const MainPage = observer(() => {
  const {
    navigate
  } = useVidgets()

  return (
    <PageContainer>
      <Header>
        <Name>Валерия</Name>
        <Icon>
          <ContactSvg />
        </Icon>
      </Header>
      <Information>
        {/* <CardsCarousel /> */}
        {/* <Banner><BannerSvg /></Banner> */}
        <Banner src={BannerIcon} />
      </Information>
      <Vidgets navigate={navigate} />
      <CardsContainer>
      <CardTitle>Карты</CardTitle>
      <Card onClick={() => {}}>
        <CardInfo>
          <VisibleSvg />
          <CardData>Карта ****</CardData>
        </CardInfo>
        <CardCash>12 033</CardCash>
      </Card>
      <Card onClick={() => {}}>
        <CardInfo>
          <VisibleSvg />
          <CardData>Карта ****</CardData>
        </CardInfo>
        <CardCash>20 300</CardCash>
      </Card>
    </CardsContainer>
      {/* <FinanceDiagram></FinanceDiagram> */}
      <Banner src={Diagram} />

    </PageContainer>
  );
});
