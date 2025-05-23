import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { CiDark, CiCloudSun } from "react-icons/ci";
import { useProductContext } from "../context/product_context.js";

import SearchModal from "./SearchInput.js";
const Navbar = () => {
  const { openNavbar, closeNavbar, isNavbarOpen } = useProductContext();
  const [modal, showModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log(`this is excecuted current theme ${theme}`);
    document.documentElement.classList.add("theme-transition");
    const newTheme = theme === "light" ? "black" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  return (
    <header className="border w-full px-6 py-3 flex flex-row justify-between items-center my-4 sticky top-0 z-[400] bg-base-100 text-base-content rounded-lg p-6 max-w-[80rem] mx-auto shadow-md">
      <div className="border border-none flex flex-row w-[20rem] justify-between items-center">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle mr-4">
          {theme === "black" ? (
            <CiCloudSun className="w-5 h-5" />
          ) : (
            <CiDark className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={() => showModal(true)}
          className="relative border border-none  flex flex-row w-[95%]">
          <input
            type="text"
            placeholder="  Search..."
            className="w-[95%]  px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-base-100 text-base-content border "
          />
        </button>
      </div>
      <SearchModal isOpen={modal} onClose={() => showModal(false)} />
      <nav className="hidden xl:flex items-center gap-6 text-base-content text-sm border border-none">
        {["Home", "Products", "About"].map((item, index) => {
          const path =
            item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`;
          return (
            <Link
              key={index}
              to={path}
              className="group relative text-lg transition text-base-content hover:text-primary">
              {item}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 bg-primary rounded transition-transform origin-left duration-300"></span>
            </Link>
          );
        })}

        <div className="flex items-center gap-4 text-xl border border-none w-[10rem] justify-between">
          <div className="border border-none flex flex-row justify-center items-center relative">
            Cart
            <FiShoppingCart className="w-full h-full ml-[10px] cursor-pointer hover:text-primary" />
            <div className="border border-gray bg-primary text-primary-content rounded-full absolute top-[-5px] right-[-22px] text-sm p-[2px]">
              12
            </div>
          </div>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <button
        className="xl:hidden text-base-content "
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
        className={`rounded-b-lg border border-white absolute top-[64px]  bg-base-100 text-base-content shadow-md flex flex-col items-start px-6 py-4 gap-4 xl:hidden z-40 transform transition-all duration-500 ease-in-out w-full left-0 right-0 mt-4 ${
          isNavbarOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
        <Link to="/" className="text-base-content hover:text-primary w-full">
          Home
        </Link>
        <Link
          to="/products"
          className="text-base-content hover:text-primary w-full">
          Products
        </Link>
        <Link
          to="/about"
          className="text-base-content hover:text-primary w-full">
          About Us
        </Link>

        <div className="flex items-center gap-4 border border-none w-full justify-between text-xl">
          <div className="border border-none flex flex-row justify-center items-center relative">
            <FiShoppingCart className="w-full h-full ml-4 cursor-pointer hover:text-primary" />
            <div className="border border-gray bg-primary text-primary-content rounded-full absolute top-[-5px] right-[-22px] text-sm p-[2px]">
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
