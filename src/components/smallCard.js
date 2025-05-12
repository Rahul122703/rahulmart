import React from "react";
import { FaSearchPlus } from "react-icons/fa";
const SmallCard = ({ image, price, name }) => {
  return (
    <div className="border  flex flex-col h-[15rem] w-[18rem] justify-between bg-[#f7f5ef] rounded-lg shadow-md overflow-hidden hover:scale-[1.080] transition-all duration-[0.5s]">
      <div className="border border-none flex-1 relative overflow-hidden">
        <div
          className="w-full h-full border border-black absolute bg-black opacity-0 hover:opacity-50 flex 
          flex-row justify-center items-center text-white text-[1.5rem] transition-all duration-[0.5s]">
          <FaSearchPlus />
        </div>
        <img src={image} alt="product_image" className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between border border-none p-4">
        <div className="font-bold">{name}</div>
        {price}₹
      </div>
    </div>
  );
};

export default SmallCard;
