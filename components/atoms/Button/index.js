import React from "react";

const Button = ({ className, variant, children }) => {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-yellow": `border border-yellow-500 text-lg text-yellow-500`,
    yellow: "bg-yellow-500 text-black-500",
  };

  const pickedVariant = variants[variant];
  return (
    <a
      className={`font-semibold py-3 px-10 inline-block rounded-full ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
