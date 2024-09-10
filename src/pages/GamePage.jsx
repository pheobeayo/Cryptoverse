import { useEffect, useState } from "react";
import game_img from "../assets/OIG3.0j0fUOjKjX3hAUm 1.svg";
import { BsPlay } from "react-icons/bs";
import GameBoard from "../components/GameBoard";

const GameCard = ({ image, onClick }) => {
  return (
    <div className="relative w-[80%] mx-auto h-[32] overflow-hidden rounded-lg shadow-md bg-gray-800">
      <img
        src={image}
        alt="Game"
        className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
      />

      <div className="absolute inset-0 bg-black opacity-50 transition duration-500 ease-in-out opacity-0 hover:opacity-100"></div>

      <button
        onClick={onClick}
        className="cursor-pointer absolute inset-0 flex items-center justify-center w-full h-full text-white transition duration-500 ease-in-out opacity-0 hover:opacity-100"
      >
        <BsPlay className="w-16 h-16" />
      </button>
    </div>
  );
};

const GamePage = () => {
  const [showGameBoard, setShowGameBoard] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-black to-indigo-900 text-white my-0">
      <div className="flex flex-col items-center justify-center h-full py-4">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Into The Cryptoverse
        </h1>
        <p className="text-lg mb-12 text-center">
          Experience a crypto game designed to educate people on Blockchain &
          Cryptocurrency in a Fun & Interactive way
        </p>

        <div className="my-4 w-full mx-auto h-full">
          {showGameBoard ? (
            <GameBoard />
          ) : (
            <GameCard
              image={game_img}
              onClick={() => {
                setShowGameBoard(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
