import React from "react";
import { FaCheck } from "react-icons/fa";

const FilterSidebar = () => {
  return (
    <div
      className="
    border-t border-b
    border-r 
    border-l-none
    md:border-l
    md:border-r-none
    border-white
    rounded-md 
    md:h-auto
    overflow-auto
    p-4
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-white
    max-w-[250px]
    max-h-[800px] 
  ">
      <div className="mb-6">
        <h2 className="font-bold mb-2 dark:text-white">Category</h2>
        <ul className="flex flex-col space-y-1">
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            All
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Office
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Living Room
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Kitchen
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Bedroom
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Dining
          </li>
          <li className="hover:text-primary cursor-pointer dark:hover:text-primary-light">
            Kids
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2 dark:text-white">Company</h2>
        <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
          <option
            value="all"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            all
          </option>
          <option
            value="ikea"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            ikea
          </option>
          <option
            value="marcos"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            marcos
          </option>
          <option
            value="caressa"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            caressa
          </option>
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2 dark:text-white">Colors</h2>
        <div className="flex items-center flex-wrap gap-2">
          <button className="text-sm underline text-gray-900 dark:text-white">
            All
          </button>
          {["#222", "#f15025", "#c0eb75", "#00bcd4", "#fdd835"].map(
            (color, idx) => (
              <button
                key={idx}
                className="w-5 h-5 rounded-full flex items-center justify-center shadow"
                style={{ backgroundColor: color }}>
                <FaCheck className="text-white text-xs" />
              </button>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2 dark:text-white">Price</h2>
        <p className="text-sm mb-1 dark:text-white">$3,077.85</p>
        <input
          type="range"
          min="0"
          max="5000"
          step="1"
          className="w-full accent-primary"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2 dark:text-white">
          <input type="checkbox" className="accent-primary" />
          <span>Free Shipping</span>
        </label>
      </div>

      <div className="mt-4">
        <button className="bg-error text-white w-full rounded-md py-2 hover:bg-error/90 transition duration-200">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
