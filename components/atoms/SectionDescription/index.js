import React from "react";

const SectionDescription = ({ left, children }) => {
  return (
    <>
      <p className={`text-lg mt-2 text-gray-500 ${!left && "text-center"}`}>
        {children}
      </p>
      <div className={`w-2/12 ${!left && "mx-auto"}`}>
        <div className="bg-gradient-to-r from-[#eb01a5] to-[#d13531] rounded-full w-100 h-1"></div>
      </div>
    </>
  );
};

export default SectionDescription;
