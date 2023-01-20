import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";

import {
  FooterContainer,
  FooterIconContainer,
  FooterWhiteBox,
  IconCircle,
  IconHeading,
  IconPara,
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
              <EnvironmentOutlined />
            </IconCircle>
            <IconHeading>Address</IconHeading>
            <IconPara>No 37/1, Hotel Road, Mount Lavinia</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <PhoneOutlined />
            </IconCircle>
            <IconHeading>Hotline</IconHeading>
            <IconPara>+94 74 1199170</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <MailOutlined />
            </IconCircle>
            <IconHeading>Support</IconHeading>
            <IconPara>manisha@umbartha.org</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <FacebookOutlined />
            </IconCircle>
            <IconHeading>Facebook</IconHeading>
            <IconPara>/UmbarthaSL</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle $contactPage={contactPage}>
              <InstagramOutlined />
            </IconCircle>
            <IconHeading>Instagram</IconHeading>
            <IconPara>/umbarthabt</IconPara>
          </FooterIconContainer>
        </FooterWhiteBox>
      </FooterContainer>
    </>
  );
};

export default Footer;
