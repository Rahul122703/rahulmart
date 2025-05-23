import React from "react";

export default function ProductPageSkeleton() {
  return (
    <>
      <div className="bg-base-200 p-6 w-full border border-none animate-pulse">
        <div className="max-w-[100rem] mx-auto bg-base-100 rounded-3xl shadow-2xl p-6 border border-base-300">
          <div className="mb-6 px-4 py-2 bg-base-300 text-base-content rounded-lg shadow w-32 h-10"></div>

          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 px-2 lg:px-6 space-y-5">
              <div className="h-10 w-3/4 bg-base-300 rounded"></div>
              <div className="h-6 w-1/3 bg-base-300 rounded"></div>
              <div className="h-8 w-1/4 bg-base-300 rounded"></div>
              <div className="h-20 bg-base-300 rounded"></div>

              <div className="space-y-2">
                <div className="h-4 w-2/3 bg-base-300 rounded"></div>
                <div className="h-4 w-1/2 bg-base-300 rounded"></div>
                <div className="h-4 w-1/3 bg-base-300 rounded"></div>
              </div>

              <div className="flex space-x-2">
                <div className="w-5 h-5 rounded-full bg-yellow-400 shadow"></div>
                <div className="w-5 h-5 rounded-full bg-pink-400 shadow"></div>
                <div className="w-5 h-5 rounded-full bg-green-400 shadow"></div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-base-300 rounded"></div>
                <div className="w-16 h-10 bg-base-100 border border-base-300 rounded"></div>
                <div className="w-10 h-10 bg-base-300 rounded"></div>
              </div>

              <div className="w-40 h-[100px] bg-base-300 rounded-xl"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[800px] bg-base-300 rounded-2xl shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
