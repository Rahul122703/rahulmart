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
    <div className="mt-4">
      <button
        onClick={decrease}
        className="px-4 py-2 text-xl font-bold bg-gray-700 text-white hover:bg-black dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 rounded-l shadow disabled:opacity-50"
        disabled={quantity <= 1}>
        -
      </button>
      <span className="px-6 py-2 border-t border-b text-lg font-medium bg-white text-gray-900 shadow-inner dark:bg-gray-700 dark:text-white">
        {quantity}
      </span>
      <button
        onClick={increase}
        className="px-4 py-2 text-xl font-bold bg-gray-700 text-white hover:bg-black dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 rounded-r shadow disabled:opacity-50"
        disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
};

export default ProductAmount;
