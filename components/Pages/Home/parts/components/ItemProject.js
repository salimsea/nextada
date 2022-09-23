import React from "react";

const ItemProject = ({ name, image, description }) => {
  return (
    <article className="text-center">
      <div className=" overflow-hidden group relative transition-all duration-500">
        <img
          src={image}
          className="w-full rounded-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </article>
  );
};

export default ItemProject;
