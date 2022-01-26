import { Icon, Spacer, Link } from "../../Atoms";
import { Container, HeaderStyled } from "./NavBar.styles";

export function NavBar({ logo, headerTitle, alt, links, children }) {
  return (
    <HeaderStyled>
      <Container>
        <Spacer width={20} />
        <Icon src={logo} alt={alt} />
        <Spacer width={20} />
        <h1>{headerTitle}</h1>
        <Spacer width={20} />
        {links.map((link) => (
          <Link key={link.name} {...link} />
        ))}
      </Container>
      {children}
    </HeaderStyled>
  );
}
