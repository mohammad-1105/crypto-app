import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({toggleDarkMode, darkModeBtn}) => {
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
        <button onClick={toggleDarkMode}>
        {darkModeBtn}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
