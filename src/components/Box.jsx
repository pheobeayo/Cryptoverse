import React from "react";

function Box({ box }) {
  return (
    <div className="p-4 border border-gray-300">
      <h3 className="font-bold">{box.name}</h3>
      <p>Type: {box.type}</p>
    </div>
  );
}

export default Box;
