import React from "react";
import Footer from "../atoms/Footer";
import Header from "../atoms/Header";
import Sidebar from "../atoms/Sidebar";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}
      <div>{props.children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
