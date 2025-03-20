import React from "react";
import SmallCard from "./smallCard";

const FeaturedProducts = () => {
  const products = [
    {
      productName: "Product A",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Spectre/11100/1705661590820/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      price: "$29.99",
    },
    {
      productName: "Product B",
      image:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
      price: "$39.99",
    },
    {
      productName: "Product C",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      price: "$19.99",
    },
    {
      productName: "Product D",
      image:
        "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-properties/Phantom-II-Discover-Hero-Single-Twin-Card.jpg",
      price: "$49.99",
    },
  ];

  return (
    <div className="border border-none bg-[#FAF9F6]">
      <div className="border border-none w-full max-w-[1280px] m-auto p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((product, index) => {
            return <SmallCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
