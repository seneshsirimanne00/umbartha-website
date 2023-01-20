import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Input } from "antd";
import Item from "antd/es/descriptions/Item";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../devices";

export const NavbarHome = styled.nav<{ $home: boolean }>`
  font-family: "Lato", sans-serif;
  height: 50px;
  background: ${(props) => (props.$home ? "#fcfcfca3" : "#ffff")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 123px;
  width: 100%;
  z-index: 600;
  position: ${(props) => (props.$home ? "fixed" : "unset")};
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: color 0.2s ease 0s, background-color 0.2s ease 0s;

  a {
    text-decoration: none;
    padding: 0 1% 2.5%;
    color: ${(props) => (props.$home ? "black" : "#018291")};
    font-size: 1vw;
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

export const NavbarLeft = styled.div`
  height: 123px;
  display: flex;
  width: 25%;
  align-items: center;

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const NavbarRight = styled.div`
  width: 40%;
  height: 123px;
  display: flex;
  flex-direction: column;
`;

export const NavbarRightTop = styled.div`
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 3.6vw;
  font-size: 13px;

  @media ${device.tablet} {
    height: 30%;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`;

export const NavbarRightBottom = styled.div<{ $isBreakPoint: boolean }>`
  height: 50%;
  display: flex;
  align-items: ${(props) => (props.$isBreakPoint ? "center" : "flex-end")};
  justify-content: ${(props) => (props.$isBreakPoint ? "flex-end" : "unset")};
  padding-right: ${(props) => (props.$isBreakPoint ? "3.4vw" : 0)};

  @media ${device.tablet} {
    height: 70%;
    justify-content: center;
    align-items: center;
    padding-right: 0;
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

export const MobileHeaderDrawer = styled(Drawer)`
  div {
    background-color: #46c4c0;
  }
`;

export const MobileHeaderContainer = styled.div`
  display: flex;
  padding: 20px 0 0 0;
  height: 40vh;
  flex-direction: column;
  justify-content: space-around;
`;

export const MobileHeaderLink = styled(Link)`
  padding 20px;
  color: white;
  &:hover {
    background-color: #018291;
  }
`;

export const EditedBtn = styled(Button)`
  color: red;
  width: 300px;
`;

export const BannerContainer = styled.div<{ $imagePath: string }>`
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

  @media (max-width: 550px) {
    height: unset;
  }
`;

export const FooterWhiteBox = styled.div`
  height: 27vh;
  width: 79vw;
  background: #ffffffd9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;

  @media ${device.tablet} {
    width: unset;
  }

  @media (max-width: 550px) {
    background: none;
    flex-direction: column;
    height: unset;
  }
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

  @media (max-width: 550px) {
    height: unset;
    width: unset;
    margin: 20px;
  }
`;

export const IconCircle = styled.div<{ $contactPage: boolean }>`
  width: 69px;
  height: 69px;
  background: ${(props) => (props.$contactPage ? "none" : "#80dcf1")};
  border-radius: 100px;
  color: ${(props) => (props.$contactPage ? "#80dcf1" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.$contactPage ? "40px" : "27px")};
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

export const FormInput = styled(Input)`
  width: 100%;
  border-radius: 0;
  font-family: "Lato", sans-serif;
`;
