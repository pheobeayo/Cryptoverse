import React from "react";
import hero_img from "../assets/hero-char.svg";
import game_img from "../assets/OIG3.0j0fUOjKjX3hAUm 1.svg";
import PlayNowButton from "../components/PlayNowBtn";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white my-0">
      <section className="sm:mx-0 mx-4 sm:flex sm:flex-row flex flex-col md:px-4 gap-12 justify-center items-center mt-12">
        <div className="flex flex-col sm:w-[50%] w-full">
          <span className="sm:text-6xl text-4xl my-3">
            Into the Cryptoverse
          </span>
          <span className="sm:text-4xl text-3xl my-2 text-gray-500">
            The most interactive educational game in Africa
          </span>
          <span className="text-2xl w-[70%] my-4">
            Into the Cryptoverse is a crypto game designed to educate people on
            Blockchain & Cryptocurrency in a Fun & Interactive way
          </span>
        </div>
        <div>
          <img
            src={hero_img}
            alt=""
            className="sm:w-[500px] sm:h-[500px] h-[300px] w-[300px]"
          />
        </div>
      </section>

      <section className="my-2 sm:mx-0 p-6 text-white rounded-lg shadow-md">
        <div></div>
        <div className="sm:flex sm:flex-row flex-wrap items-center justify-between sm:my-auto my-2">
          <div className="sm:w-1/2 w-full">
            <img
              src={game_img}
              alt="Game"
              className="rounded-lg shadow-lg  h-auto sm:w-auto w-full"
            />
          </div>
          <div className="sm:w-1/2 w-full sm:pl-6">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Cryptoverse
            </h2>
            <p className="text-xl mb-4">
              Challenge your friends and test your knowledge of blockchain
              technology in Blockchain Monopoly! This exciting game combines
              strategy and trivia as you race to the finish line. Answer
              blockchain-related questions to move forward, acquire properties,
              and avoid pitfalls.
            </p>
            <p className="text-lg mt-4">
              Play with 2-8 players and see who can master the blockchain first!
              Are you ready to roll the dice and prove your blockchain
              knowledge? Let the game begin!
            </p>
            <Link to={"/rubipoly"}>
              <PlayNowButton />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
