import React from "react";

const NavItem = ({ children }) => {
  return (
    <li>
      <a className="text-white text-lg text-opacity-60 font-semibold">
        {children}
      </a>
    </li>
  );
};

export default NavItem;
