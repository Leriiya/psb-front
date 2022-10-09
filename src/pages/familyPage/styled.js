import styled from "styled-components/macro";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: pink;
  overflow: hidden;
  flex-direction: column;
  padding: 10px;
`;

export const Description = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: white;
    width: 300px;
    text-align: center;
    position: relative;
    top: 50px;
`;

export const FamilyAdv = styled.img`
position: absolute;
  width: 350px;
  height: 150px;
  border-radius: 22px;
  filter: brightness(0.6);
  margin: 10px;
`;

export const SelectContainer = styled.div`
    margin-top: 145px;
    width: 350px;
`

export const SelectAnotherContainer = styled.div`
    margin-top: 10px;
    width: 350px;
`

export const ShowContacts = styled.div`
  align-items: start !important;
`
