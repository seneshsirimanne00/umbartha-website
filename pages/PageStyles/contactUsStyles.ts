import styled from "styled-components";

import { BannerContainer } from "../../components/styled";
import { device } from "../../devices";

export const ContactContainer = styled.div`
  background: white;
  padding: 10vh 14vw;
`;

export const ContainerBottom = styled.div`
  display: flex;
  font-family: "Lato", sans-serif;
`;

export const ContainerBottomRight = styled.div`
  padding: 5vw;
  height: 40vh;
  width: 50%;
  padding-left: 20%;

  @media ${device.tablet} {
    padding-left: 0;
  }
`;

export const ContainerBottomLeft = styled.div`
  padding: 5vw;
  width: 50%;
`;

export const BannerContactPage = styled(BannerContainer)`
  height: 45vh;
`;

export const QuoteContainer = styled.div`
  margin: 0vw 10vw;
  padding: 3vw;
  background: #ffffffc4;
`;
