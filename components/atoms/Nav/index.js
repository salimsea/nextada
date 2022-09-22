import React from "react";
import NavItem from "../NavItem";

const Nav = () => {
  return (
    <ul className="flex justify-center space-x-10 py-20">
      <NavItem>Profile</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
};

export default Nav;
