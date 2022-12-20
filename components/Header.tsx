import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";
import { MainHeader, Navbar } from "./styled";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    // <nav className={styles.header}>
    <Navbar>
      <Link href="/">home</Link>
      <Link href="/AboutUs">AboutUs</Link>
      <Link href="/Events">Events</Link>
      <Link href="/ContactUs">ContactUs</Link>
      <Link href="/ClientReviews">ClientReviews</Link>
      <Link href="/NewAppointments">NewAppointments</Link>
      <MainHeader>umbartha</MainHeader>
    </Navbar>

    // </nav>
  );
};

export default Header;
