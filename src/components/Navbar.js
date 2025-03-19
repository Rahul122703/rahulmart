import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiLogIn, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">MyStore</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-gray-700 text-sm">
        <Link to="/" className="hover:text-black transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-black transition">
          Products
        </Link>
        <Link to="/about" className="hover:text-black transition">
          About Us
        </Link>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <FiSearch className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center gap-4">
          <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          <FiLogIn className="w-5 h-5 cursor-pointer hover:text-black" />
        </div>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-black">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About Us
          </Link>

          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <FiSearch className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
          </div>

          <div className="flex gap-4 mt-2">
            <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
            <FiLogIn className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
