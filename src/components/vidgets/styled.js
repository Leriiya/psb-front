import styled from "styled-components/macro";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background: #141835;
  color: #ffffff;
  padding: 0 30px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Box = styled.div`
  height: 70px;
  width: 70px;
  background: #C4C3C9;
  color: black;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;

  &:active {
    background: #F7B092;
    color: white;
  }
`;
