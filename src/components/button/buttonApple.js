import React from "react";
import { AppleSvg, AppleWhiteSvg } from "../../images/applesvg";

import { ButtonTextId, ButtonWrapperId, SvgContainer } from "./styled";

export const ButtonApple = ({
  onClick,
  text,
  width = "140px",
  type = "primary",
  disabled = false,
  customStyles = {},
  disabledColor = false,
}) => (
  <ButtonWrapperId
    type={type}
    width={width}
    disabled={disabled}
    disabledColor={disabledColor}
    style={customStyles}
    onClick={() => !disabled && onClick()}
  >
    <SvgContainer>
      <AppleWhiteSvg />
    </SvgContainer>
    <ButtonTextId>{text}</ButtonTextId>
  </ButtonWrapperId>
);
