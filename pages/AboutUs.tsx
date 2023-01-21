import { Col, Collapse, Row } from "antd";
import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ServicesBox from "../components/servicesBox/servicesBox";
import { ParaJosefin } from "./CommonStyles";
import {
  AboutusCollapse,
  AboutusContainer,
  AboutusCoreContainer,
  AboutusCoreText,
  AboutusParaContainer,
  StatementContainer,
  VisionBoxHeader,
} from "./PageStyles/aboutUsStyles";
import { ServiceBoxHeader } from "./PageStyles/homeStyles";

export interface IAboutUsProps {}

const { Panel } = Collapse;

export interface IBtnProps {
  btnId: number;
  btnName: string;
}

export const SERVICES = [
  {
    key: 1,
    left: true,
    imagePath: "/servicesimg1.jpg",
    iconImgePath: "/service1.png",
    heading: "Individual Session",
    para: " Here we intentionally create a safe and secure place for clients to process and talk about the struggles they face at home or at work due to fluctuating extreme negative emotions like anger , depression , grief etc We also help them create healthy boundaries in relationships, or work with overcoming addictions or substance abuse. We also help them heal from trauma experienced due to different forms of abuse.This is done one on one as we form an alliance, relationship or bond that enables growth in trust",
  },
  {
    key: 2,
    left: false,
    imagePath: "/servicesimg2.jpg",
    iconImgePath: "/service1.png",
    heading: "Couples Session",
    para: "This is where we create a platform for the couple to understand and be understood by each other. Here we unveile the myths and assumptions one walks with into a relationship. We work from the root up in order that the couple can learn to agree to disagree if need be, as well as bring within them a change that is needed in order for them to grow together in partnership. To equip each in order that they may nurture each other and grow together healthily.",
  },
  {
    key: 3,
    left: true,
    imagePath: "/servicesimg3.jpg",
    iconImgePath: "/service1.png",
    heading: "Family Session",
    para: " During these sessions we help clients to create for themselves core values for their families and help them lay structures to build on. We also address issues that currently affect the family either due to ill health or some form of loss. We journey together making space for each individual to be accepted and nurtured as per their individual strengths and weaknesses.t",
  },

  {
    key: 4,
    left: false,
    imagePath: "/servicesimg4.jpg",
    iconImgePath: "/service1.png",
    heading: "Single Session Therapy",
    para: " Single session therapy (SSP) is the concept of approaching a counselling session as if it would be the last. It usually consists of sessions ranging from 60 minutes to 90 minutes and focuses on speaking about the strengths and skills of the client in order to help identify the issues and problems they face and to develop solutions and methods to solve them. SST uses principles similar to cognitive-behavioral and solution-focused therapies, both of which are intended to help you fix your problem yourself and teaches the client that rather than looking at what negative thoughts and behaviors might be causing their issue they could look at what positive ones could solve it. Single session therapy helps give the client the power to fix his or her own problems and therefore gives the client a set of goals to work forward to in order to better themselves.",
  },
  {
    key: 5,
    left: true,
    imagePath: "/servicesimg1.jpg",
    iconImgePath: "/service1.png",
    heading: "Group Counselling Sessions",
    para: " A group therapy setting can be the place where wounds are healed. A well conducted group has a higher energy than an individual and has the power to really pull people up as painful and difficult emptions are shared and experienced by several.",
  },
  {
    key: 6,
    left: false,
    imagePath: "/servicesimg1.jpg",
    iconImgePath: "/service1.png",
    heading: "Mindfulness",
    para: " Mindfulness is not the same as meditation. Though they have similarities - there are distinct differences between the two practices. Meditation is primarily based upon a focus on an object or even something like a teaching of the Scriptures whereas mindfulness is primarily about focusing on the present moment - the here and now. Although mindfulness has its roots in a Buddhist spiritual discipline, today it is universally accepted as one that can be of help the believers of any faith as its focus is not based on any religious teaching or doctrine but rather to creating unawareness of the present moment - the now. It is in other words creating an intentional awareness of a person’s contextual realities and of “being” in the moment.",
  },
  {
    key: 7,
    left: true,
    imagePath: "/servicesimg1.jpg",
    iconImgePath: "/service1.png",
    heading: "Yoga",
    para: "Yoga is an ancient practise that combines certain physical poses and stretches with breathing exercises and meditation. While it has its origins in Eastern religions such Hinduism and Buddhism today Yoga can be practised by anyone using the spiritual disciplines of their own faith - including Christianity. While some Christians have rejected Yoga others have embraced it for the physical and mental benefits it offers as well as because it has helped to deepen their faith as a spiritual discipline.",
  },
];

