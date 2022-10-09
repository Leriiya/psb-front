import styled from "styled-components/macro";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #141835;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #e86730;
  color: #ffffff;
  padding: 10px 30px;
  justify-content: space-between;
`;

export const Name = styled.div`
  color: black;
  font-size: 22px;
  font-weight: 500;
`;

export const Banner = styled.img`
  width: 350px;
  height: 200px;
  border-radius: 10px;
`;

export const Icon = styled.div``;

export const Information = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FinanceDiagram = styled.div`
  width: 250px;
  height: 200px;
  background: white;
  margin-top: 30px;
`;
