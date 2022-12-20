import React from "react";
import { EditedBtn } from "../components/styled";

export interface IAboutUsProps {}

export interface IBtnProps {
  btnId: number;
  btnName: string;
}

export const BUTTONS = [
  {
    btnId: 1,
    btnName: "btnOne",
  },
  {
    btnId: 2,
    btnName: "btnTwo",
  },
  {
    btnId: 3,
    btnName: "btnThree",
  },
];

const AboutUs: React.FC<IAboutUsProps> = () => {
  return (
    <>
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
