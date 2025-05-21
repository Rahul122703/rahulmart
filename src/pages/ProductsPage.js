import { useProductContext } from "../context/product_context.js";
import SmallCard from "../components/ProductCard2.js";
import ProductCardDesc from "../components/ProductCardDesc.js";
import ProductHeader from "../components/ProductHeader.js";
import Filters from "../components/FilterSideBar.js";
import ProductCard2Skeleton from "../components/loader/ProductCard2Skeleton.js";
import SkeletonProductCardDesc from "../components/loader/SkeletonProductCardDesc .js";
import { Link } from "react-router-dom";

export default function ProductsContainer() {
  const { productLoading, productError, products, productCardChange } =
    useProductContext();
  // const { productCardChange } = useProductContext();
  // const productLoading = true;
  // const productError = false;
  // const products = [];

  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-800 text-white py-6 px-4 mb-8 justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>Products</span>
        </div>
      </div>

      <div className="m-auto max-w-[1700px] px-4 relative flex flex-col border border-none">
        <div className="gap-6 flex flex-row flex-wrap">
          <div className="w-full max-w-[250px] filterMoile:sticky top-[5rem] h-fit border border-none">
            <Filters />
          </div>

          <div className="flex-1 rounded-lg border border-none">
            <ProductHeader totalProducts={products.length} />

            <div
              className={
                productCardChange
                  ? `grid grid-cols-1 place-items-center`
                  : `flex flex-wrap justify-center items-center rounded-lg border border-none filterMoile:p-4`
              }>
              {productLoading ? (
                [...Array(8)].map((_, index) => (
                  <ProductCard2Skeleton key={index} /> //Add  SkeletonProductCardDesc here
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
