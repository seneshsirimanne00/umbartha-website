import { Button } from "antd";
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
  height: 211vh;
  width: 100vw;
  padding-top: 21vh;
  // background-image: url(/servicessectionbak.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ServicesBox = styled.div`
  height: 89vh;
  width: 60vw;
  background-color: #fffefe9c;
  filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
    hue-rotate(0deg);
  border-radius: 5px;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.22);
  margin-bottom: 10vh;
`;

export const ServicesTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 3vw;
`;

export const ServiceTitleSecHeader = styled.h1`
  font-family: "Lato", sans-serif;
  color: #261552;
  font-size: 200%;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.2em;
`;

export const ServiceTitleButton = styled(Button)`
  font-family: "Lato", sans-serif;
  margin: 0;
  font-weight: 800;
  font-size: 100%;
  color: #261552;
  line-height: 1.6em;
  text-align: center;
  padding: 1vh 2vw;
  height: 6vh;
`;

export const ServiceBox = styled.div`
  display: flex;
  width: 80%;
  height: 28vh;
  align-items: center;
  justify-content: center;
  padding: 5vh 2vw;
  flex-direction: column;
  background: white;
`;

export const ServiceBoxHeader = styled.h2`
  font-family: "Lato", sans-serif;
  margin: 0;
  margin-bottom: 2vh;
  font-weight: 700;
  font-size: 170%;
  color: #00687c;
`;

export const ServiceBoxSubHeader = styled.p`
  font-family: "Lato", sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 130%;
  color: #261552;
  line-height: 1.6em;
  text-align: center;
`;

export const PosterBox = styled.div`
  height: 100vh;
  padding-top: 8vh;
  text-align: center;
  display: flex;
  width: 100vw;
  flex-direction: column;
  background-image: url(/posterSectionImg2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const PosterBoxHeader = styled.h1`
  font-family: "Lato", sans-serif;
  margin: 0;
  margin-bottom: 2vh;
  font-weight: 500;
  font-size: 250%;
  color: #261552;
`;

export const PosterBoxPara = styled.p`
  font-family: "Lato", sans-serif;
  margin: 0;
  font-weight: 500;
  font-size: 110%;
  line-height: 1.6em;
  text-align: left;
  color: #261552;
`;

export const PosterSection = styled.div`
  height: 81vh;
  padding-top: 5vh;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const PosterSectionLeft = styled.div`
  display: flex;
  height: 80vh;
  width: 39vw;
  justify-content: flex-end;
`;

export const PosterSectionRight = styled.div`
  display: flex;
  height: 57vh;
  width: 50vw;
  align-items: flex-start;
  padding: 6vh 3vw;
`;

export const BookingBanner = styled.div`
  display: flex;
  height: 30vh;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const ClientsSection = styled.div`
  display: flex;
  height: 82vh;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background-image: url(/clientsecbak.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ClientsContainer = styled.div`
  display: flex;
  height: 65vh;
  width: 63vw;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: #ffffffb3;
  margin-top: 5vh;
  padding-top: 4vh;
`;

export const ClientsRBoxesContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
`;

export const ClientsRBox = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 4vh;
  height: 23vh;
  width: 11vw;
  margin: 1vw;
  background: #ffffff8a;
  margin-bottom: 5vh;
`;
