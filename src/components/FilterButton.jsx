import React from "react";

const FilterButton = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? " bg-orange-700 text-white" : " bg-white text-gray-600"
      } rounded-2xl px-3 ml-3 border border-gray-300  hover:bg-orange-700 hover:text-white cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
