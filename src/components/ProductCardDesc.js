import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardDesc = ({ id, image, price, name, desc }) => {
  const navigate = useNavigate();
  const product = { productName: name };
  const handleClick = () => {
    navigate(`/product/${id}`, { state: product }, { replace: true });
  };

  return (
    <div className="w-full max-w-[100rem] mx-auto md:mb-0 rounded-xl m-4 p-2 md:p-0 ">
      <div className="flex flex-col sm:flex-row min-h-[250px] bg-gray-100 dark:bg-gray-900 rounded-2xl md:shadow-sm md:border border-gray-300 dark:border-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md">
        <div className="w-full sm:w-1/3 h-64 sm:h-auto">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="md:p-4 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white line-clamp-1">
              {name}
            </h2>
            <p className="text-gray-900 dark:text-white font-semibold mt-1 text-md">
              ${price}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 line-clamp-2">
              {desc}
            </p>
          </div>

          <button
            onClick={handleClick}
            className="self-start bg-neutral-300 dark:bg-neutral-700 text-gray-900 dark:text-white px-4 py-1 rounded btn-sm mt-4 md:mt-0 hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDesc;
