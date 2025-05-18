import React, { useState } from "react";
import Footer from "../components/Footer.js";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(9);

  return (
    <>
      <div className="p-10 max-w-7xl mx-auto">
        <button className="mb-6 px-4 py-2 bg-amber-400 text-white rounded">
          BACK TO PRODUCTS
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Modern Bookshelf"
              className="rounded-xl shadow-md"
            />
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((_, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 bg-gray-200 rounded-md border border-gray-300"></div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Modern Bookshelf</h2>
            <p className="text-yellow-500 mt-2">
              ★★★★☆{" "}
              <span className="text-sm text-gray-500">
                (27 customer reviews)
              </span>
            </p>
            <p className="text-2xl font-semibold text-amber-600 mt-4">
              $319.99
            </p>
            <p className="text-gray-600 mt-4">
              Cloud bread VHS hell of banjo bicycle rights jianbing umami
              mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
              dreamcatcher waistcoat, authentic chillwave trust fund.
            </p>

            <div className="mt-6 space-y-2">
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

            <div className="mt-4">
              <span className="font-semibold mr-2">Colors:</span>
              <span className="inline-block w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-pink-400 mr-2"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-green-400 mr-2"></span>
            </div>

            <div className="flex items-center mt-6">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="px-3 py-1 text-lg font-bold bg-gray-200 rounded-l">
                -
              </button>
              <span className="px-5 py-1 border-t border-b bg-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-lg font-bold bg-gray-200 rounded-r">
                +
              </button>
            </div>

            <button className="mt-6 px-6 py-2 bg-amber-600 text-white rounded shadow hover:bg-amber-700">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
