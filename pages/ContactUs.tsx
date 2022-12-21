import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

export interface IContactUsProps {}

const ContactUs: React.FC<IContactUsProps> = () => {
  return (
    <>
      <Header home={false} />
      <Banner mainHeader={"Contact Us"} breadcrumb={"Contact"} />
    </>
  );
};

export default ContactUs;
