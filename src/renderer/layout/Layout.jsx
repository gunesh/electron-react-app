// components
import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Menu />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
