import { useProductContext } from "../context/product_context.js";
import SkeletonLoader from "./loader/FeaturedProductSkeletonLoader.js";
import SmallCard from "./ProductCard.js";

const FeaturedProducts = () => {
  const { productLoading, productError, featuredProducts } =
    useProductContext();
  console.log(`productloading ${productLoading} 
    productError${productError} `);
  console.log(featuredProducts);
  return (
    <div className="border border-none bg-gray-200 dark:bg-gray-900">
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
              We couldn't load the products at the moment. Please try again
              later.
            </p>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-between border border-none">
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
