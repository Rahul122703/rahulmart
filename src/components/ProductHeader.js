import { FaTh, FaBars } from "react-icons/fa";
import { useProductContext } from "../context/product_context.js";

function ProductHeader({ totalProducts }) {
  const { changeProductCardView, productCardChange } = useProductContext();

  const Line = () => {
    return (
      <div className="bg-base-300  flex-1 rounded-2xl mx-4  h-[1.5px] w-full"></div>
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-between border-b border-base-300 md:p-4 mb-4">
      <div className="flex items-center space-x-2">
        <button
          className="p-2 border border-base-300 rounded bg-base-100 hover:bg-base-200 transition"
          onClick={() => changeProductCardView(!productCardChange)}>
          {productCardChange ? (
            <FaTh className="w-6 h-6 text-base-content" />
          ) : (
            <FaBars className="w-6 h-6 text-base-content" />
          )}
        </button>
      </div>

      <Line />

      <div className="text-lg text-base-content">
        {totalProducts} Products Found
      </div>

      <Line />
      <div className="flex items-center space-x-2">
        <span className="text-lg text-base-content/70">Sort </span>
        <select className="select select-bordered select-sm bg-base-100 text-base-content">
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
