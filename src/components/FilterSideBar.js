import React, { useState } from "react";
import { useFilterContext } from "../context/filter_context.js";

const FilterSidebar = () => {
  const {
    filter_data: { categories, companies, colors, max_price },
    filters: { company, color, price, free_shipping },
    filterProduct,
    clearFilter,
  } = useFilterContext();

  const [priceRange, setPriceRange] = useState(price);
  const [shipping, setFreeshipping] = useState(free_shipping || "true");
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md md:h-auto overflow-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:-w-[270px] max-h-[800px]">
      <section className="mb-6">
        <h2 className="font-bold mb-2">Category</h2>
        <ul className="flex flex-col space-y-1 items-start">
          {categories.map((label) => (
            <button
              name="category"
              value={label}
              key={label}
              onClick={filterProduct}
              className="w-full text-start rounded-xl p-1 cursor-pointer hover:text-primary dark:hover:text-primary-light hover:bg-gray-700 hover:text-white capitalize">
              {label}
            </button>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Company</h2>
        <select
          value={company}
          name="company"
          onChange={filterProduct}
          className="w-full rounded-md p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          {companies.map((opt) => (
            <option key={opt} value={opt} className="bg-inherit text-inherit">
              {opt}
            </option>
          ))}
        </select>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Colors</h2>
        <select
          value={color}
          name="color"
          onChange={filterProduct}
          className="w-full rounded-md p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          {colors.map((opt) => (
            <option key={opt} value={opt} className="bg-inherit text-inherit">
              {opt}
            </option>
          ))}
        </select>
      </section>

      <section
        className="mb-6"
        name="price"
        value={priceRange}
        onChange={filterProduct}>
        <h2 className="font-bold mb-2">
          Price: <span className="text-primary">{priceRange}₹</span>
        </h2>
        <input
          name="price"
          type="range"
          min="0"
          max={max_price}
          step="1"
          value={priceRange}
          className="w-full accent-primary"
          onChange={(e) => {
            filterProduct(e);
            handlePriceChange(e);
          }}
        />
      </section>

      <section className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="free_shipping"
            onChange={filterProduct}
            className="accent-primary"
          />
          <span>Free Shipping</span>
        </label>
      </section>

      <button
        onClick={clearFilter}
        className="bg-gray-700 text-white dark:bg-white dark:text-gray-700 w-full rounded-md py-2 hover:bg-error/90 transition">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
