import React from "react";

const Button = ({ className, variant, children, pill }) => {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-yellow": `border border-yellow-500 text-lg text-yellow-500`,
    yellow: "bg-yellow-500 text-black-500",
    block: "bg-black text-white",
  };

  const pickedVariant = variants[variant];
  return (
    <a
      className={`font-semibold py-3 px-10 inline-block ${
        !pill && "rounded-full"
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
