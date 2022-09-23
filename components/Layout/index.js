import { Drawer } from "components/atoms";
import React from "react";
import Footer from "../atoms/Footer";
import Header from "../atoms/Header";
import Sidebar from "../atoms/Sidebar";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}
      <Drawer>{props.children}</Drawer>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
