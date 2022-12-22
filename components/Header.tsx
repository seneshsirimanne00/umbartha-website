import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";
import {
  Navbar,
  NavbarHome,
  NavDiv,
  NavDivLogo,
  NavDivRight,
  NavDivRightAlign,
} from "./styled";
import Image from "next/image";

export interface IHeaderProps {
  home: boolean;
}

const Header: React.FC<IHeaderProps> = ({ home }) => {
  return (
    <>
      {home ? (
        <NavbarHome>
          <NavDivLogo>
            <Image src="/logo.png" width="200" height="50" alt={""} />
          </NavDivLogo>
          <NavDiv>
            <NavDivRightAlign>Contact us: 0778495758</NavDivRightAlign>
            <NavDivRight>
              <Link href="/">Home</Link>
              <Link href="/AboutUs">About</Link>
              <Link href="/Events">Events</Link>
              <Link href="/ClientReviews">Client Reviews</Link>
              <Link href="/ContactUs">ContactUs</Link>
              <Link href="/NewAppointments">New Appointments</Link>
            </NavDivRight>
          </NavDiv>
        </NavbarHome>
      ) : (
        <Navbar>
          <NavDivLogo>
            <Image src="/logo.png" width="200" height="50" alt={""} />
          </NavDivLogo>
          <NavDiv>
            <NavDivRightAlign>Contact us: 0778495758</NavDivRightAlign>
            <NavDivRight>
              <Link href="/">Home</Link>
              <Link href="/AboutUs">About</Link>
              <Link href="/Events">Events</Link>
              <Link href="/ClientReviews">ClientReviews</Link>
              <Link href="/ContactUs">ContactUs</Link>
              <Link href="/NewAppointments">NewAppointments</Link>
            </NavDivRight>
          </NavDiv>
        </Navbar>
      )}
    </>
  );
};

export default Header;
