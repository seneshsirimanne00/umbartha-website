import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import {
  MenuIcon,
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

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: { matches: any }) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

const Header: React.FC<IHeaderProps> = ({ home }) => {
  const isBreakpoint = useMediaQuery(999);

  return (
    <>
      {home ? (
        <NavbarHome>
          <NavDivLogo>
            <Image src="/logo.png" width="200" height="50" alt={""} />
          </NavDivLogo>
          <NavDiv $mobile={isBreakpoint ? false : true}>
            <NavDivRightAlign $mobile={false}>
              Contact us: 0778495758
            </NavDivRightAlign>
            {isBreakpoint ? (
              <NavDivRight $mobile={false}>
                <Link href="/">Home</Link>
                <Link href="/AboutUs">About</Link>
                <Link href="/Events">Events</Link>
                <Link href="/ClientReviews">Client Reviews</Link>
                <Link href="/ContactUs">ContactUs</Link>
                <Link href="/NewAppointments">New Appointments</Link>
              </NavDivRight>
            ) : (
              <NavDivRight $mobile={true}>
                <MenuIcon />
              </NavDivRight>
            )}
          </NavDiv>
        </NavbarHome>
      ) : (
        <Navbar>
          <NavDivLogo>
            <Image src="/logo.png" width="200" height="50" alt={""} />
          </NavDivLogo>
          <NavDiv $mobile={isBreakpoint ? false : true}>
            <NavDivRightAlign $mobile={false}>
              Contact us: 0778495758
            </NavDivRightAlign>
            <NavDivRight $mobile={false}>
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
