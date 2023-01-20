import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import {
  MenuIcon,
  MobileHeaderContainer,
  MobileHeaderDrawer,
  MobileHeaderLink,
  NavbarHome,
  NavbarLeft,
  NavbarRight,
  NavbarRightBottom,
  NavbarRightTop,
} from "./styled";

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

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileHeaderDrawer
        title=" "
        placement="right"
        onClose={onClose}
        open={open}
      >
        <MobileHeaderContainer>
          <MobileHeaderLink href="/">Home</MobileHeaderLink>
          <MobileHeaderLink href="/AboutUs">About</MobileHeaderLink>
          <MobileHeaderLink href="/Events">Events</MobileHeaderLink>
          <MobileHeaderLink href="/ClientReviews">
            Client Reviews
          </MobileHeaderLink>
          <MobileHeaderLink href="/ContactUs">ContactUs</MobileHeaderLink>
          <MobileHeaderLink href="/NewAppointments">
            New Appointments
          </MobileHeaderLink>
        </MobileHeaderContainer>
      </MobileHeaderDrawer>
      <NavbarHome $home={home}>
        <NavbarLeft>
          <Image src="/logo.png" width="200" height="50" alt={""} />
        </NavbarLeft>
        <NavbarRight>
          <NavbarRightTop>Contact us: 0778495758</NavbarRightTop>
          {isBreakpoint ? (
            <NavbarRightBottom $isBreakPoint={false}>
              <Link href="/">Home</Link>
              <Link href="/AboutUs">About</Link>
              <Link href="/Events">Events</Link>
              <Link href="/ClientReviews">Client Reviews</Link>
              <Link href="/ContactUs">ContactUs</Link>
              <Link href="/NewAppointments">New Appointments</Link>
            </NavbarRightBottom>
          ) : (
            <NavbarRightBottom $isBreakPoint={true}>
              <MenuIcon onClick={showDrawer} />
            </NavbarRightBottom>
          )}
        </NavbarRight>

        {/* <NavDivLogo>
          <Image src="/logo.png" width="200" height="50" alt={""} />
        </NavDivLogo>
        <NavDivLogo>

        </NavDivLogo> */}

        {/* <NavDiv $mobile={isBreakpoint ? false : true}>
          <NavDivRightAlign>Contact us: 0778495758</NavDivRightAlign>
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
              <MenuIcon onClick={showDrawer} />
            </NavDivRight>
          )}
        </NavDiv> */}
      </NavbarHome>
    </>
  );
};

export default Header;
