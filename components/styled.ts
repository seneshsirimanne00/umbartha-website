import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import { device } from "../devices";

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
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: color 0.2s ease 0s, background-color 0.2s ease 0s;

  a {
    text-decoration: none;
    padding: 0 4% 8% 4%;
    color: black;
    fontsize: 15px;
    font-weight: 400;

    &:hover {
      border-bottom: 4px solid #46c4c0;
    }
  }

  @media (max-width: 999px) {
    background: #ffff;
  }

  @media ${device.tablet} {
    height: 165px;
    flex-direction: column;
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

export const NavDiv = styled.div<{ $mobile: boolean }>`
  width: 50%;
  height: ${(props) => (props.$mobile ? "80px" : "123px;")};
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.$mobile ? "0" : " 10%")};
  flex-direction: column;
  justify-content: ${(props) => (props.$mobile ? "flex-end" : "center")};
`;

export const NavDivLogo = styled.div`
  width: 50%;
  height: 123px;
  display: flex;
  align-items: center;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.tablet} {
    align-items: center;
    height: 80px;
    padding-left: 0;
    height: 80px;
  }
`;

export const NavDivRight = styled(NavDiv)<{ $mobile: boolean }>`
  padding-left: ${(props) => (props.$mobile ? "0" : "5%")};
  flex-direction: row;
  padding-right: ${(props) => (props.$mobile ? "0" : "60%")};
  align-items: flex-end;

  @media ${device.tablet} {
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    padding-left 0;
    align-content: flex-start;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  font-size: 26px;
  padding: 10px;
  background: #46c4c0;
  margin: 5px;
  color: white;
  cursor: pointer;

  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavDivRightAlign = styled(NavDiv)`
  text-align: right;
  justify-content: flex-end;
  font-size: 14px;
  @media ${device.tablet} {
    align-items: center;
    padding-left 0;
    justify-content: flex-start;
  }
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

export const FooterContainer = styled.div<{ $footerImg: string }>`
  height: 40vh;
  background-image: url(${(props) => props.$footerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterWhiteBox = styled.div`
  height: 27vh;
  width: 79vw;
  background: #ffffffd9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const FooterIconContainer = styled.div`
  height: 27vh;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Lato", sans-serif;
  color: #00687c;
  font-weight: 400;
  padding: 0 2%;
  justify-content: space-evenly;
`;

export const IconCircle = styled.div`
  width: 69px;
  height: 69px;
  background: #80dcf1;
  border-radius: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  cursor: pointer;
  &:hover {
    color: black;
    background: white;
  }
`;

export const IconHeading = styled.h4`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 120%;
`;

export const IconPara = styled.p`
  margin: 0;
  font-weight: 400;
  color: #4a545a;
  font-family: "Josefin Sans", Sans-serif;
  font-size: 90%;
  font-weight: 300;
  line-height: 1.5em;
`;
