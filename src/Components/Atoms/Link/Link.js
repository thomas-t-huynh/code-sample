import { LinkStyled } from "./Link.styles";

export function Link({ name, to }) {
  return <LinkStyled to={to}>{name}</LinkStyled>;
}
