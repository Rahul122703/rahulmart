import React from "react";
import { FaCheck } from "react-icons/fa";

const COLORS = [
  { hex: "#222", icon: "text-white" },
  { hex: "#f15025", icon: "text-white" },
  { hex: "#c0eb75", icon: "text-black" },
  { hex: "#00bcd4", icon: "text-white" },
  { hex: "#fdd835", icon: "text-black" },
];

const FilterSidebar = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md md:h-auto overflow-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-[250px] max-h-[800px]">
      <section className="mb-6">
        <h2 className="font-bold mb-2">Category</h2>
        <ul className="flex flex-col space-y-1">
          {["All", "Office", "Living Room", "Kitchen", "Bedroom", "Dining", "Kids"].map((label) => (
            <li key={label} className="cursor-pointer hover:text-primary dark:hover:text-primary-light">{label}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Company</h2>
        <select className="w-full rounded-md p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          {["all", "ikea", "marcos", "caressa"].map((opt) => (
            <option key={opt} value={opt} className="bg-inherit text-inherit">{opt}</option>
          ))}
        </select>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Colors</h2>
        <div className="flex items-center flex-wrap gap-2">
          <button className="text-sm underline">All</button>
          {COLORS.map(({ hex, icon }, idx) => (
            <button key={idx} className="w-5 h-5 rounded-full flex items-center justify-center shadow ring-1 ring-black/10" style={{ backgroundColor: hex }}>
              <FaCheck className={`${icon} text-xs`} />
            </button>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Price</h2>
        <p className="text-sm mb-1">$3,077.85</p>
        <input type="range" min="0" max="5000" step="1" className="w-full accent-primary" />
      </section>

      <section className="mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-primary" />
          <span>Free Shipping</span>
        </label>
      </section>

      <button className="bg-error text-white w-full rounded-md py-2 hover:bg-error/90 transition">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
