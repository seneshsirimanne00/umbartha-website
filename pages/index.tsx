import Head from "next/head";
import { Inter } from "@next/font/google";
import { Col, Row } from "antd";
import {
  Banner,
  BookingBanner,
  ClientsContainer,
  ClientsRBox,
  ClientsRBoxesContainer,
  ClientsSection,
  IntroBox,
  IntroBoxHeader,
  IntroBoxSubHeader,
  IntroSection,
  PosterBox,
  PosterBoxHeader,
  PosterBoxPara,
  PosterSection,
  PosterSectionLeft,
  PosterSectionRight,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxSubHeader,
  ServicesBox,
  ServicesSection,
  ServicesTitleSection,
  ServiceTitleButton,
  ServiceTitleSecHeader,
} from "./PageStyles/homeStyles";
import Header from "../components/Header";
import Image from "next/image";
import {
  MainHeader,
  ParaJosefin,
  PrimaryButton,
  SecondaryButton,
  SecondaryHeader,
} from "./CommonStyles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Umbartha</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header home={true} />
      <Banner></Banner>

      <IntroSection>
        <IntroBox>
          <IntroBoxHeader>
            A Dedicated Team committed to supporting with a listening ear
          </IntroBoxHeader>
          <IntroBoxSubHeader>
            "Our vision, mission, and core values guide us as we seek to fulfill
            our calling to support and care for people who need to be heard and
            understood."
          </IntroBoxSubHeader>
        </IntroBox>
      </IntroSection>

      <ServicesSection>
        <ServicesBox>
          <ServicesTitleSection>
            <ServiceTitleSecHeader>OUR SERVICES</ServiceTitleSecHeader>
            <ServiceTitleButton>VIEW ALL →</ServiceTitleButton>
          </ServicesTitleSection>
          <div>
            <Row>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service1.png"
                    alt="sea shell image"
                    width={100}
                    height={100}
                  />
                  <ServiceBoxHeader>Individual session</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    Here we create a safe and secure space for clients to openly
                    talk about struggles they face.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service2.png"
                    alt="sea shell image"
                    width={100}
                    height={100}
                  />
                  <ServiceBoxHeader>Couples session</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    This is where we create a platform for couples in need of
                    support to understand each other.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service3.png"
                    alt="sea shell image"
                    width={100}
                    height={100}
                  />
                  <ServiceBoxHeader>Family sessions</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    During these sessions we help clients to create for
                    themselves core values for their families and help them lay
                    structures to build on.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
            </Row>

            <Row>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service4.png"
                    alt="sea shell image"
                    width={80}
                    height={80}
                  />
                  <ServiceBoxHeader>Single Session Therapy</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    Single session therapy (SST) is the concept of approaching a
                    counselling session as if it would be the last.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service5.png"
                    alt="sea shell image"
                    width={60}
                    height={100}
                  />
                  <ServiceBoxHeader>Yoga</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    Yoga is an ancient practise that combines certain physical
                    poses and stretches with breathing exercises and meditation.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8}>
                <ServiceBox>
                  <Image
                    src="/service6.png"
                    alt="sea shell image"
                    width={80}
                    height={120}
                  />
                  <ServiceBoxHeader>Mindfulness</ServiceBoxHeader>
                  <ServiceBoxSubHeader>
                    Mindfulness is primarily about focusing on the present
                    moment - the here and now.
                  </ServiceBoxSubHeader>
                </ServiceBox>
              </Col>
            </Row>
          </div>
        </ServicesBox>

        <PosterBox>
          <PosterBoxHeader>
            MOMS - Making our motherhood significant
          </PosterBoxHeader>
          <PosterSection>
            <PosterSectionLeft>
              <Image src="/poster.jpg" alt="poster" height={700} width={550} />
            </PosterSectionLeft>
            <PosterSectionRight>
              <PosterBoxPara>
                Among the many changes taking place in the social fabric of Sri
                Lanka, the growing segment within the female population that
                needs special care and help is apparent and cannot be ignored.
                This segment comprises mothers who are raising their children
                alone and taking up both the roles of both mother and father –
                ‘Single Mums’. Single mums are courageous women who step up by
                themselves to do the job of two, and face life’s challenges
                boldly for the sake of their children. They take on multiple
                roles of being provider, caretaker, nurturer, teacher, protector
                and above all the ever-present help to their children. While it
                is easy to pen these multiple roles down all-in-one sentence,
                fulling these roles in real life requires determination,
                commitment and selflessness which are evidently attributes of
                single mums. However, the daunting task of fulfilling multiple
                responsibilities and making ends meet in today’s challenging
                environment can sometimes be exhausting and overwhelming. That
                is why we at Umbartha (Beyond Thresholds) would like to join
                hands with these super women and provide them and their children
                with the moral and emotional support that they need to “keep on
                keeping on”. ‘Making Our Motherhood Significant’ or ‘MOMS’ is an
                initiative designed to empower, enhance and enrich the lives of
                single mums and their children and help them to work through a
                wide range of issues and challenges that they face. A series of
                6 workshops will be conducted fortnightly by professionally
                trained facilitators. While the mums attend the workshop on the
                topic of the day, their kids too will attend a session
                especially tailored for them on the same topic. What is unique
                about this program is this two-pronged approach which equips the
                mums and their children to face their challenges and overcome
                them together. Times of fellowship and fun activities are woven
                into the program to ensure a good balance of work and play for
                both the mums and the children! Umbartha invites single mums to
                register for the MOMS program and start this journey of
                togetherness with us. See you at the threshold…
              </PosterBoxPara>
            </PosterSectionRight>
          </PosterSection>
        </PosterBox>
      </ServicesSection>

      <BookingBanner>
        <SecondaryHeader>WE’RE HERE TO HELP YOU</SecondaryHeader>
        <MainHeader>GET IN TOUCH NOW</MainHeader>
        <PrimaryButton>MAKE A BOOKING</PrimaryButton>
      </BookingBanner>

      <ClientsSection>
        <ClientsContainer>
          <SecondaryHeader>CLIENT REVIEWS</SecondaryHeader>
          <MainHeader>WHAT CLIENTS SAY?</MainHeader>
          <ClientsRBoxesContainer>
            <ClientsRBox>
              <ParaJosefin>
                A middle-aged woman, married, with kids, I realized that I had
                difficulty trusting people due to various unpleasant experiences
                in my life. I was especially unable to get over hurt caused ...
              </ParaJosefin>
            </ClientsRBox>
            <ClientsRBox>
              <ParaJosefin>
                Married for 24 years with two 2 children we began drifting apart
                some years ago and the love and understanding we had when we
                married began to vanish! We just ended up finding fault ...
              </ParaJosefin>
            </ClientsRBox>
            <ClientsRBox>
              <ParaJosefin>
                Counseling for me is essentially being able to speak your mind-
                the good, bad and the ugly without holding anything in. You then
                start to hear things out loud that you wouldn’t otherwise know
                is in ....
              </ParaJosefin>
            </ClientsRBox>
          </ClientsRBoxesContainer>
          <SecondaryButton>READ MORE</SecondaryButton>
        </ClientsContainer>
      </ClientsSection>
    </>
  );
}
