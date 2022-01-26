import { InputStyled } from "./Input.styles";

export function Input({ onChange, value }) {
  return <InputStyled onChange={onChange} value={value} />;
}
