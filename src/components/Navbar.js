import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { CiDark, CiCloudSun } from "react-icons/ci";
import { useProductContext } from "../context/product_context.js";

const Navbar = () => {
  const { openNavbar, closeNavbar, isNavbarOpen } = useProductContext();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");
    setTheme((prev) => (prev === "black" ? "light" : "black"));

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  return (
    <header className="border w-full px-6 py-3 flex flex-row justify-between my-4 sticky top-0 z-[1000] bg-base-100 text-base-content rounded-lg p-6 max-w-[80rem] mx-auto shadow-md">
      <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
        {theme === "black" ? (
          <CiCloudSun className="w-5 h-5" />
        ) : (
          <CiDark className="w-5 h-5" />
        )}
      </button>

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

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-[18rem] bg-base-100 text-base-content"
          />
          <FiSearch className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
        </div>

        {/* Cart & Login */}
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
        className="xl:hidden text-base-content z-50"
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
        className={`absolute top-[64px] left-0 w-full bg-base-100 text-base-content shadow-md flex flex-col items-start px-6 py-4 gap-4 xl:hidden z-40 transform transition-all duration-500 ease-in-out ${
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

        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-base-100 text-base-content"
          />
          <FiSearch className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
        </div>

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
