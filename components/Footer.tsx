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

export interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <>
      <FooterContainer $footerImg="/footerimg.png">
        <FooterWhiteBox>
          <FooterIconContainer>
            <IconCircle>
              <EnvironmentOutlined />
            </IconCircle>
            <IconHeading>Address</IconHeading>
            <IconPara>No 37/1, Hotel Road, Mount Lavinia</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle>
              <PhoneOutlined />
            </IconCircle>
            <IconHeading>Hotline</IconHeading>
            <IconPara>+94 74 1199170</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle>
              <MailOutlined />
            </IconCircle>
            <IconHeading>Support</IconHeading>
            <IconPara>manisha@umbartha.org</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle>
              <FacebookOutlined />
            </IconCircle>
            <IconHeading>Facebook</IconHeading>
            <IconPara>/UmbarthaSL</IconPara>
          </FooterIconContainer>
          <FooterIconContainer>
            <IconCircle>
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
