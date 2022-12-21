import React from "react";
import Header from "../components/Header";

export interface INewAppointmentsProps {}

const NewAppointments: React.FC<INewAppointmentsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>NewAppointments</h1>
    </>
  );
};

export default NewAppointments;
