import React from "react";

import Footer from "./Footer";

export interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer contactPage={false} />
    </>
  );
};

export default Layout;
