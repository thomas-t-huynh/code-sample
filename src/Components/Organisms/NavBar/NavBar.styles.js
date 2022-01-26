import styled from "styled-components";

import { colors } from "../../../Themes/colors";

export const HeaderStyled = styled.header`
  background: ${colors.background.secondary};
  color: ${colors.text.primary};
  height: 70px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
