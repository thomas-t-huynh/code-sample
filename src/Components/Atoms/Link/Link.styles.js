import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../Themes/colors";

export const LinkStyled = styled(Link)`
  color: ${colors.text.primary};
  text-decoration: none;
  margin: 0px 10px 0px 10px;
  font-size: 16px;
`;
