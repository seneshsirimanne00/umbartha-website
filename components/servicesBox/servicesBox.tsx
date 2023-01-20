import { Col } from "antd";
import React from "react";

import { ServiceBoxHeader } from "../../pages/PageStyles/homeStyles";
import { ServicesBoxContainer, ServicesBoxContainerPara, ServicesBoxImg, ServicesBoxImgIcon, ServicesRow } from "./servicesBoxStyled";

export interface IServicesBoxProps {
    left:boolean,
    imagePath:string,
    iconImgePath:string,
    heading:string,
    para:string,
}

const ServicesBox: React.FC<IServicesBoxProps> = ({
    left,
    imagePath,
    iconImgePath,
    heading,
    para
}) => {
  return (
    <>
    <ServicesBoxContainer>
    <ServicesRow $left={left}>
    <Col xs={24} sm={24} md={24} lg={11} xl={11}>
    
    <ServicesBoxImg src={imagePath} alt="" />
    </Col>
    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
    <ServicesBoxImgIcon src={iconImgePath} alt="" />
    </Col>
    <Col xs={24} sm={24} md={24} lg={11} xl={11}>
    <ServiceBoxHeader>
    {heading}
    </ServiceBoxHeader>
    <ServicesBoxContainerPara>
    {para}
    </ServicesBoxContainerPara>
    </Col>
    </ServicesRow>
    </ServicesBoxContainer>
    </>
  );
};



export default ServicesBox;
