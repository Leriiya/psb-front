import styled from "styled-components/macro";

export const CardsContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  border-radius: 10px;
`;

export const Card = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 5px 15px;
  background: #f7b092;
  color: white;
  margin: 0 8px;
  border-radius: 10px;

  &:active {
    background: white;
    color: #f7b092;
  }
`;

export const CardInfo = styled.div`
  background: #c4c3c9;
  border-radius: 10px;
  font-size: 12px;
  padding: 3px 8px;
`;

export const CardData = styled.div``;

export const CardCash = styled.div`
  margin-top: 25px;
`;

export const CardTitle = styled.div`
  background: white;
  padding: 5px 15px;
`;
