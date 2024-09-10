import React from "react";

const Button = ({ placeholder, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-white bg-blue-700 px-4 py-2 text-center rounded-[15px] cursor-pointer hover:bg-[#B25FFF]`}
    >
      {icon} <span className="ml-2">{placeholder}</span>
    </button>
  );
};

export { Button };
