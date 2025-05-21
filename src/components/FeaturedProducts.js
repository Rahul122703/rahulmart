import { useProductContext } from "../context/product_context.js";
import SkeletonLoader from "./loader/FeaturedProductSkeletonLoader.js";
import SmallCard from "./ProductCard.js";

const FeaturedProducts = () => {
  const { productLoading, productError, featuredProducts } =
    useProductContext();

  return (
    <div className="border border-none bg-[#FAF9F6]">
      <div className="w-full max-w-[1280px] mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Products
        </h2>

        {productLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : productError ? (
          <div className="flex flex-col items-center justify-center w-full py-16">
            <h3 className="text-2xl font-semibold text-red-500 mb-4 text-center">
              Oops! Something went wrong.
            </h3>
            <p className="text-gray-600 text-center">
              We couldn't load the products at the moment. Please try again
              later.
            </p>
          </div>
        ) : (
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <SmallCard key={index} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;


