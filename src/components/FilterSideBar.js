import React from "react";
import { FaCheck } from "react-icons/fa";

const FilterSidebar = () => {
  return (
    <div className="p-4 rounded-tr-md rounded-br-md border-t border-r border-b md:border-l md:border-t  border-white overflow-auto md:rounded-tl-md md:rounded-bl-md bg-base-100 text-base-content max-w-[250px]">
      <div className="mb-6">
        <h2 className="font-bold mb-2">Category</h2>
        <ul className="flex flex-col space-y-1">
          <li className="hover:text-primary cursor-pointer">All</li>
          <li className="hover:text-primary cursor-pointer">Office</li>
          <li className="hover:text-primary cursor-pointer">Living Room</li>
          <li className="hover:text-primary cursor-pointer">Kitchen</li>
          <li className="hover:text-primary cursor-pointer">Bedroom</li>
          <li className="hover:text-primary cursor-pointer">Dining</li>
          <li className="hover:text-primary cursor-pointer">Kids</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Company</h2>
        <select className="select select-bordered w-full">
          <option value="all">all</option>
          <option value="ikea">ikea</option>
          <option value="marcos">marcos</option>
          <option value="caressa">caressa</option>
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Colors</h2>
        <div className="flex items-center flex-wrap gap-2">
          <button className="text-sm underline text-base-content">All</button>
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
        <h2 className="font-bold mb-2">Price</h2>
        <p className="text-sm mb-1">$3,077.85</p>
        <input
          type="range"
          min="0"
          max="5000"
          step="1"
          className="range range-primary w-full"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span>Free Shipping</span>
        </label>
      </div>

      <div className="mt-4">
        <button className="btn btn-error text-white w-full">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
