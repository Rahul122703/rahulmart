import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { CiDark, CiCloudSun } from "react-icons/ci";
import { IoSearchCircle } from "react-icons/io5";

import { useProductContext } from "../context/product_context.js";

import SearchModal from "./SearchInput.js";

const Navbar = () => {
  const { openNavbar, closeNavbar, isNavbarOpen } = useProductContext();
  const [modal, showModal] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header
      className="border w-full px-6 py-3 flex justify-between items-center my-4
                 sticky top-0 z-[400] rounded-lg p-6 max-w-[78rem] mx-auto shadow-md
                 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleTheme}
          className="mr-4 p-2 rounded-full transition
                     hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === "dark" ? (
            <CiCloudSun className="w-5 h-5" />
          ) : (
            <CiDark className="w-5 h-5" />
          )}
        </button>

        <button onClick={() => showModal(true)} className="relative">
          <IoSearchCircle className="h-7 w-7" />
          {/* <input
            type="text"
            placeholder="  Search..."
            className="w-[95%] px-3 py-1 rounded-md text-sm border
                       bg-white text-gray-900
                       focus:outline-none focus:ring-1 focus:ring-gray-400
                       dark:bg-gray-800 dark:text-gray-100"
          /> */}
        </button>
      </div>
      <SearchModal isOpen={modal} onClose={() => showModal(false)} />
      <span className="text-xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text drop-shadow-sm">
        RAHULMART
      </span>

      <nav className="hidden xl:flex items-center gap-6 text-sm">
        {["Home", "Products", "About"].map((item, index) => {
          const path =
            item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`;
          return (
            <Link
              key={index}
              to={path}
              className="group relative text-lg transition
                         text-gray-900 dark:text-gray-100
                         hover:text-blue-600 dark:hover:text-blue-400">
              {item}
              <span
                className="absolute bottom-[-4px] left-0 h-[2px] w-full scale-x-0
                           origin-left rounded bg-blue-600 dark:bg-blue-400
                           transition-transform duration-300 group-hover:scale-x-100"
              />
            </Link>
          );
        })}

        {/* Cart + login */}
        <div className="flex items-center gap-4 text-xl w-[10rem] justify-between">
          <Link to="/cart">
            <div className="flex items-center relative">
              Cart
              <FiShoppingCart
                className="ml-[10px] cursor-pointer
                           hover:text-blue-600 dark:hover:text-blue-400"
              />
              <div
                className="absolute top-[-5px] right-[-22px] rounded-full text-sm p-[2px]
                           bg-blue-600 text-white border border-gray-200
                           dark:bg-blue-500 dark:border-gray-700">
                12
              </div>
            </div>
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <button
        className="xl:hidden text-gray-900 dark:text-gray-100"
        onClick={() => (isNavbarOpen ? closeNavbar() : openNavbar())}>
        {isNavbarOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>
      <div
        className={`absolute top-[64px] left-0 right-0 mt-[0.3rem] z-40 w-full rounded-b-lg
                    transform transition-all duration-500 ease-in-out
                    shadow-md ${
                      isNavbarOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }
                    bg-white text-gray-900 border border-gray-200
                    dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700`}>
        <Link
          to="/"
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300">
          Home
        </Link>
        <Link
          to="/products"
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300">
          Products
        </Link>
        <Link
          to="/about"
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300">
          About Us
        </Link>

        <div className="flex items-center justify-between text-md p-4">
          <Link to="/cart">
            <div className="flex items-center relative">
              <FiShoppingCart
                className="ml-4 cursor-pointer
                           hover:text-blue-600 dark:hover:text-blue-400"
              />
              <div
                className="absolute top-[-5px] right-[-22px] rounded-full text-sm p-[2px]
                           bg-blue-600 text-white border border-gray-200
                           dark:bg-blue-500 dark:border-gray-700">
                12
              </div>
            </div>
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
