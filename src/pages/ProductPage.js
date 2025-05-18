import React, { useState } from "react";
import Footer from "../components/Footer.js";
import ProductPageSkeleton from "../components/loader/ProductPageSkeleton.js";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(9);

  return (
    <>
      <ProductPageSkeleton />
      <Footer />
    </>
  );
}
