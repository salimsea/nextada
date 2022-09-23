import React from "react";
import classNames from "classnames";

const Container = ({ children, className }) => {
  return (
    <div className={classNames("container mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
