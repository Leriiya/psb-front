import styled from 'styled-components/macro'

// export type TInputField = {
//   width?: string
//   height?: string
// }

export const InputField = styled.input`
  background: #F5F5FF;
  border-radius: 5px;
  font-size: 14px;
  line-height: 16px;
  color: #333F49;
  border: none;
  outline: none;
  padding: 0 20px;
  max-width: 100%;
  width: 350px;
  margin: 10px 40px;
  height: 35px;
  
  &::placeholder {
    color: #BEC3CD;
  }
  
  &:disabled {
    color: #79798E;
  }
  
  /* ↓ Убирает стрелки в input type number ↓ */

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'],
  &[type="number"]:hover,
  &[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
  }
`
