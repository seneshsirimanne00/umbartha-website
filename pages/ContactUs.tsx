import React from "react";
import { Form } from "antd";
import Head from "next/head";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MainHeader } from "./CommonStyles";
import {
  ContainerBottom,
  ContainerBottomRight,
  ContainerBottomLeft,
  BannerContactPage,
  QuoteContainer,
} from "./PageStyles/contactUsStyles";
import { FormInput } from "../components/styled";

export interface IContactUsProps {}

const ContactUs: React.FC<IContactUsProps> = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // google maps code

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

      <ContainerBottom>
        <ContainerBottomRight>
          <MainHeader>Get in touch</MainHeader>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size={"large"}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <FormInput placeholder="Your Name(required)" />
            </Form.Item>

            <Form.Item name="email" rules={[{ type: "email" }]}>
              <FormInput placeholder="Your Email(required)" />
            </Form.Item>

            <Form.Item name="introduction">
              <FormInput.TextArea placeholder="Your Message" />
            </Form.Item>
          </Form>
        </ContainerBottomRight>
        <ContainerBottomLeft></ContainerBottomLeft>
      </ContainerBottom>

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
