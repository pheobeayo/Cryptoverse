import React, { useState } from "react";
import image from "../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { Button } from "./Button";
import { toast } from "react-hot-toast";

const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

const Navbar = () => {
  const [account, setAccount] = useState(null);
  const connect = () => {
    toast.success("Connecting Wallet ......", {
      position: "top-center",
    });
    try {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((address) => {
          setAccount(address[0]);
          localStorage.setItem("account", address[0]);
        })
        .catch((error) => {
          console.log(error);
        });

      toast.success("Wallet Connected", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("something went wrong", {
        position: "top-center",
      });
      toast.dismiss();
      console.log(error);
    }
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-900 text-white fixed top-0 right-0 left-0 z-40 border-y">
      <Link to="/">
        <div>
          <img src={image} alt="Logo" className="h-8" />
        </div>
      </Link>
      <div>
        <Button
          onClick={connect}
          placeholder={
            account !== null ? `${truncateAddress(account)}` : "Connect Wallet"
          }
          icon={<BsPerson />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
