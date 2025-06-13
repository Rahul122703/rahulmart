import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardDesc = ({ id, image, price, name, desc }) => {
  const navigate = useNavigate();
  const product = { productName: name };
  const handleClick = () => {
    navigate(`/product/${id}`, { state: product }, { replace: true });
  };

  return (
    // <div className="border border-none w-full max-w-[100rem] mx-auto md:mb-0 rounded-xl m-4 p-2 md:p-0 h-[10rem]">
    <div className="overflow-clip flex flex-row bg-gray-100 dark:bg-gray-900 rounded-2xl md:shadow-sm md:border border-gray-300 dark:border-white cursor-pointer transition-all duration-300 hover:shadow-md h-[13rem] mb-3">
      <div className="w-[70%] sm:w-[30%] border border-none">
        <img src={image} alt={name} className="object-fit h-full w-full" />
      </div>

      <div className="md:p-4 flex flex-col justify-between w-full border border-none mx-2">
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white line-clamp-1">
            {name}
          </h2>
          <p className="text-gray-900 dark:text-white font-semibold mt-1 text-md">
            {price} ₹
          </p>
          <div className="text-gray-700 dark:text-gray-300 text-sm mt-2 line-clamp-4">
            {desc}
          </div>
        </div>

        <button
          onClick={handleClick}
          className="self-start bg-neutral-300 dark:bg-neutral-700 text-gray-900 dark:text-white px-4 py-1 rounded btn-sm md:mt-0 hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-colors duration-300 mt-6">
          View Details
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ProductCardDesc;
