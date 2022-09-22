import React from "react";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
