import React from 'react'

import { ButtonReadyText, ButtonReadyWrapper } from './styled'

export const ButtonReady = ({
  onClick,
  text,
  width = '140px',
  type = 'primary',
  disabled = false,
  customStyles = {},
  disabledColor = false,
}) => (
  <ButtonReadyWrapper
    type={type}
    width={width}
    disabled={disabled}
    disabledColor={disabledColor}
    style={customStyles}
    onClick={() => !disabled && onClick()}
  >
    <ButtonReadyText>{
      text
    }</ButtonReadyText>
  </ButtonReadyWrapper>
)
