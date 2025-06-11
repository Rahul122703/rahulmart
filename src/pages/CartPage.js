import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useCartContext } from "../context/cart_context.js";

import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, manageAmount, removeFromCart } = useCartContext();

  const shipping = 0;

  const actionBtn =
    "px-8 py-3 bg-gray-700 dark:bg-gray-600 hover:bg-black dark:hover:bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-md transition text-center";
  const navigate = useNavigate();
  const handleClick = (id, productname) => {
    const product = { productName: productname };
    navigate(`/product/${id}`, { state: product }, { replace: true });
  };

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
                <span className="font-medium">00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <hr className="border-gray-300 dark:border-gray-600" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>00</span>
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
            {cart.map((currentItem) => {
              const {
                id,
                product,
                price,
                colors,
                url,
                subAmount: subAmount,
              } = currentItem;
              return (
                <div
                  key={id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow p-2 flex flex-row justify-between text-gray-700 dark:text-white h-[8rem]">
                  <div className="sm:col-span-6 flex items-center gap-4 border border-none">
                    <div
                      className="cursor-pointer border border-none h-full max-w-[7rem] rounded-xl  overflow-hidden"
                      onClick={() => handleClick(id, product)}>
                      <img
                        src={url}
                        alt={product}
                        className="h-full w-full shrink-0 object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-lg">{product}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-1">
                        Color:
                        <span
                          className="inline-block w-4 h-4 rounded-full border"
                          style={{ backgroundColor: colors[0] }}></span>
                      </p>
                      <p className="sm:col-span-2 font-medium ">
                        {price.toFixed(2)} ₹
                      </p>
                    </div>
                  </div>

                  <div className="border border-none flex flex-row justify-between">
                    <div className="border border-none flex flex-col justify-center items-center lg:flex-row mr-4">
                      <button
                        name="decrease"
                        onClick={(e) => manageAmount(e, id)}
                        aria-label="decrease quantity"
                        className="w-10 h-10 rounded-full  bg-white dark:bg-gray-800 text-3xl leading-none flex items-center justify-center">
                        <CiSquareMinus />
                      </button>
                      <span className="w-6 text-center font-semibold select-none">
                        {subAmount}
                      </span>
                      <button
                        name="increase"
                        onClick={(e) => manageAmount(e, id)}
                        aria-label="increase quantity"
                        className="w-10 h-10 rounded-full  bg-white dark:bg-gray-800 text-3xl leading-none flex items-center justify-center">
                        <CiSquarePlus />
                      </button>
                    </div>
                    <div className="sm:col-span-1 flex justify-end">
                      <button
                        onClick={() => {
                          toast.error("Removed from Cart", { duration: 1000 });
                          removeFromCart(id);
                        }}
                        aria-label="remove item"
                        className="text-red-600 hover:text-red-700 text-3xl">
                        <MdDeleteForever /> {/*//here */}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
