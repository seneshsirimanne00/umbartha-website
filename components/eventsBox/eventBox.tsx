import { Button, Col, Row } from "antd";
import React from "react";
import { ParaJosefin } from "../../pages/CommonStyles";
import { ServiceBoxHeader } from "../../pages/PageStyles/homeStyles";
import { EventsBoxContainerPara, EventsContainer, EventsIcons, EventsIconsText, EventsImg, } from "./eventBoxStyled";

export interface IEventBoxProps {
   
}

const EventBox: React.FC<IEventBoxProps> = () => {
  return (
    <>
    <EventsContainer>
      <Row>
      <ServiceBoxHeader>Wows with gorgeous Lorem epsium dummy imagery.</ServiceBoxHeader>
      </Row>
     
      <Row>
      <Col flex={1}>
      <EventsIcons>
      <img src="/events_date.png" alt="" />
      </EventsIcons>

      <EventsIconsText>
      <p>2022.12.22</p>
      </EventsIconsText>
      </Col>

      <Col flex={1}>
      <EventsIcons>
      <img src="/events_location.png" alt="" />
      </EventsIcons>

      <EventsIconsText>
      <p>Colombo 07</p>
      </EventsIconsText>
      </Col>

      <Col flex={2}>
      <EventsIcons>
      <img src="/events_contact.png" alt="" />
      </EventsIcons>

      <EventsIconsText>
      <p>Mr Joe doe</p>
      </EventsIconsText>
      </Col>

      <Col flex={7}>
      </Col>
      </Row>

      <Row>

      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
       <EventsImg src="/events_img1.png" alt="" />
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <EventsBoxContainerPara>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
      </EventsBoxContainerPara>

      <br/>
      <Button type="link" href="#"><b>Read More...</b></Button>
      
      </Col>
      </Row>
<br/>
      <Row>
      <EventsImg src="/events_line.png" alt="" />
      </Row>
     
    </EventsContainer>
    
    </>
  );
};

export default EventBox;
