import { useProductContext } from "../context/product_context.js";
import SmallCard from "../components/ProductCard2.js";
import ProductCardDesc from "../components/ProductCardDesc.js";
import ProductHeader from "../components/ProductHeader.js";
import Filters from "../components/FilterSideBar.js";
import ProductCard2Skeleton from "../components/loader/ProductCard2Skeleton.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductsContainer() {
  const { productLoading, productError, products, productCardChange } =
    useProductContext();

  const [filter, showFilter] = useState(false);

  return (
    <div className="flex flex-col m-0 p-0">
      <div className="w-[100vw] bg-gray-800 text-white py-6 px-4 mb-8 justify-center ">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>Products</span>
        </div>
      </div>

      {filter && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => showFilter(false)}
        />
      )}

      <div className="m-auto max-w-[1700px] px-4 relative flex flex-col border border-none">
        <div className="gap-6 flex flex-col md:flex-row relative">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`z-50
    w-64 fixed top-[5rem] transform duration-300 md:hidden
    ${filter ? "-translate-x-4" : "-translate-x-full"}
  `}>
            <Filters />
          </div>
          <div
            className={`w-full max-w-[250px] md:sticky md:top-[5rem] h-fit border border-none fixed z-[50] overflow-auto md:transform-none hidden md:block`}>
            <Filters />
          </div>
          <div className="flex-1 rounded-lg border border-none  top-[10rem] md:static ">
            <div className="sticky top-[4rem] z-10 p-2 bg-base-100 border-b border-base-300 md:static">
              <ProductHeader totalProducts={products.length} />
            </div>

            {!filter && (
              <button
                onClick={() => showFilter((prev) => !prev)}
                className="border border-black fixed z-50 px-4 py-2 bg-gray-700 text-white text-xl font-bold flex justify-center items-center rounded-xl bottom-6 left-4 md:hidden">
                Filters
              </button>
            )}

            <div
              className={
                productCardChange
                  ? `grid grid-cols-1 place-items-center`
                  : `flex flex-wrap justify-center items-center rounded-lg p-4`
              }>
              {productLoading ? (
                [...Array(8)].map((_, index) => (
                  <ProductCard2Skeleton key={index} />
                ))
              ) : productError ? (
                <p className="text-center mt-10 text-red-500">
                  Error loading products.
                </p>
              ) : (
                products.map((product) =>
                  productCardChange ? (
                    <ProductCardDesc {...product} key={product.id} />
                  ) : (
                    <SmallCard {...product} key={product.id} />
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
