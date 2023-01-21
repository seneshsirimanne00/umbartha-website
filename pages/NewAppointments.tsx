import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";

export interface INewAppointmentsProps {}

const NewAppointments: React.FC<INewAppointmentsProps> = () => {
  return (
    <>
      <Header home={false} linkNumber={6} />
      <Banner
        mainHeader={"New Appointments"}
        breadcrumb={"New Appointments"}
        imagePath={"/bannerimg1.png"}
      />

      <iframe
        src={"https://meetings.hubspot.com/vibudha"}
        width={"100%"}
        height={"1000px"}
      ></iframe>
    </>
  );
};

export default NewAppointments;
