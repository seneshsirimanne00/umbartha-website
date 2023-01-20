import React from "react";
import EventBox from "../components/eventsBox/eventBox";
import Header from "../components/Header";
import { AboutusContainer } from "./PageStyles/aboutUsStyles";
import { Banner } from "./PageStyles/homeStyles";

export interface IEventsProps {}

const Events: React.FC<IEventsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>Events</h1>
      <br/>
    <AboutusContainer>
  
    <EventBox></EventBox>
    </AboutusContainer>
    </>
  );
};

export default Events;
