import { InputField } from './styled'
import React from 'react'


export const Input = ({
//   value,
  onChange,
  onClick,
  width = '100%',
  height = '40px',
  type = 'text',
  disabled = false,
  placeholder = '',
}) => (
  <InputField
    type={type}
    // value={value}
    width={width}
    height={height}
    onClick={onClick}
    disabled={disabled}
    placeholder={placeholder}
    onChange={(e) => onChange && onChange(e.target.value)}
  />
)
