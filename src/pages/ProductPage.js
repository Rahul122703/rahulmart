import React, { useEffect } from "react";
import Footer from "../components/Footer.js";
import ProductPageSkeleton from "../components/loader/ProductPageSkeleton.js";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { MdSmsFailed } from "react-icons/md";
import ProductAmount from "../components/ProductAmount.js";
import ProductStar from "../components/ProductStar.js";
import { useProductContext } from "../context/product_context.js";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function ProductPage() {
  const {
    singleproductLoading,
    singleproductError,
    singleproduct,
    fetchSingleProduct,
  } = useProductContext();

  const { productid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(productid);
  }, [productid]);

  if (singleproductError) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <div className="flex-grow flex items-center justify-center text-red-500 text-center p-6">
          <div>
            <MdSmsFailed className="text-[100px] mx-auto mb-4" />
            <p className="text-xl font-semibold dark:text-red-400 text-red-500">
              Unable to fetch products
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
  if (singleproductLoading || !singleproduct?.fields) {
    // if (true) {
    return (
      <>
        <ProductPageSkeleton />
        <Footer />
      </>
    );
  }

  const {
    product,
    category,
    description,
    shipping,
    rating,
    stock,
    company,
    colors,
    price,
    image,
  } = singleproduct.fields;

  const imageUrl = image?.[0]?.url || "";

  return (
    <>
      <div className="min-w-full bg-gray-800 dark:bg-gray-900 text-white py-6 px-4 mb-8 flex justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <span className="mx-4 text-white">/</span>
          <Link to="/products" className="text-white">
            Products
          </Link>
          <span className="mx-4 text-white">/</span>
          <span className="text-white">{product}</span>
        </div>
      </div>

      <div className="lg:max-w-[100rem] lg:h-[45rem] mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 mb-4 overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-700 dark:bg-gray-600 hover:bg-black dark:hover:bg-gray-900 text-white rounded-lg shadow flex items-center gap-2 transition">
          <IoMdArrowRoundBack />
        </button>

        <div className="flex flex-col-reverse lg:flex-row gap-10 h-full">
          <div className="w-full lg:w-1/2 px-2 lg:px-6 space-y-5">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center lg:text-left">
              {product}
            </h2>

            <ProductStar rating={rating} />

            <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
              {price}₹
            </p>

            <p className="text-gray-600 dark:text-gray-400">{description}</p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {stock ? (
                  <span className="text-green-600 dark:text-green-400">
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-600 dark:text-red-400">
                    Not Available
                  </span>
                )}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Shipping:</span>
                {shipping === "true" ? (
                  <MdEventAvailable className="text-green-500 dark:text-green-400" />
                ) : (
                  <CgUnavailable className="text-red-500 dark:text-red-400" />
                )}
              </p>
              <p>
                <span className="font-semibold">Company:</span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {company}
                </span>
              </p>
            </div>

            <div className="flex items-center flex-wrap">
              <span className="font-semibold mr-2 text-gray-900 dark:text-white">
                Colors:
              </span>
              {colors?.map((color, i) => (
                <span
                  key={i}
                  className="w-5 h-5 rounded-md ring-white mr-2"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <ProductAmount stock={stock} />

            <button
              aria-label="Add to cart"
              className="mt-4 px-8 py-3 bg-gray-700 dark:bg-gray-600 hover:bg-black dark:hover:bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-md transition">
              ADD TO CART
            </button>
          </div>

          <div className="w-full lg:w-1/2 max-h-[80%] border border-none">
            <img
              src={imageUrl}
              alt={product}
              className="h-full w-full object-cover rounded-2xl shadow-xl  border border-red"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
