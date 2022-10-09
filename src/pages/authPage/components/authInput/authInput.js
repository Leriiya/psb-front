import React from "react";
import { ChangeEvent, useCallback, useState, useMemo } from "react";

import { v4 as uuid } from "uuid";
import { VisibleSvg } from "../../../../images/VisibleSvg";

//   import visibleIcon from 'images/visible.svg'

import {
  AuthLabel,
  AuthInputGroup,
  AuthInputStyled,
  AuthInputWrapper,
  AuthPasswordIcon,
} from "./styled";
//   import { VisibleSvg } from 'images/svg'

// export type TAuthInput = {
//   value?: string;
//   label?: string;
//   type: "number" | "password";
//   maxLength?: number;
//   setValue: (value: string) => any;
// };

export const AuthInput = ({
  type,
  value,
  label,
  setValue,
  maxLength,
  placeholder
}) => {
  const [isVisible, setVisible] = useState(false);
  const inputType = type === "password" && isVisible ? "text" : type;
  const inputId = useMemo(() => String(uuid()), []);

  const toggleVisible = useCallback(
    () => setVisible((isVisible) => !isVisible),
    [setVisible]
  );

  const inputChangeHandler = useCallback(
    () => {}, [setValue]
  );

  return (
    <AuthInputGroup>
      {label && <AuthLabel htmlFor={inputId}>{label}</AuthLabel>}
      <AuthInputWrapper>
        <AuthInputStyled
          id={inputId}
          value={value}
          type={inputType}
          maxLength={maxLength || 40}
          onChange={inputChangeHandler}
          placeholder={placeholder}
        />
        {type === "password" && (
          <AuthPasswordIcon onClick={toggleVisible}>
            <VisibleSvg />
          </AuthPasswordIcon>
        )}
      </AuthInputWrapper>
    </AuthInputGroup>
  );
};
