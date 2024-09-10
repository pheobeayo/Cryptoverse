import React from "react";

const Dice = ({ value }) => {
  return (
    <div className="flex items-center justify-center w-16 h-16 text-3xl font-bold text-white bg-gray-800 rounded-full">
      {value}
    </div>
  );
};

export default Dice;
