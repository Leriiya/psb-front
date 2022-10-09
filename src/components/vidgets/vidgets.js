import React from "react";
import { getRoute } from "../../getRoute/getRoute";
import { Box, BoxContainer } from "./styled";

export const Vidgets = ({navigate}) => {
  return (
    <>
      <BoxContainer>
        <Box>Виджет один</Box>
        <Box onClick={() => navigate(getRoute('family'))}>Семейный доступ</Box>
        <Box onClick={() => navigate(getRoute('transaction'))}>Сделать платёж</Box>
        <Box>Виджет четыре</Box>
      </BoxContainer>
    </>
  );
};
