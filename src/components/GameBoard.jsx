import React, { useState } from "react";
import DiceRoll from "./DiceRoll";
import PlayerSelection from "./PlayerSelection";
import {  Game } from "./Objects";
import boxes from "./Boxes";

function GameBoard() {
  const [game, setGame] = useState(null);
  const [showDiceRoll, setShowDiceRoll] = useState(false);
  const [showPlayerSelection, setShowPlayerSelection] = useState(true);
  const [diceValue, setDiceValue] = useState(null);
  const [winner, setWinner] = useState(null);

  const handlePlayerSelection = (players) => {
    const newGame = new Game(players, boxes);
    setGame(newGame);
    setShowPlayerSelection(false);
    setShowDiceRoll(true);
  };

  const handleDiceRoll = (value) => {
    setDiceValue(value);
    if (game) {
      game.rollDice();
      game.movePlayer();
      if (game.checkGameState()) {
        setWinner(game.players[game.currentPlayerIndex].name);
        setShowDiceRoll(false);
      } else {
        setShowDiceRoll(false);
        setTimeout(() => setShowDiceRoll(true), 1000);
      }
    }
  };

  const getBoxColor = (box) => {
    switch (box.type) {
      case "question":
        return "bg-yellow-500";
      case "trap":
        return "bg-blue-500 opacity-2";
      case "chance":
        return "bg";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white flex flex-col items-center">
      {showPlayerSelection && (
        <PlayerSelection onSelect={handlePlayerSelection} />
      )}
      {winner && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">{winner} is the winner!</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      <div className="w-[70%] border-2 border-white mt-10">
        <div className="grid grid-cols-6">
          {game &&
            game.boxes.map((box, index) => (
              <div
                key={index}
                className={`border-white border-2 h-24 w-full flex items-center justify-center ${getBoxColor(
                  box
                )} ${
                  game.players.some((player) => player.currentPos === index)
                    ? "border-4 border-yellow-500"
                    : ""
                }`}
              >
                {box.name}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        {game && (
          <>
            <p>Current Player: {game.players[game.currentPlayerIndex].name}</p>
            <p>Dice Roll: {diceValue}</p>

            {showDiceRoll && <DiceRoll onRoll={handleDiceRoll} />}
          </>
        )}
      </div>
    </div>
  );
}

export default GameBoard;
