import React from "react";

export default function ProductPageSkeleton() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-6 w-full border border-none animate-pulse">
        <div className="max-w-[100rem] mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-none">
          <div className="mb-6 px-4 py-2 bg-gray-300 text-white rounded-lg shadow w-32 h-10"></div>

          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 px-2 lg:px-6 space-y-5">
              <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-6 w-1/3 bg-yellow-300 rounded"></div>
              <div className="h-8 w-1/4 bg-gray-300 rounded"></div>
              <div className="h-20 bg-gray-300 rounded"></div>

              <div className="space-y-2">
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
              </div>

              <div className="flex space-x-2">
                <div className="w-5 h-5 rounded-full bg-yellow-300 shadow"></div>
                <div className="w-5 h-5 rounded-full bg-pink-300 shadow"></div>
                <div className="w-5 h-5 rounded-full bg-green-300 shadow"></div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
                <div className="w-16 h-10 bg-white border border-gray-300 rounded"></div>
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
              </div>

              <div className="w-40 h-[100px] bg-gray-300 rounded-xl"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[800px] bg-gray-300 rounded-2xl shadow-xl"></div>
              <div className="flex gap-2 mt-4 justify-center">
                {[1, 2, 3, 4].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 bg-gray-300 rounded-xl border border-gray-300 shadow-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
