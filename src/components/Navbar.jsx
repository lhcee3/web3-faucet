import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLinkClick = () => setClick(false);

  return (
    <div className="container mx-auto flex items-center p-4">
      <Link to="/">
        <h1 className="text-[#85fd34] text-3xl font-bold">Web3 Faucet</h1>
      </Link>
      <div className="flex-1">
        <ul className="hidden md:flex gap-8 justify-center mx-auto">
          <li>
            <Link to="/" onClick={handleLinkClick} className="text-gray-500 hover:text-[#85fd34] font-medium">
              Airdrop
            </Link>
          </li>
          <li>
            <Link to="/signMessage" onClick={handleLinkClick} className="text-gray-500 hover:text-[#85fd34] font-medium">
              Sign Message
            </Link>
          </li>
          <li>
            <Link to="/sendTokens" onClick={handleLinkClick} className="text-gray-500 hover:text-[#85fd34] font-medium">
              Send Tokens
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden z-50" onClick={handleClick}>
        {click ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white/30 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          click ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li>
          <Link to="/" onClick={handleLinkClick} className="text-xl text-[#85fd34] font-semibold">
            Airdrop
          </Link>
        </li>
        <li>
          <Link to="/signMessage" onClick={handleLinkClick} className="text-xl text-[#85fd34] font-semibold">
            Sign Message
          </Link>
        </li>
        <li>
          <Link to="/sendTokens" onClick={handleLinkClick} className="text-xl text-[#85fd34] font-semibold">
            Send Tokens
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
