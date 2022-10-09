import React from 'react'

import { ButtonText, ButtonWrapper } from './styled'

export const Button = ({
  onClick,
  text,
  width = '140px',
  type = 'primary',
  disabled = false,
  customStyles = {},
  disabledColor = false,
}) => (
  <ButtonWrapper
    type={type}
    width={width}
    disabled={disabled}
    disabledColor={disabledColor}
    style={customStyles}
    onClick={() => !disabled && onClick()}
  >
    <ButtonText>{
      text
    }</ButtonText>
  </ButtonWrapper>
)
