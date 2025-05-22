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
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center text-red-500 text-center p-6">
          <div>
            <MdSmsFailed className="text-[100px] mx-auto mb-4" />
            <p className="text-xl font-semibold">Unable to fetch products</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
  if (singleproductLoading || !singleproduct?.fields) {
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
      <div className="min-w-full bg-gray-800 text-white py-6 px-4 mb-8 justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>
            <Link to="/products">Products</Link>
          </span>
          <span className="mx-4">/</span>
          <span>{product}</span>
        </div>
      </div>
      <div className="max-w-[100rem] mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
        <button
          className="mb-6 px-4 py-2 bg-gray-700 hover:bg-black text-white rounded-lg shadow flex items-center gap-2"
          onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
        </button>

        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-fsull lg:w-1/2 px-2 lg:px-6 space-y-5 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800">{product}</h2>

            <ProductStar rating={rating} />

            <p className="text-3xl font-bold text-gray-700">{price}₹</p>

            <p className="text-gray-600">{description}</p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 text-gray-700 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {stock ? "In Stock" : "Not Available"}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Shipping:</span>
                {shipping === "true" ? (
                  <MdEventAvailable className="text-green-500" />
                ) : (
                  <CgUnavailable className="text-red-500" />
                )}
              </p>
              <p>
                <span className="font-semibold">Company:</span> {company}
              </p>
            </div>

            <div className="border border-none flex flex-row flex-wrap items-center  max-w-[10rem]">
              <span className="font-semibold mr-2">Colors:</span>
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-block w-5 h-5 rounded-md ring-white mr-2 items-center justify-center justify-self-center"
                  style={{ backgroundColor: color }}></span>
              ))}
            </div>

            <ProductAmount stock={stock} />

            <button className="mt-4 px-8 py-3 bg-gray-700 hover:bg-black text-white text-lg font-semibold rounded-xl shadow-md transition">
              ADD TO CART
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={imageUrl}
              alt={product}
              className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
