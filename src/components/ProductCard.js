import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ id, image, price, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { replace: true });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-gray-300 dark:border-white flex flex-col h-[15rem] w-[18rem] justify-between bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-[1.080] transition-transform duration-500 m-4">
      <div className="relative flex-1 overflow-hidden border border-transparent">
        <div
          className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center text-white text-[1.5rem] transition-opacity duration-500"
          aria-hidden="true">
          <FaSearchPlus />
        </div>
        <img
          src={image}
          alt="product_image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between p-4 font-semibold text-gray-900 dark:text-white">
        <div className="font-bold">{name}</div>
        <span>{price}₹</span>
      </div>
    </div>
  );
};

export default SmallCard;
