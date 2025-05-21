import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardDesc = ({ id, image, price, name, desc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { replace: true });
  };

  return (
    <div className="w-full max-w-[100rem] mx-auto md:p-4 mb-4 md:mb-0">
      <div className="flex flex-col sm:flex-row min-h-[250px] bg-white rounded-2xl md:shadow-sm md:border border-gray-300 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md">
        <div className="w-full sm:w-1/3 h-64 sm:h-auto">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="md:p-4 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className="text-xl font-bold text-blue-900 line-clamp-1">
              {name}
            </h2>
            <p className="text-gray-700 font-semibold mt-1 text-md">${price}</p>
            <p className="text-sm text-gray-700 mt-2 line-clamp-2 ">{desc}</p>
          </div>

          <button
            className="self-start px-4 py-2 text-sm bg-gray-800 text-white rounded-md hover:bg-black transition duration-200 mt-4 md:mt-0"
            onClick={handleClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDesc;
