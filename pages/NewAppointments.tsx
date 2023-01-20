import { Col, Row } from "antd";
import React from "react";
import Header from "../components/Header";
import { Banner } from "./PageStyles/homeStyles";

export interface INewAppointmentsProps {}

const NewAppointments: React.FC<INewAppointmentsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>NewAppointments</h1>
  
          
      <iframe src={"https://meetings.hubspot.com/vibudha"} width={"100%"} height={"1000px"}  >
      </iframe>
     
      

    </>
  );
};

export default NewAppointments;
