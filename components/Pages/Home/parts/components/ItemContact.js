import React from "react";

const ItemContact = ({ label, value, icon, className }) => {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`flex items-center ${addClassName}`}>
      <img src={icon} className="w-10" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default ItemContact;
