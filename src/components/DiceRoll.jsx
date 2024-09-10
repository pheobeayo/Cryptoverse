import React, { useState } from "react";


const DiceRoll = ({ onRoll }) => {
  const [diceValue, setDiceValue] = useState(null);

  const handleRoll = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);
    onRoll(value);
  };

  return (
    <div className="text-black">
      <button
        onClick={handleRoll}
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
      >
        Roll
      </button>
    </div>
  );
};

export default DiceRoll;
