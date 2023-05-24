import React from "react";
import { Link } from "react-router-dom";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav
      className={`flex items-center p-3 md:px-10 sticky -top-1 w-full z-10 justify-between bg-[#ffbf67] md:bg-indigo-500 text-black`}
    >
      <ul className="flex gap-3 md:gap-12 text-xl md:text-2xl font-sans ">
        <Link
          to={"/"}
          className=" focus:underline"
        >
          Home
        </Link>
        <Link
          to={"/coins"}
          className=" focus:underline "
        >
          Coins
        </Link>
        <Link
          to={"/exchanges"}
          className=" focus:underline "
        >
          Exchanges
        </Link>
      </ul>
      <div>
        <button className=" rounded-md p-1 active:bg-gray-400  "
          onClick={() => {
            document.body.style.backgroundColor = "#0e1525";
            document.body.style.color = "white";
          }}
        >
          {<HiMoon />}
        </button>
        <button className=" rounded-md p-1 active:bg-gray-400 "
          onClick={() => {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
          }}
        >
          {<HiSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
