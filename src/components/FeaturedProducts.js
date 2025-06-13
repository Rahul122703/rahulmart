import { useEffect } from "react";
import { useProductContext } from "../context/product_context.js";
import SkeletonLoader from "./loader/FeaturedProductSkeletonLoader.js";
import SmallCard from "./ProductCard.js";
import { MdOutlineReadMore } from "react-icons/md";

import { Link } from "react-router-dom";

import { RETRY, PRODUCT_LOADING } from "../action.js";

const FeaturedProducts = () => {
  const {
    productLoading,
    productError,
    featuredProducts,
    fetchProductData,
    dispatch,
  } = useProductContext();

  const retry = () => {
    dispatch({ type: RETRY });
    dispatch({ type: PRODUCT_LOADING });
    fetchProductData();
  };
  return (
    <div className="border border-none bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px] mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-100">
          Featured Products
        </h2>

        {productLoading ? (
          <div className="flex flex-col flex-wrap justify-center border border-none md:flex-row md:justify-between md:items-center">
            {[...Array(4)].map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : productError ? (
          <div className="flex flex-col items-center justify-center w-full py-16">
            <h3 className="text-2xl font-semibold text-error mb-4 text-center dark:text-red-400">
              Oops! Something went wrong.
            </h3>
            <p className="text-base-content/70 text-center dark:text-gray-400">
              We couldn't load the products at the moment.
            </p>
            <button
              onClick={retry}
              className="border px-2 py-1 rounded-lg bg-gray-700 text-white text-lg shadow-sm hover:shadow-lg mt-4">
              RETRY
            </button>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-between border border-none">
            {featuredProducts.map((product, index) => (
              <SmallCard key={index} {...product} />
            ))}
          </div>
        )}
      </div>
      <Link
        to="/products"
        className="border-2 border-gray-700  my-3 px-6 py-3 rounded-lg transition duration-200
          bg-primary text-primary-content hover:bg-primary-focus focus:ring-2 focus:ring-primary  hover:bg-gray-700 hover:text-white
          dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-600 flex flex-row items-center">
        View More <MdOutlineReadMore className="ml-1 h-5 w-5" />
      </Link>
    </div>
  );
};

export default FeaturedProducts;
