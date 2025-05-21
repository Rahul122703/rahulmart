import { useState } from "react";
import { useProductContext } from "../context/product_context.js";
import SmallCard from "../components/ProductCard2.js";
import ProductHeader from "../components/ProductHeader.js";
import Filters from "../components/FilterSideBar.js";

import { Link } from "react-router-dom";

export default function ProductsContainer() {
  const { productLoading, productError, products } = useProductContext();

  if (productLoading) return <p className="text-center mt-10">Loading...</p>;
  if (productError)
    return (
      <p className="text-center mt-10 text-red-500">Error loading products.</p>
    );

  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-800 text-white py-6 px-4 mb-8 justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>Products</span>
        </div>
      </div>
      <div className="m-auto max-w-[1600px] px-4 relative flex flex-col">
        <div className="flex gap-6">
          <div className="w-full max-w-[250px] sticky top-[6.25rem] h-fit">
            <Filters />
          </div>

          <div className="flex-1 border rounded-lg">
            <ProductHeader />
            <div className="flex flex-row flex-wrap justify-between rounded-lg">
              {products.map((product) => (
                <div key={product.id}>
                  <SmallCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
