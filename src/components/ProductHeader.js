import { FaTh, FaBars } from "react-icons/fa";

function ProductHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-5  mb-4">
      <div className="flex items-center space-x-2">
        <button className="p-1 border rounded">
          <FaTh className="w-6 h-6" />
        </button>
        <button className="p-1 bg-black text-white border rounded">
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      <div className="text-xl text-gray-700">22 Products Found</div>

      <div className="flex items-center space-x-2">
        <span className="text-xl text-gray-600">Sort By</span>
        <select className="px-2 py-1 border rounded bg-gray-100 text-xl">
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
