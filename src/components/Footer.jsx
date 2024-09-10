import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <img src={logo} alt="Logo" className="h-12" />
        <p className="text-center text-sm">
          © 2024 Rubicon Games. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
