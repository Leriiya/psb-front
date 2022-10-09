import styled from 'styled-components/macro'

export const AuthInputGroup = styled.div``

export const AuthLabel = styled.label`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: black;
  margin-bottom: 10px;
  display: block;
`

export const AuthInputStyled = styled.input`
  width: 300px;
  align-item: center;
  height: 50px;
  background: #F9F9FD;
  border: 1px solid #E6E6F8;
  border-radius: 10px;
  outline: none;
  padding: 13px 15px;
  font-size: 15px;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const AuthInputWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 10px 50px;
`

export const AuthPasswordIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 13px;
  right: 15px;
`