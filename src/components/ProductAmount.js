import React, { useState } from "react";

const ProductAmount = () => {
  const [quantity, setQuantity] = useState(9);

  return (
    <div className="flex justify-center lg:justify-start items-center mt-4">
      <button
        onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
        className="px-4 py-2 text-xl text-white font-bold bg-gray-700  hover:bg-black rounded-l shadow ">
        -
      </button>
      <span className="px-6 py-2 border-t border-b text-lg font-medium bg-white shadow-inner">
        {quantity}
      </span>
      <button
        onClick={() => setQuantity((q) => q + 1)}
        className="px-4 py-2 text-xl  text-white font-bold rounded-r shadow bg-gray-700  hover:bg-black">
        +
      </button>
    </div>
  );
};

export default ProductAmount;
