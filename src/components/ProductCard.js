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
      className="cursor-pointer border border-base-300 flex flex-col h-[15rem] w-[18rem] justify-between bg-base-200 rounded-lg shadow-md overflow-hidden hover:scale-[1.080] transition-transform duration-500 m-4">
      <div className="border border-none flex-1 relative overflow-hidden">
        <div
          className="w-full h-full border border-transparent absolute bg-black opacity-0 hover:opacity-50 flex
          flex-row justify-center items-center text-white text-[1.5rem] transition-opacity duration-500">
          <FaSearchPlus />
        </div>
        <img src={image} alt="product_image" className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between border border-none p-4 text-base-content font-semibold">
        <div className="font-bold">{name}</div>
        <span>{price}₹</span>
      </div>
    </div>
  );
};

export default SmallCard;
