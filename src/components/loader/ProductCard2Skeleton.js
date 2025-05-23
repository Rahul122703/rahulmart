import React from "react";

const ProductCard2Skeleton = () => {
  return (
    <div className="cursor-pointer bg-base-100 rounded-box w-full md:w-[18rem] overflow-hidden transition-all duration-300 mb-4 md:m-4 animate-pulse border border-base-300">
      <div className="h-48 w-full overflow-hidden flex-1 relative">
        <div className="w-full h-full bg-base-300 rounded-t-box"></div>
      </div>

      <div className="p-4">
        <div className="h-5 w-3/4 bg-base-300 rounded mb-2"></div>
        <div className="h-4 w-1/4 bg-base-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCard2Skeleton;
