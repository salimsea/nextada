import classNames from "classnames";
import React from "react";
import NavItem from "../NavItem";

const Nav = ({ dir, scheme }) => {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <ul className={classNames("flex", pickedDir)}>
      <NavItem scheme={scheme}>Profile</NavItem>
      <NavItem scheme={scheme}>Skills</NavItem>
      <NavItem scheme={scheme}>Projects</NavItem>
      <NavItem scheme={scheme}>Contact</NavItem>
    </ul>
  );
};

export default Nav;
