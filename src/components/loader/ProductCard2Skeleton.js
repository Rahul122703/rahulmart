import React from "react";

const ProductCard2Skeleton = () => {
  return (
    <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-lg w-full md:w-[18rem] overflow-hidden transition-all duration-300 mb-4 md:m-4 animate-pulse border border-gray-300 dark:border-gray-700">
      <div className="h-48 w-full overflow-hidden flex-1 relative">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
      </div>

      <div className="p-4">
        <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCard2Skeleton;
