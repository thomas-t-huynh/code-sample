import { ButtonStyled } from "./Button.styles";

export function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}
