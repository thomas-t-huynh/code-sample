import styled from "styled-components";

export const DivStyled = styled.div`
  height: ${(props) => props.height && `${props.height}px`};
  width: ${(props) => props.width && `${props.width}px`};
`;
