import { useProductContext } from "../context/product_context.js";
import { useFilterContext } from "../context/filter_context.js";

import SmallCard from "../components/ProductCard2.js";
import ProductCardDesc from "../components/ProductCardDesc.js";
import ProductHeader from "../components/ProductHeader.js";
import Filters from "../components/FilterSideBar.js";
import ProductCard2Skeleton from "../components/loader/ProductCard2Skeleton.js";

import SkeletonProductCardDesc from "../components/loader/SkeletonProductCardDesc .js";

import { Link } from "react-router-dom";
import { useState } from "react";

import { RETRY, PRODUCT_LOADING } from "../action.js";
import toast from "react-hot-toast";

export default function ProductsContainer() {
  const {
    productLoading,
    productError,
    productCardChange,
    fetchProductData,
    dispatch,
  } = useProductContext();

  // const { productCardChange, fetchProductData, dispatch } = useProductContext();
  // const productLoading = true;
  // const productError = false;

  const { filteredProducts } = useFilterContext();

  const [filter, showFilter] = useState(false);

  const retry = () => {
    dispatch({ type: RETRY });
    dispatch({ type: PRODUCT_LOADING });
    const callFunction = fetchProductData();
    toast.promise(callFunction, {
      loading: "Fetching all the product",
      error: "Check Your internet connection",
      success: "Good to go!",
    });
  };

  return (
    <div className="flex flex-col m-0 p-0 bg-white dark:bg-gray-900">
      <div className="w-full bg-gray-800 dark:bg-gray-900 text-white dark:text-white py-6 px-4 mb-8 justify-center ">
        <div className="text-3xl font-semibold text-center">
          <Link to="/" className="dark:text-white text-white">
            Home
          </Link>
          <span className="mx-4 dark:text-white text-white">/</span>
          <span className="dark:text-white text-white">Products</span>
        </div>
      </div>

      {filter && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => showFilter(false)}
        />
      )}

      <div className="m-auto max-w-[1500px] px-4 relative flex flex-col border border-none">
        <div className="gap-6 flex flex-col md:flex-row relative">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`z-[50] rounded-md
    w-64 fixed top-[1rem] transform duration-300 md:hidden max-h-[95vh] overflow-auto
    ${filter ? "translate-x-[-05%]" : "-translate-x-[110%]"}
  `}>
            <Filters />
          </div>
          <div
            className={`w-[270px] md:sticky md:top-[5rem] h-fit fixed z-[5] overflow-auto md:transform-none hidden md:block  text-black dark:text-white`}>
            <Filters />
          </div>
          <div className="flex-1 rounded-lg  top-[10rem] md:static bg-white dark:bg-gray-900 border border-none ">
            <div className="border sticky top-[62px] z-10 p-2 dark:bg-gray-900 bg-white  lg:static flex flex-row justify-center items-center  rounded-xl mb-4">
              <ProductHeader
                totalProducts={filteredProducts.length}
                className="dark:text-white text-gray-900 min-w-full"
              />
            </div>

            {!filter && (
              <button
                onClick={() => showFilter((prev) => !prev)}
                className="border  dark:border-gray-200 fixed z-50 px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white dark:text-white text-xl font-bold flex justify-center items-center rounded-xl bottom-6 left-4 md:hidden">
                Filters
              </button>
            )}

            <div
              className={` w-[90vw] md:w-[55vw] border border-none bg-white dark:bg-gray-900 min-h-[80vh] xl:min-h-[100vh] md:min-h-[80vh] lg:min-h-[80vh]
    ${
      productCardChange
        ? "grid grid-cols-1 place-items-center"
        : "flex flex-wrap justify-center items-center rounded-lg p-4 dark:border dark:border-white"
    }`}>
              {productLoading ? (
                [...Array(8)].map((_, index) =>
                  productCardChange ? (
                    <SkeletonProductCardDesc key={index} />
                  ) : (
                    <ProductCard2Skeleton key={index} />
                  )
                )
              ) : productError ? (
                <div className="flex flex-col items-center mt-10">
                  <p className="text-center text-red-500 dark:text-red-400 mb-4">
                    Error loading products.
                  </p>
                  <button
                    onClick={retry}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
                    aria-label="Retry loading products">
                    Retry
                  </button>
                </div>
              ) : filteredProducts.length ? (
                filteredProducts.map((product) =>
                  productCardChange ? (
                    <ProductCardDesc {...product} key={product.id} />
                  ) : (
                    <SmallCard {...product} key={product.id} />
                  )
                )
              ) : (
                <p className="text-center text-red-500 dark:text-red-400 mb-4">
                  No products found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
