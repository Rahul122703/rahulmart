import React from "react";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

const ProductStar = ({ rating }) => {
  const items = [];
  console.log("the rating is : ", rating);
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      items.push(<IoStarSharp />);
    } else {
      items.push(<IoStarOutline />);
    }
  }
  return (
    <div className="flex flex-row ">
      {items.map((currentItem) => {
        return currentItem;
      })}
    </div>
  );
};

export default ProductStar;
