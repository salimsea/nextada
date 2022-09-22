import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="w-full navbar bg-transparent">
        <div className="flex-none lg:hidden">
          <label htmlFor="sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <img
            src={
              "https://user-images.githubusercontent.com/49223890/184792742-185ddb27-fdea-4c0a-b176-67638223f9a0.png"
            }
            width="50px"
          />
          <h1 className="font-bold ml-2">SALIMSEAL</h1>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
