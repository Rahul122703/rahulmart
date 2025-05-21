import React from "react";
import { FaCheck } from "react-icons/fa";

const FilterSidebar = () => {
  return (
    <div className="p-4 border-l border-t border-b">
      <div className="mb-6">
        <h2 className="font-bold mb-2">Category</h2>
        <ul className="flex flex-col space-y-1 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">All</li>
          <li className="hover:text-blue-500 cursor-pointer">Office</li>
          <li className="hover:text-blue-500 cursor-pointer">Living Room</li>
          <li className="hover:text-blue-500 cursor-pointer">Kitchen</li>
          <li className="hover:text-blue-500 cursor-pointer">Bedroom</li>
          <li className="hover:text-blue-500 cursor-pointer">Dining</li>
          <li className="hover:text-blue-500 cursor-pointer">Kids</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Company</h2>
        <select className="w-full px-2 py-2 border rounded-md shadow-sm">
          <option value="all">all</option>
          <option value="ikea">ikea</option>
          <option value="marcos">marcos</option>
          <option value="caressa">caressa</option>
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Colors</h2>
        <div className="flex items-center flex-wrap gap-2">
          <button className="text-sm text-gray-700 underline">All</button>
          {["#222", "#f15025", "#c0eb75", "#00bcd4", "#fdd835"].map(
            (color, idx) => (
              <button
                key={idx}
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: color }}>
                <FaCheck className="text-white text-xs" />
              </button>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Price</h2>
        <p className="text-sm text-gray-700 mb-1">$3,077.85</p>
        <input type="range" min="0" max="5000" step="1" className="w-full" />
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" />
          <span>Free Shipping</span>
        </label>
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
