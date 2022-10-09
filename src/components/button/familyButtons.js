import React from 'react'

import { ButtonExitText, ButtonExitWrapper, ButtonRemoveText, ButtonRemoveWrapper } from './styled'

export const RemoveMember = ({
  onClick,
  text,
  width = '140px',
  type = 'primary',
  disabled = false,
  customStyles = {},
  disabledColor = false,
}) => (
  <ButtonRemoveWrapper
    type={type}
    width={width}
    disabled={disabled}
    disabledColor={disabledColor}
    style={customStyles}
    onClick={() => !disabled && onClick()}
  >
    <ButtonRemoveText>{
      text
    }</ButtonRemoveText>
  </ButtonRemoveWrapper>
)

export const Exit = ({
    onClick,
    text,
    width = '140px',
    type = 'primary',
    disabled = false,
    customStyles = {},
    disabledColor = false,
  }) => (
    <ButtonExitWrapper
      type={type}
      width={width}
      disabled={disabled}
      disabledColor={disabledColor}
      style={customStyles}
      onClick={() => !disabled && onClick()}
    >
      <ButtonExitText>{
        text
      }</ButtonExitText>
    </ButtonExitWrapper>
  )
