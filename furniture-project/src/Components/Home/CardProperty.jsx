import React from "react";
import PropertyFilter from "./PropertyFilter";

const CardProperty = () => {
  return (
<>
<div className="relative w-full h-72 bg-gray-900">
      <img
        src="images\single-property.jpg"
        alt="Property background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <p className="text-sm uppercase mb-2">Home / Properties</p>
        <h1 className="text-4xl font-bold">Properties</h1>
      </div>
      <div>
      </div>
    </div>
<PropertyFilter />
</>
  );
};

export default CardProperty;