import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

const SmallCard = ({ id, image, price, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { replace: true });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-gray-300 dark:border-white bg-gray-100 dark:bg-gray-900 rounded-xl hover:shadow-lg w-full md:w-[18rem] overflow-hidden transition-all duration-300 mb-4 md:m-4">
      <div className="h-48 w-full overflow-hidden flex-1 relative">
        <div className="w-full h-full absolute bg-neutral-900 dark:bg-neutral-700 opacity-0 hover:opacity-50 flex justify-center items-center text-white text-[1.5rem] transition-all duration-500">
          <FaSearchPlus />
        </div>
        <img
          src={image}
          alt="product"
          className="h-full w-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <div className="font-semibold text-lg text-gray-900 dark:text-white truncate">
          {name}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          {price} ₹
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
