import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import {
  HeaderNextLink,
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
  linkNumber: number;
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

const Header: React.FC<IHeaderProps> = ({ home, linkNumber }) => {
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
          <MobileHeaderLink
            href="/"
            $selected={linkNumber === 1 ? true : false}
          >
            Home
          </MobileHeaderLink>
          <MobileHeaderLink
            href="/AboutUs"
            $selected={linkNumber === 2 ? true : false}
          >
            About
          </MobileHeaderLink>
          <MobileHeaderLink
            href="/Events"
            $selected={linkNumber === 3 ? true : false}
          >
            Events
          </MobileHeaderLink>
          <MobileHeaderLink
            href="/ClientReviews"
            $selected={linkNumber === 4 ? true : false}
          >
            Client Reviews
          </MobileHeaderLink>
          <MobileHeaderLink
            href="/ContactUs"
            $selected={linkNumber === 5 ? true : false}
          >
            ContactUs
          </MobileHeaderLink>
          <MobileHeaderLink
            href="/NewAppointments"
            $selected={linkNumber === 6 ? true : false}
          >
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
              <HeaderNextLink
                href="/"
                $home={home}
                $bottomLine={linkNumber === 1 ? true : false}
              >
                Home
              </HeaderNextLink>
              <HeaderNextLink
                $home={home}
                $bottomLine={linkNumber === 2 ? true : false}
                href="/AboutUs"
              >
                About
              </HeaderNextLink>
              <HeaderNextLink
                $home={home}
                $bottomLine={linkNumber === 3 ? true : false}
                href="/Events"
              >
                Events
              </HeaderNextLink>
              <HeaderNextLink
                $home={home}
                $bottomLine={linkNumber === 4 ? true : false}
                href="/ClientReviews"
              >
                Client Reviews
              </HeaderNextLink>
              <HeaderNextLink
                $home={home}
                $bottomLine={linkNumber === 5 ? true : false}
                href="/ContactUs"
              >
                ContactUs
              </HeaderNextLink>
              <HeaderNextLink
                $home={home}
                $bottomLine={linkNumber === 6 ? true : false}
                href="/NewAppointments"
              >
                New Appointments
              </HeaderNextLink>
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
