import styled from "styled-components/macro";

export const TransactionCard = styled.img`
  position: absolute;
  width: 350px;
  height: 167px;
  border-radius: 22px;
  filter: brightness(0.6);
  margin: 10px;
  margin: 75px auto;
`;

export const CardDescription = styled.img`
  font-size: 24px;
  font-weight: 600;
  color: white;
  width: 300px;
  position: relative;
  top: 30px;
`;

export const CardName = styled.div``;

export const CardNumber = styled.div``;

export const CardSum = styled.div``;

export const FavouriteContact = styled.div`
font-size: 16px;
font-weight: 600;
color: white;
`;

export const Favourite = styled.div`
  background: #141835;
  margin-top: 195px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 13px;
`;

export const ContactSearch = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  margin-top: 20px;
`;
export const Money = styled.div``;

export const MoneyInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 10px 20px;
`;

export const SelectTransContainer = styled.div`
    margin-top: 35px;
    width: 350px;
`
export const PageTransContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${'' /* background: #141835; */}
  background: #45455F;
  flex-direction: column;
`;