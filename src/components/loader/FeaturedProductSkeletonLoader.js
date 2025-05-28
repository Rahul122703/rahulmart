import React from "react";

const SkeletonSmallCard = () => {
  return (
    <div className="m-4 border border-white flex flex-col h-[13rem] w-[16rem] justify-between bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="border border-none flex-1 relative overflow-hidden h-[200px] w-full">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 border border-none"></div>
      </div>
      <div className="flex flex-row justify-between border border-none p-4">
        <div className="h-5 w-[10rem] mr-4 bg-gray-300 dark:bg-gray-700 rounded border border-none"></div>
        <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded border border-none"></div>
      </div>
    </div>
  );
};

export default SkeletonSmallCard;
