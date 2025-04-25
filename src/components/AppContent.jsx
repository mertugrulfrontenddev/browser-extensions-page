import React, { useState } from "react";

const AppContent = ({
  id,
  name,
  description,
  isActive,
  url,
  onToggle,
  filter,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-5">
      <div className="flex items-center space-x-5">
        <img
          src={url}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mt-2 text-left h-20">
            {description}
          </p>
        </div>
      </div>

      {filter === "all" ? (
        <div
          onClick={() => {
            onToggle(id); // Toggle işlemi başlat
          }}
          className={`flex items-center mt-2 mb-2 w-8 ml-auto h-4 ${
            isActive ? "rounded bg-orange-700" : "rounded bg-gray-400 "
          } hover:cursor-pointer`}
          // onTransitionEnd olayını buraya ekliyoruz
        >
          <div
            className={`rounded-full w-3 h-3 m-1 transition duration-300 ease-in-out transform ${
              isActive ? "bg-white translate-x-3" : "bg-gray-900 translate-x-0"
            }`}
          ></div>
        </div>
      ) : (
        <div
          className={`flex items-center rounded  w-22 h-8 text-white  p-2  hover:cursor-pointer ${
            isActive
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
          onClick={() => {
            onToggle(id); // Toggle işlemi başlat
          }}
        >
          {isActive ? "Deactivate" : "Activate"}
        </div>
      )}
    </div>
  );
};

export default AppContent;
