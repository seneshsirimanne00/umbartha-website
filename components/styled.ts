import { Button } from "antd";
import styled from "styled-components";

export const MainHeader = styled.h1`
  //color: ${(props) => props.theme.colors.primary.dark};
  color: red;
`;

export const Navbar = styled.nav`
  font-family: "Lato", sans-serif;
  height: 50px;
  background: #0089ff40;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const EditedBtn = styled(Button)`
  color: red;
  width: 300px;
`;

// for some reason default theme are not adding check later
