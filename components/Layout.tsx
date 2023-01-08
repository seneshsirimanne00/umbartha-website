import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../theme";
import Footer from "./Footer";
import Header from "./Header";

export interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
