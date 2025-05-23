import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardDesc = ({ id, image, price, name, desc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { replace: true });
  };

  return (
    <div className="w-full max-w-[100rem] mx-auto md:p-4 mb-4 md:mb-0 ">
      <div className="flex flex-col sm:flex-row min-h-[250px] bg-base-100 rounded-2xl md:shadow-sm md:border border-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md">
        <div className="w-full sm:w-1/3 h-64 sm:h-auto">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="md:p-4 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className="text-xl font-bold text-primary line-clamp-1">
              {name}
            </h2>
            <p className="text-base-content font-semibold mt-1 text-md">
              ${price}
            </p>
            <p className="text-sm text-base-content mt-2 line-clamp-2">
              {desc}
            </p>
          </div>

          <button
            className="self-start btn btn-neutral btn-sm mt-4 md:mt-0"
            onClick={handleClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDesc;
