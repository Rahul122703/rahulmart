import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { CiDark, CiCloudSun } from "react-icons/ci";
import { IoSearchCircle } from "react-icons/io5";

import { useProductContext } from "../context/product_context.js";

import SearchModal from "./SearchInput.js";
import { useCartContext } from "../context/cart_context.js";

const Navbar = () => {
  const { openNavbar, closeNavbar, isNavbarOpen } = useProductContext();
  const [modal, showModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const { cart } = useCartContext();
  const totalCartItems = cart.reduce((accumulator, item) => {
    return accumulator + item.subAmount;
  }, 0);

  return (
    <header
      className="border w-full px-6 py-3 flex justify-between items-center my-4
                 sticky top-0 z-40 rounded-lg p-6 max-w-[78rem] mx-auto shadow-md
                 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center border border-none">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition
                     hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle Dark Mode">
          {theme === "dark" ? (
            <CiCloudSun className="w-5 h-5" />
          ) : (
            <CiDark className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={() => showModal(true)}
          className="relative"
          aria-label="Open Search Modal">
          <IoSearchCircle className="h-7 w-7" />
        </button>
        <Link to="/cart" aria-label="Go to cart">
          <div className="flex items-center relative">
            <FiShoppingCart
              className="ml-[10px] cursor-pointer
                           hover:text-blue-600 dark:hover:text-blue-400"
            />
            {totalCartItems ? (
              <div
                className="absolute px-[2px] top-[-10px] right-[-13px] rounded-xl text-[13px] md:text-sm
                           bg-blue-600 text-white border border-gray-200
                           dark:bg-blue-500 dark:border-gray-700">
                {totalCartItems}
              </div>
            ) : null}
          </div>
        </Link>
      </div>

      <SearchModal isOpen={modal} onClose={() => showModal(false)} />

      <span
        onClick={() => {
          navigate("/", { replace: true });
        }}
        className="text-xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text drop-shadow-sm cursor-pointer select-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/", { replace: true });
        }}>
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

        <div className="flex items-center gap-4 text-xl w-[10rem] justify-between">
          <Link to="/login" aria-label="Login">
            Login
          </Link>
        </div>
      </nav>

      <button
        className="xl:hidden text-gray-900 dark:text-gray-100"
        onClick={() => (isNavbarOpen ? closeNavbar() : openNavbar())}
        aria-label={isNavbarOpen ? "Close menu" : "Open menu"}>
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
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300"
          onClick={closeNavbar}>
          Home
        </Link>
        <Link
          to="/products"
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300"
          onClick={closeNavbar}>
          Products
        </Link>
        <Link
          to="/about"
          className="block w-full hover:text-white hover:bg-gray-700 blue-600 px-4 py-[8px] duration-300"
          onClick={closeNavbar}>
          About Us
        </Link>

        <div className="flex items-center justify-between text-md p-4">
          <Link to="/login" onClick={closeNavbar} aria-label="Login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
