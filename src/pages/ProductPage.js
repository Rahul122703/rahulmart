import React, { useState } from "react";
import Footer from "../components/Footer.js";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(9);

  return (
    <>
      <div className="bg-gray-50 min-h-screen p-6 w-full border border-none">
        <div className=" max-w-[100rem] mx-auto bg-white  rounded-3xl shadow-2xl p-6 border border-gray-700">
          <button className="mb-6 px-4 py-2 bg-gray-700  hover:bg-black text-white rounded-lg shadow flex flex-row justify-between align-center">
            <IoMdArrowRoundBack />
          </button>

          <div className="flex flex-col-reverse lg:flex-row gap-10 border border-none">
            <div className="w-full lg:w-1/2 px-2 lg:px-6 space-y-5 text-center lg:text-left border border-none">
              <h2 className="text-4xl font-bold text-gray-800">
                Modern Bookshelf
              </h2>

              <p className="text-yellow-500 text-lg">
                ★★★★☆{" "}
                <span className="text-sm text-gray-500 align-middle">
                  (27 customer reviews)
                </span>
              </p>

              <p className="text-3xl font-bold  text-gray-700">$319.99</p>

              <p className="text-gray-600">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 text-gray-700 text-sm sm:text-base">
                <p>
                  <span className="font-semibold">Available:</span> In Stock
                </p>
                <p>
                  <span className="font-semibold">SKU:</span> RecoAJYUCuEKxcPSr
                </p>
                <p>
                  <span className="font-semibold">Brand:</span> Caressa
                </p>
              </div>

              <div>
                <span className="font-semibold mr-2">Colors:</span>
                <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 ring-2 ring-white shadow mr-2"></span>
                <span className="inline-block w-5 h-5 rounded-full bg-pink-400 ring-2 ring-white shadow mr-2"></span>
                <span className="inline-block w-5 h-5 rounded-full bg-green-400 ring-2 ring-white shadow mr-2"></span>
              </div>

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

              <button className="mt-4 px-8 py-3 bg-gray-700  hover:bg-black text-white text-lg font-semibold rounded-xl shadow-md  transition">
                ADD TO CART
              </button>
            </div>

            <div className="w-full lg:w-1/2 border border-none">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern Bookshelf"
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[800px] object-cover"
              />
              <div className="flex gap-2 mt-4 justify-center">
                {[1, 2, 3, 4].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 bg-gray-200 rounded-xl border border-gray-300 shadow-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
