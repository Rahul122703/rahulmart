import { useState } from "react";
import { useProductContext } from "../context/product_context.js";
import SmallCard from "../components/ProductCard.js";
import Filters from "../components/FilterSideBar.js";

export default function ProductsContainer() {
  const { productLoading, productError, products } = useProductContext();

  if (productLoading) return <p className="text-center mt-10">Loading...</p>;
  if (productError)
    return (
      <p className="text-center mt-10 text-red-500">Error loading products.</p>
    );

  return (
    <div className="mx-auto max-w-[1600px] px-4 relative border border-black">
      <Filters />

      <div className="grid p-4 grid-cols-1 sm:grid-cols-2 cardView:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center border border-black">
        {products.map((product) => (
          <div key={product.id} className="border border-black">
            <SmallCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
