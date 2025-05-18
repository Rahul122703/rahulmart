import React, { useState } from "react";

const ProductAmount = ({ stock = 10 }) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((q) => Math.max(q - 1, 0));
  };

  const increase = () => {
    setQuantity((q) => Math.min(q + 1, stock));
  };

  return (
    <div className="flex justify-center lg:justify-start items-center mt-4">
      <button
        onClick={decrease}
        className="px-4 py-2 text-xl text-white font-bold bg-gray-700 hover:bg-black rounded-l shadow disabled:opacity-50"
        disabled={quantity <= 1}>
        -
      </button>
      <span className="px-6 py-2 border-t border-b text-lg font-medium bg-white shadow-inner">
        {quantity}
      </span>
      <button
        onClick={increase}
        className="px-4 py-2 text-xl text-white font-bold bg-gray-700 hover:bg-black rounded-r shadow disabled:opacity-50"
        disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
};

export default ProductAmount;
