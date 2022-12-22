import styled from "styled-components";

export const Banner = styled.div`
  height: 82vh;
  background-image: url("/homepagebak.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const IntroSection = styled.div`
  height: 0vh;
  background: linear-gradient(90deg, #d1e6e7, #c3dbe7);
`;

export const IntroBox = styled.div`
  background-color: #46c4c0db;
  padding: 34px 84px 34px 84px;
  margin: 0 auto;
  text-align: center;
  transform: translateY(-85px);
  font-size: 14px;
  width: 614px;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
  border-radius: 5px;
`;

export const IntroBoxHeader = styled.h2`
  font-family: "Lato", sans-serif;
  margin: 0;
  margin-bottom: 2vh;
  font-weight: 400;
  font-size: 150%;
`;

export const IntroBoxSubHeader = styled.p`
  font-family: "Lato", sans-serif;
  margin: 0;
  font-weight: 300;
  font-size: 110%;
`;

export const ServicesSection = styled.div`
  height: 300vh;
  width: 100vw;
  padding-top: 18vh;
  background-image: url("/servicessectionbak.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ServicesBox = styled.div`
  height: 40vh;
  width: 60vw;
  border: 2px solid red;
`;

export const ServicesTitleSection = styled.div`
  display: flex;
`;
