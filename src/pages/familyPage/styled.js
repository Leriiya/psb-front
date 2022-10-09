import styled from "styled-components/macro";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #141835;
  overflow: hidden;
  flex-direction: column;
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
  margin-top: 85px;
`;

export const SelectContainer = styled.div`
    
    width: 350px;
`

export const SelectAnotherContainer = styled.div`
    margin-top: 10px;
    width: 350px;
`

export const ShowContacts = styled.div`
  color: white;
  margin-bottom: 5px;
  text-align: center;
`

export const ShowAnotherContacts = styled.div`
  color: white;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
`

export const FamilyContainer = styled.div`
  margin-top: 150px;
`

export const FamilyAnotherContainer = styled.div`
  margin-top: 15px;
`

export const ButtonFamilyContainer = styled.div`
display: flex;
justify-content: space-around;
`
