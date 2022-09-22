import React from "react";

const SectionTitle = ({ left, children }) => {
  return (
    <h2
      className={`text-2xl font-semibold font-mono ${!left && "text-center"}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;