import React from "react";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import {
  FooterContainer,
  FooterIconContainer,
  FooterWhiteBox,
  IconCircle,
  IconHeading,
  IconPara,
  LinkNoStyle,
} from "./styled";

export interface IFooterProps {
  contactPage: boolean;
}

const Footer: React.FC<IFooterProps> = ({ contactPage }) => {
  return (
    <>
      <FooterContainer $footerImg={contactPage ? " " : "/footerimg.png"}>
        <FooterWhiteBox>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <LinkNoStyle
                href="https://www.google.com/maps/place/Umbartha/@6.8358518,79.8650182,17.5z/data=!4m5!3m4!1s0x0:0x7b32750fa7b7bf6c!8m2!3d6.8359039!4d79.8661213?hl=en-US"
                target="_blank"
              >
                <EnvironmentOutlined />
              </LinkNoStyle>
            </IconCircle>
            <IconHeading>Address</IconHeading>
            <LinkNoStyle
              href="https://www.google.com/maps/place/Umbartha/@6.8358518,79.8650182,17.5z/data=!4m5!3m4!1s0x0:0x7b32750fa7b7bf6c!8m2!3d6.8359039!4d79.8661213?hl=en-US"
              target="_blank"
            >
              <IconPara>No 37/1, Hotel Road, Mount Lavinia</IconPara>
            </LinkNoStyle>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <LinkNoStyle href="tel:+94 74 1199170">
                <PhoneOutlined />
              </LinkNoStyle>
            </IconCircle>
            <IconHeading>Hotline</IconHeading>
            <IconPara>
              <LinkNoStyle href="tel:+94 74 1199170">074 119 9170</LinkNoStyle>
            </IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <LinkNoStyle href="mailto:manisha@umbartha.org">
                <MailOutlined />
              </LinkNoStyle>
            </IconCircle>
            <IconHeading>Support</IconHeading>
            <IconPara>
              <LinkNoStyle href="mailto:manisha@umbartha.org">
                manisha@umbartha.org
              </LinkNoStyle>
            </IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <LinkNoStyle
                href="https://www.facebook.com/UmbarthaSL"
                target="_blank"
              >
                <FacebookOutlined />
              </LinkNoStyle>
            </IconCircle>
            <IconHeading>Facebook</IconHeading>
            <LinkNoStyle
              href="https://www.facebook.com/UmbarthaSL"
              target="_blank"
            >
              <IconPara>/UmbarthaSL</IconPara>
            </LinkNoStyle>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <LinkNoStyle
                href="https://www.instagram.com/umbarthabt/"
                target="_blank"
              >
                <InstagramOutlined />
              </LinkNoStyle>
            </IconCircle>
            <IconHeading>Instagram</IconHeading>
            <LinkNoStyle
              href="https://www.instagram.com/umbarthabt/"
              target="_blank"
            >
              <IconPara>/umbarthabt</IconPara>
            </LinkNoStyle>
          </FooterIconContainer>
        </FooterWhiteBox>
      </FooterContainer>
    </>
  );
};

export default Footer;
