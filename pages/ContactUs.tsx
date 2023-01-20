import React, { useCallback, useRef, useState } from "react";
import { Button, Col, Form, Row } from "antd";
import Head from "next/head";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MainHeader } from "./CommonStyles";
import {
  ContainerBottomRight,
  ContainerBottomLeft,
  BannerContactPage,
  QuoteContainer,
  MapIframe,
} from "./PageStyles/contactUsStyles";
import { FormInput } from "../components/styled";

export interface IContactUsProps {}

const ContactUs: React.FC<IContactUsProps> = () => {
  const onFinish = (values: any) => {
    fetch("https://api.apispreadsheets.com/data/ehcfCdpKCyax4mW9/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          name: `${values.name}`,
          email: `${values.email}`,
          message: `${values.message}`,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log("sucess", values.name);
      } else {
        console.log("error");
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Head>
        <title>Umbartha | Contact us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header home={false} />
      <Banner
        mainHeader={"Contact Us"}
        breadcrumb={"Contact"}
        imagePath={"/bannerimg1.png"}
      />
      <Footer contactPage={true} />
      <br />
      <hr />
      <br />
      <Row>
        <Col xs={24} sm={24} md={24} lg={3} xl={3}></Col>
        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
          <ContainerBottomRight>
            <MainHeader>Get in touch</MainHeader>
            <Form
              name="umbartha"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              scrollToFirstError
              autoComplete="off"
              size={"large"}
            >
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <FormInput placeholder="Your Name(required)" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <FormInput placeholder="Your Email(required)" />
              </Form.Item>

              <Form.Item name="message">
                <FormInput.TextArea placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </ContainerBottomRight>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <ContainerBottomLeft>
            <MapIframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Umbartha, RVP8+9C9, Dehiwala-Mount Lavinia&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></MapIframe>
          </ContainerBottomLeft>
        </Col>

        <Col xs={24} sm={24} md={24} lg={2} xl={2}></Col>
      </Row>

      <BannerContactPage $imagePath={"/footerimg1.png"}>
        <QuoteContainer>
          <p>
            “Counseling for me is essentially being able to speak your mind- the
            good, bad and the ugly without holding anything in. You then start
            to hear things out loud that you wouldn’t otherwise know is in your
            head. With the right counselor you are able to process these
            emotions positively without having the fear of being judged and that
            is what I was able to do with Manisha. I felt heard and understood
            every time I had a session and that in my opinion, is one of the
            most important elements in counseling.” – Melanie Kanakaratne
          </p>
        </QuoteContainer>
      </BannerContactPage>
    </>
  );
};

export default ContactUs;
