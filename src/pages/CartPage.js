import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
const initialItems = [
  {
    id: 1,
    name: "Armchair",
    price: 125.99,
    quantity: 3,
    color: "#000000",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    name: "Modern Bookshelf",
    price: 319.99,
    quantity: 9,
    color: "#facc15",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=60",
  },
];

const CartPage = () => {
  const [items, setItems] = useState(initialItems);

  const increment = (id) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );

  const decrement = (id) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id && it.quantity > 1
          ? { ...it, quantity: it.quantity - 1 }
          : it
      )
    );

  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const shipping = 5.34;
  const total = subtotal + shipping;

  const actionBtn =
    "px-8 py-3 bg-gray-700 dark:bg-gray-600 hover:bg-black dark:hover:bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-md transition text-center";

  return (
    <>
      <div className="min-w-full bg-gray-800 dark:bg-gray-900 text-white py-6 px-4 mb-8 flex justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <span className="mx-4 text-white">/</span>
          <span className="text-white">Cart</span>
        </div>
      </div>

      <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white min-h-screen py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <aside className="lg:col-span-1 order-1 lg:order-none sticky top-24 self-start text-gray-700 dark:text-white">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 space-y-6">
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <hr className="border-gray-300 dark:border-gray-600" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <button className={actionBtn}>CHECKOUT NOW</button>
                <Link
                  to="/products"
                  className={`${actionBtn} !bg-transparent !text-gray-700 dark:!text-white !border-2 !border-gray-700 dark:!border-gray-300`}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow p-2 flex flex-row justify-between text-gray-700 dark:text-white">
                <div className="sm:col-span-6 flex items-center gap-4 border border-none">
                  <div className="border border-none h-full w-[45%]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full shrink-0 object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-1">
                      Color:
                      <span
                        className="inline-block w-4 h-4 rounded-full border"
                        style={{ backgroundColor: item.color }}></span>
                    </p>
                    <p className="sm:col-span-2 font-medium ">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="border border-none flex flex-row justify-between">
                  <div className="border border-none flex flex-col justify-center items-center lg:flex-row mr-4">
                    <button
                      aria-label="decrease quantity"
                      onClick={() => decrement(item.id)}
                      className="w-10 h-10 rounded-full  bg-white dark:bg-gray-800 text-3xl leading-none flex items-center justify-center">
                      <CiSquareMinus />
                    </button>
                    <span className="w-6 text-center font-semibold select-none">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="increase quantity"
                      onClick={() => increment(item.id)}
                      className="w-10 h-10 rounded-full  bg-white dark:bg-gray-800 text-3xl leading-none flex items-center justify-center">
                      <CiSquarePlus />
                    </button>
                  </div>
                  <div className="sm:col-span-1 flex justify-end">
                    <button
                      aria-label="remove item"
                      onClick={() => remove(item.id)}
                      className="text-red-600 hover:text-red-700 text-3xl">
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-300 py-20">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
