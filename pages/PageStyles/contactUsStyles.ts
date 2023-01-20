import { Col } from "antd";
import styled from "styled-components";

import { BannerContainer } from "../../components/styled";
import { device } from "../../devices";

export const ContactContainer = styled.div`
  background: white;
  padding: 10vh 14vw;
`;

export const ContainerBottomRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const ContainerBottomLeft = styled.div`
  padding: 4vw 0 6vw;
`;

export const BottomLeftCol = styled(Col)`
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

export const BannerContactPage = styled(BannerContainer)`
  height: 45vh;
`;

export const QuoteContainer = styled.div`
  margin: 0vw 10vw;
  padding: 3vw;
  background: #ffffffc4;
`;

export const MapIframe = styled.iframe`
  width: 100%;
  height: 70vh;
`;
