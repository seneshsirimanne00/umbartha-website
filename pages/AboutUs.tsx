import React from "react";

import Header from "../components/Header";
import { EditedBtn } from "../components/styled";
import { BUTTONS } from "../constants";

export interface IAboutUsProps {}

export interface IBtnProps {
  btnId: number;
  btnName: string;
}

const AboutUs: React.FC<IAboutUsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>AboutUs</h1>

      <EditedBtn>antd btn edited with styledcomponents</EditedBtn>

      <br />
      {BUTTONS.map((btn) => (
        <EditedBtn key={btn.btnId}>{btn.btnName}</EditedBtn>
      ))}
    </>
  );
};

export default AboutUs;
