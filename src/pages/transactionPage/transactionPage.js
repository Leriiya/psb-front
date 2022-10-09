import React from "react";
import { ButtonTransaction } from "../../components/button/buttonContainer";
import { Contacts } from "../../components/contacts/contacts";
import { Header, Icon, Name, PageContainer } from "../mainPage/styled";
import { observer } from "mobx-react-lite";
import {
  Favourite,
  FavouriteContact,
  MoneyInput,
  PageTransContainer,
  SelectTransContainer,
  TransactionCard,
} from "./styled";
import { useVidgets } from "../mainPage/hook";
import { ContactSvg } from "../../images/ContactSvg";
import CardIcon from '../../images/card.svg'

export const TransactionPage = observer(() => {
  const { navigate } = useVidgets();
  return (
    <PageTransContainer>
      <Header>
        <Name>Валерия</Name>
        <Icon>
          <ContactSvg />
        </Icon>
      </Header>
      <TransactionCard src={CardIcon} />
      {/* <CardDescription src={CardIcon} /> */}
      <Favourite>
        <FavouriteContact>ИЗБРАННЫЕ КОНТАКТЫ</FavouriteContact>
        <Contacts />
      </Favourite>
      {/* <ContactSearch></ContactSearch> */}
      <SelectTransContainer>
        <select
          class="form-select form-select-sm w-100 h-30px"
          aria-label=".form-select-sm example"
        >
          <option selected>Кому отправить</option>
          <option value="1">Лера</option>
          <option value="2">Саша</option>
          <option value="3">Луиза</option>
          <option value="4">Иван</option>
          <option value="5">Татьяна</option>
          <option value="6">Наталья</option>
        </select>
      </SelectTransContainer>
      {/* <Money>Сумма</Money> */}
      <MoneyInput placeholder="Введите сумму" />
      <ButtonTransaction navigate={navigate} />
    </PageTransContainer>
  );
});
