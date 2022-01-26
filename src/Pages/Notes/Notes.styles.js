import styled from "styled-components";
import { colors } from "../../Themes/colors";

export const Container = styled.div`
  width: 1224px;
  margin: 25px auto 75px auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  height: 75px;
  bottom: 0;
  width: 100%;
  background-color: ${colors.background.secondary};
  color: ${colors.text.primary};
  text-align: center;
`;

export const Note = styled.div`
  background: ${(props) => props.background};
  height: 190px;
  width: 190px;
  margin: 7px;
`;
