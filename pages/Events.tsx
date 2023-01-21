import React from "react";

import Banner from "../components/Banner";
import EventBox from "../components/eventsBox/eventBox";
import Header from "../components/Header";
import { AboutusContainer } from "./PageStyles/aboutUsStyles";

export interface IEventsProps {}

const Events: React.FC<IEventsProps> = () => {
  return (
    <>
      <Header home={false} linkNumber={3} />
      <Banner
        mainHeader={"Events"}
        breadcrumb={"Events"}
        imagePath={"/bannerimg1.png"}
      />
      <br />
      <AboutusContainer>
        <EventBox></EventBox>
      </AboutusContainer>
    </>
  );
};

export default Events;
