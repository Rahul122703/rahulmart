import { FaTh, FaBars } from "react-icons/fa";
import { useProductContext } from "../context/product_context.js";
import { useFilterContext } from "../context/filter_context.js";

function ProductHeader({ totalProducts }) {
  const { changeProductCardView, productCardChange } = useProductContext();
  const { sort, sortProducts } = useFilterContext();

  const Line = () => {
    return (
      <div className="bg-gray-300 dark:bg-gray-600 flex-1 rounded-2xl mx-4 h-[1.5px] w-full"></div>
    );
  };

  return (
    <div className="flex flex-row overflow-auto items-center justify-between border-b  dark:border-gray-600   rounded-xl w-[100%] border border-none">
      <div className="flex items-center space-x-2">
        <button
          className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => changeProductCardView(!productCardChange)}>
          {productCardChange ? (
            <FaTh className="w-4 h-4 md:w-6 md:h-6 text-gray-900 dark:text-white" />
          ) : (
            <FaBars className="w-4 h-4 md:w-6 md:h-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </div>

      <Line />

      <div className="md:text-lg text-gray-900 dark:text-white text-sm">
        {totalProducts} Products Found
      </div>

      <Line />
      <div className="flex items-center space-x-2 flex-row  border border-none mr-4">
        <div className="text-sm md:text-lg text-gray-700 dark:text-gray-400">
          Sort
        </div>
        <select
          value={sort}
          onChange={sortProducts}
          className="select select-bordered w-2 lg:w-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a-z">Name (A-Z)</option>
          <option value="name-z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default ProductHeader;
