import React from "react";
import Header from "../components/Header";

export interface IEventsProps {}

const Events: React.FC<IEventsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>Events</h1>
    </>
  );
};

export default Events;
