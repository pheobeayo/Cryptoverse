import React from "react";
import { BsPlayFill } from "react-icons/bs";

const PlayNowButton = () => {
  return (
    <button className="relative inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-yellow-900 to-yellow-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none my-4">
      <div className="absolute inset-0 border-2 border-yellow-900 rounded-lg animate-pulse"></div>
      <BsPlayFill className="w-6 h-6 mr-2 animate-spin-slow" />
      Play Now
    </button>
  );
};

export default PlayNowButton;
