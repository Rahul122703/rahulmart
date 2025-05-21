import React from "react";

const SkeletonProductCardDesc = () => {
  return (
    <div className="w-full max-w-[100rem] mx-auto md:p-4 mt-4 md:mt-0 animate-pulse">
      <div className="flex flex-col sm:flex-row min-h-[250px] bg-white rounded-2xl md:shadow-sm md:border border-gray-300 overflow-hidden">
        <div className="w-full sm:w-1/3 h-64 sm:h-auto bg-gray-300"></div>

        <div className="md:p-4 p-4 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
            <div className="h-5 w-1/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          </div>

          <div className="h-10 w-28 bg-gray-300 rounded mt-4 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductCardDesc;
