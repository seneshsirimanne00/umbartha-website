import { Button } from "antd";
import styled from "styled-components";

export const NavbarHome = styled.nav`
  font-family: "Lato", sans-serif;
  height: 50px;
  background: #fcfcfca3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 123px;
  z-index: 600;
  position: fixed;
  width: 100vw;
  font-weight: 300;
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: color 0.2s ease 0s, background-color 0.2s ease 0s;

  a {
    text-decoration: none;
    padding: 0 4% 8% 4%;
    color: black;
    fontsize: 15px;

    &:hover {
      border-bottom: 4px solid #46c4c0;
    }
  }
`;

export const Navbar = styled.nav`
  font-family: "Lato", sans-serif;
  height: 50px;
  background: #ffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 123px;
  width: 100vw;

  a {
    text-decoration: none;
    padding: 0 4% 8% 4%;
    color: #018291;
    fontsize: 15px;
    letter-spacing: 1px;

    &:hover {
      border-bottom: 4px solid #46c4c0;
    }
  }
`;

export const NavDiv = styled.nav`
  width: 50%;
  height: 123px;
  display: flex;
  align-items: center;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
`;

export const NavDivLogo = styled.nav`
  width: 50%;
  height: 123px;
  display: flex;
  align-items: center;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NavDivRight = styled(NavDiv)`
  padding-left: 5%;
  flex-direction: row;
  padding-right: 60%;
  align-items: flex-end;
`;

export const NavDivRightAlign = styled(NavDiv)`
  text-align: right;
  justify-content: flex-end;
  fontsize: 14px;
`;

export const EditedBtn = styled(Button)`
  color: red;
  width: 300px;
`;

export const BannerContainer = styled.div<{ $imagePath: string }>`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.$imagePath});
`;

export const BannerHeader = styled.h1`
  margin: 0;
  font-family: "Lato", sans-serif;
  margin: 0;
  margin-bottom: 2vh;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 6px #04040459;
  fontsize: 40px;
`;

export const BannerBreadcrumb = styled.h4`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #8c8c8c;
`;

export const BannerLink = styled.a`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 6px #04040459;
`;

export const FooterContainer = styled.div`
  background: #b9f2ff;
  height: 40vh;
  width: 100vw;
`;
