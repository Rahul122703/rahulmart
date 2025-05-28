import React from "react";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

const ProductStar = ({ rating }) => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      items.push(
        <IoStarSharp key={i} className="text-yellow-500 dark:text-yellow-400" />
      );
    } else {
      items.push(
        <IoStarOutline
          key={i}
          className="text-yellow-500 dark:text-yellow-400"
        />
      );
    }
  }
  return <div className="flex flex-row">{items}</div>;
};

export default ProductStar;
