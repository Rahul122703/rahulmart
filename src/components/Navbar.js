import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";

import { useProductContext } from "../context/product_context.js";

const Navbar = () => {
  const { openNavbar, closeNavbar, isNavbarOpen } = useProductContext();

  return (
    <header className="border w-full px-6 py-3 flex flex-row justify-between my-4 sticky top-0 z-[1000] bg-white rounded-lg  p-6 max-w-[80rem] mx-auto shadow-lg">
      <div className="text-xl font-semibold text-gray-800">RahulMart</div>

      <nav className="hidden md:flex items-center gap-6 text-gray-700 text-sm  border border-none">
        {["Home", "Products", "About"].map((item, index) => {
          const path =
            item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`;
          return (
            <Link
              key={index}
              to={path}
              className="group relative text-lg transition text-gray-700 hover:text-black">
              {item}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 bg-black rounded transition-transform origin-left duration-300"></span>
            </Link>
          );
        })}

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-[18rem]"
          />
          <FiSearch className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center gap-4 text-xl border border-none w-[10rem] justify-between">
          <div className="border border-none flex flex-row justify-center items-center relative">
            Cart
            <FiShoppingCart className="w-full h-full ml-[10px] cursor-pointer hover:text-black" />
            <div className="border border-gray bg-black text-white rounded-full absolute top-[-5px] right-[-22px] text-sm p-[2px]">
              12
            </div>
          </div>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <button
        className="md:hidden text-gray-800 z-50"
        onClick={() => {
          if (isNavbarOpen) {
            closeNavbar();
          } else {
            openNavbar();
          }
        }}>
        {isNavbarOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      <div
        className={`absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-40 transform transition-all duration-500 ease-in-out ${
          isNavbarOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
        <Link to="/" className="text-gray-700 hover:text-black w-full">
          Home
        </Link>
        <Link to="/products" className="text-gray-700 hover:text-black w-full">
          Products
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-black w-full">
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

        <div className="flex items-center gap-4  border border-none w-full justify-between text-xl">
          <div className="border border-none flex flex-row justify-center items-center relative">
            <FiShoppingCart className="w-full h-full ml-4 cursor-pointer hover:text-black" />
            <div className="border border-gray bg-black text-white rounded-full absolute top-[-5px] right-[-22px] text-sm p-[2px]">
              12
            </div>
          </div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
