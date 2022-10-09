import React from "react";
import { Input } from "../../components/input/input";
import { observer } from "mobx-react-lite";
import {
  ButtonFamilyContainer,
  Description,
  FamilyAdv,
  FamilyAnotherContainer,
  FamilyContainer,
  PageContainer,
  SelectAnotherContainer,
  SelectContainer,
  ShowAnotherContacts,
  ShowContacts,
} from "./styled";
import { useVidgets } from "../mainPage/hook";
import { ButtonFamily } from "../../components/button/buttonContainer";
import { Header, Icon, Name } from "../mainPage/styled";
import { ContactSvg } from "../../images/ContactSvg";
import { Exit, RemoveMember } from "../../components/button/familyButtons";

export const FamilyPage = observer(() => {
  const { navigate } = useVidgets();
  return (
    <PageContainer>
      <Header>
        <Name>Валерия</Name>
        <Icon>
          <ContactSvg />
        </Icon>
      </Header>
      <FamilyAdv src="https://sun9-west.userapi.com/sun9-40/s/v1/ig2/CQ2Emx1_mVHI5cz6KUgz-lAyeNDkDpSJ65upS8Un8xBkxYa01IlmO2Lz2T6Tc3AG7Sy8_PYI1rN5xANzbIZkBo81.jpg?size=890x693&quality=96&type=album" />
      <Description>
        Информация о семейной группе, что это такое и как пользоваться
      </Description>
      <FamilyContainer>
      <ShowContacts>Семейная группа</ShowContacts>
        <SelectContainer>
          <select
            class="form-select form-select-sm w-100"
            aria-label=".form-select-sm example"
          >
            <option selected>Выберите контакты</option>
            <option value="1">Лера</option>
            <option value="2">Саша</option>
            <option value="3">Луиза</option>
          </select>
        </SelectContainer>
        <ButtonFamilyContainer>
          <RemoveMember text="Исключить" />
          <Exit text="Выйти" />
        </ButtonFamilyContainer>
      </FamilyContainer>

      <FamilyAnotherContainer>
      <ShowAnotherContacts>Контакты</ShowAnotherContacts>
        <SelectContainer>
          <select
            class="form-select form-select-sm w-100"
            aria-label=".form-select-sm example"
          >
            <option selected>Выберите контакты</option>
            <option value="1">Лера</option>
            <option value="2">Саша</option>
            <option value="3">Луиза</option>
          </select>
        </SelectContainer>
        <ButtonFamilyContainer>
          <RemoveMember text="Исключить" />
          <Exit text="Выйти" />
        </ButtonFamilyContainer>
      </FamilyAnotherContainer>
      <ShowAnotherContacts>Добавить друзей</ShowAnotherContacts>
      <Input placeholder="Введите номер" />
      <ButtonFamily navigate={navigate} />
    </PageContainer>
  );
});
