import React from "react";

const SmallCard = ({ image, price, productName }) => {
  return (
    <div className="border border-none flex flex-col h-[100%] justify-between bg-white">
      <div className="border border-none flex-1">
        <img src={image} alt="product_image" className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between border border-none">
        <div className="font-bold">{productName}</div>
        {price}
      </div>
    </div>
  );
};

export default SmallCard;
