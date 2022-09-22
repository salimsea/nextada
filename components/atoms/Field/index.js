import React from "react";

const Field = ({ label, name, type, className }) => {
  const addClassName = className ? `${className}` : "";
  const formControlClassName = `bg-transparent border border-customgray-300 rounded-sm py-3 px-4 w-full ${addClassName}`;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          name={name}
          id={name}
          className={formControlClassName}
        />
      ) : (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
};

export default Field;
