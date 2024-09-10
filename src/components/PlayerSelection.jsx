import React, { useState } from "react";
import { PlayerModel } from "./Objects";

const PlayerSelection = ({ onSelect }) => {
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState([
    { name: "Player 1", isComputer: false },
    { name: "Player 2", isComputer: true },
  ]);

  const handlePlayerCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setPlayerCount(count);
    const newPlayers = [];
    for (let i = 0; i < count; i++) {
      newPlayers.push({ name: `Player ${i + 1}`, isComputer: i !== 0 });
    }
    setPlayers(newPlayers);
  };

  const handlePlayerChange = (index, key, value) => {
    const newPlayers = [...players];
    newPlayers[index][key] = value;
    setPlayers(newPlayers);
  };

  const handleSubmit = () => {
    const playerModels = players.map(
      (p) => new PlayerModel(p.name, p.isComputer)
    );
    onSelect(playerModels);
  };

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-[50%] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Select Players</h2>
        <div className="mb-4">
          <label
            htmlFor="playerCount"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Players
          </label>
          <input
            id="playerCount"
            type="number"
            min="2"
            max="8"
            value={playerCount}
            onChange={handlePlayerCountChange}
            className="mt-1 p-2 border-2 rounded-md w-full"
          />
        </div>
        {players.map((player, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`playerName${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Player {index + 1} Name
            </label>
            <input
              id={`playerName${index}`}
              type="text"
              value={player.name}
              onChange={(e) =>
                handlePlayerChange(index, "name", e.target.value)
              }
              className="mt-1 p-2 border-2 rounded-md w-full"
            />
            <label className="block text-sm font-medium text-gray-700 mt-2">
              <input
                type="checkbox"
                checked={player.isComputer}
                onChange={(e) =>
                  handlePlayerChange(index, "isComputer", e.target.checked)
                }
                className="mr-2"
              />
              Is Computer
            </label>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayerSelection;
