import React from "react";

const SkeletonSmallCard = () => {
  return (
    <div className="border flex flex-col h-[13rem] w-[16rem] justify-between bg-base-200 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="border border-none flex-1 relative overflow-hidden h-[200px]">
        <div className="w-full h-full bg-base-300 border border-none"></div>
      </div>
      <div className="flex flex-row justify-between border border-none p-4">
        <div className="h-5 w-[10rem] mr-4 bg-base-300 rounded border border-none"></div>
        <div className="h-5 w-16 bg-base-300 rounded border border-none"></div>
      </div>
    </div>
  );
};

export default SkeletonSmallCard;
