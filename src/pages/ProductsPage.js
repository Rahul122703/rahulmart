import { useState } from "react";
import { useProductContext } from "../context/product_context.js";
import SmallCard from "../components/ProductCard.js";
import Filters from "../components/FilterSideBar.js";

export default function ProductsContainer() {
  const { productLoading, productError, products } = useProductContext();
  const [showFilters, setShowFilters] = useState(false);

  if (productLoading) return <p className="text-center mt-10">Loading...</p>;
  if (productError)
    return (
      <p className="text-center mt-10 text-red-500">Error loading products.</p>
    );

  return (
    <div className="mx-auto max-w-7xl px-4 relative">
      {/* Filter Sidebar */}
      <div
        className={`fixed z-30 top-0 left-0 h-full bg-white shadow-md p-4
            transform transition-transform duration-300 ease-in-out
            ${showFilters ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 `}
        // fixed width
      >
        <div className="border-b flex justify-between items-center lg:hidden mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            className="text-red-600 font-semibold"
            onClick={() => setShowFilters(false)}>
            ✕
          </button>
        </div>
        <Filters />
      </div>

      {/* Products Grid */}
      <div
        className="flex-1 p-4 ml-0 lg:ml-[200px]" // add margin left to avoid overlap with fixed sidebar
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <SmallCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Show Filters Button (Mobile Only) */}
      {!showFilters && (
        <button
          onClick={() => setShowFilters(true)}
          className="fixed bottom-4 right-4 z-20 p-3 bg-blue-600 text-white rounded-full shadow-md lg:hidden"
          aria-label="Show Filters">
          Show Filters
        </button>
      )}

      {/* Close Filters Button (Mobile Only) */}
      {showFilters && (
        <button
          onClick={() => setShowFilters(false)}
          className="fixed bottom-4 right-4 z-20 p-3 bg-red-600 text-white rounded-full shadow-md lg:hidden"
          aria-label="Close Filters">
          ✕
        </button>
      )}
    </div>
  );
}