const AboutUs: React.FC<IAboutUsProps> = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <Header home={false} linkNumber={2} />
      <Banner
        mainHeader={"About US"}
        breadcrumb={"About"}
        imagePath={"/bannerimg1.png"}
      />
      <br />
      <AboutusContainer>
        <Row>
          <Col xs={24} sm={24} md={24} lg={2} xl={2}></Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={9}>
            <StatementContainer>
              <img src="/visionStar.png" alt="" />
              <div>
                <VisionBoxHeader>VISION</VisionBoxHeader>
                <ParaJosefin>
                  Our vision is to support with a listening ear and an
                  empathetic heart in an integrated and relational counseling
                  practise.
                </ParaJosefin>
              </div>
            </StatementContainer>
          </Col>
          <Col xs={24} sm={24} md={24} lg={2} xl={2}></Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={9}>
            <StatementContainer>
              <img src="/misionStar.png" alt="" />
              <div>
                <VisionBoxHeader>MISSION</VisionBoxHeader>
                <ParaJosefin>
                  Our mission is to serve the community by bringing healing and
                  hope to individuals, families, couples, and others seeking
                  emotional and relational wellbeing as well as wholesome
                  interpersonal relationships through professional counselling
                  care.
                </ParaJosefin>
              </div>
            </StatementContainer>
          </Col>
          <Col xs={24} sm={24} md={24} lg={2} xl={2}></Col>
        </Row>
        <br />
        <AboutusParaContainer>
          <ServiceBoxHeader>MISSION</ServiceBoxHeader>
          <br />
          <ParaJosefin>
            Umbartha, a Marathi word meaning ‘threshold’ was originally chosen
            as the name for a business venture that Manisha Billimoria started
            in 2014 in a small way with exhibitions and sales of authentic
            Indian clothing such as sarees sourced directly from the looms of
            rural Bengal and Gujarat as well as Indian jewelry handicrafted by
            local Indian artisans as well as cottage industries in Sri Lanka.
            This was the crossing of a threshold for Manisha who had arrived as
            a young bride in Sri Lanka in 1996 having had her own fashion
            designing career in Pune.{" "}
          </ParaJosefin>
          <br />

          <ParaJosefin>
            In 2013 Manisha embarked on a study of psychology and counseling and
            passed out in 2015 with a certified qualification enabling her to
            begin counseling on a professional basis. Gradually she crossed yet
            another threshold when she closed down her store and began full time
            counseling in the same premises having also qualified as a
            practitioner of Art Therapy , REBT (Rational Emotive Behavior
            Therapy),EMDR(Eye Movement Desensitisation and Reprocessing)and SST
            ( Single Session Therapy) methods of counseling. She now shares the
            premises with colleagues in the same field and Umbartha has taken on
            a whole new meaning as individual men and women or couples come
            there to seek counsel, direction, life coaching or just a listening
            ear and cross their own thresholds into a new way of looking at
            things.{" "}
          </ParaJosefin>
        </AboutusParaContainer>
        <br />
        <AboutusCoreText>
          <ServiceBoxHeader>CORE VALUES</ServiceBoxHeader>
        </AboutusCoreText>
        <AboutusCoreContainer>
          <AboutusCollapse defaultActiveKey={["1"]} onChange={onChange}>
            <Panel header="Christian" key="1">
              <ParaJosefin>
                We aim to offer guidance by integrating when appropriate
                Scriptural values and Christian spirituality with insights from
                psychology, and where possible to invite those we serve to
                strengthen their relationship with God.
              </ParaJosefin>
            </Panel>
            <Panel header="Confidential" key="2">
              <ParaJosefin>
                We aim to provide a safe space by valuing privacy and
                confidentiality and establishing a culture of trust.
              </ParaJosefin>
            </Panel>
            <Panel header="Relational" key="3">
              <ParaJosefin>
                We seek to enter deeply into the lives of those struggling with
                past trauma, emotional pain, conflicts and life crisis, leading
                them with love to build confidence, self esteem and to inculcate
                self worth and self love.
              </ParaJosefin>
            </Panel>
            <Panel header="Professional" key="4">
              <ParaJosefin>
                We seek to offer qualitative care by partnering with other
                professionals who are committed to both therapeutic excellence
                and the personal growth of those being served.
              </ParaJosefin>
            </Panel>
            <Panel header="Innovative" key="5">
              <ParaJosefin>
                We look for opportunities to develop resources to meet the
                emerging needs of those we serve to help restore hope, encourage
                personal growth and heal emotional wounds.
              </ParaJosefin>
            </Panel>
          </AboutusCollapse>
        </AboutusCoreContainer>
        <br /> <br />
        <br />
        <div>
          <AboutusCoreText>
            <ServiceBoxHeader>SERVICES</ServiceBoxHeader>
          </AboutusCoreText>
          <br />
          <br />
          {SERVICES.map((service) => (
            <ServicesBox
              key={service.key}
              imagePath={service.imagePath}
              iconImgePath={service.iconImgePath}
              heading={service.heading}
              para={service.para}
              left={service.left}
            />
          ))}
        </div>
      </AboutusContainer>
    </>
  );
};

export default AboutUs;
