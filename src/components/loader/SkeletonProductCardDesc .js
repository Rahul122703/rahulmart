import React from "react";

const SkeletonProductCardDesc = () => {
  return (
    <div className="w-full mx-auto md:p-4 mt-4 md:mt-0 animate-pulse border border-none">
      <div className="flex flex-row sm:h-[13rem] bg-white dark:bg-gray-900 rounded-2xl md:shadow-sm md:border border-gray-300 dark:border-gray-700 overflow-hidden">
        <div className="w-[65%] sm:w-1/2  sm:h-auto bg-gray-300 dark:bg-gray-700"></div>

        <div className="md:p-4 p-4 flex flex-col justify-between w-full sm:w-2/3 h-[60%] md:h-auto">
          <div>
            <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-5 w-1/4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded mt-4 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductCardDesc;
