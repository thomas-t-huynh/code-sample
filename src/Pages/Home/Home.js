import { Link, Spacer } from "../../Components/Atoms";
import { Container, H1Styled } from "./Home.styles";

export function Home() {
  return (
    <Container>
      <Spacer height={200} />
      <H1Styled>Welcome to Post-A-Note!</H1Styled>
      <Spacer height={200} />
      <Link to="/notes" name="Click here to get started!" />
    </Container>
  );
}
