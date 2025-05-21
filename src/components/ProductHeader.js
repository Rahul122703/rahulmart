import { FaTh, FaBars } from "react-icons/fa";
import { useProductContext } from "../context/product_context.js";

function ProductHeader({ totalProducts }) {
  const { changeProductCardView, productCardChange } = useProductContext();
  return (
    <div className="flex flex-row flex-wrap items-center justify-between border-b border-gray-300 md:p-4 mb-4">
      <div className="flex items-center space-x-2">
        <button
          className={`p-2 border rounded`}
          onClick={() => {
            changeProductCardView(!productCardChange);
          }}>
          {productCardChange ? (
            <FaTh className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className="text-lg text-gray-700">
        {totalProducts} Products Found
      </div>

      <div className="flex items-center space-x-2 ">
        <span className="text-lg text-gray-600">Sort By</span>
        <select className="px-2 py-1 border rounded bg-gray-100 text-lg">
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default ProductHeader;
