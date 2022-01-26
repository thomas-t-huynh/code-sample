import { Button, Input } from "../../Atoms";
import { FormStyled } from "./InputBar.styles";

export function Inputbar({ onChange, value, onClick, buttonText }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Input value={value} onChange={onChange} />
      <Button>{buttonText}</Button>
    </FormStyled>
  );
}
