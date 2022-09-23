import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import Nav from "../Nav";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12 hidden md:block">
        <Nav />
      </div>
      <div className="w-3/12 text-right hidden md:block">
        <Button variant="outline-yellow">Contact</Button>
      </div>
      <div className="w-9/12 block md:hidden text-right py-12">hai</div>
    </div>
  );
};

export default Navbar;
