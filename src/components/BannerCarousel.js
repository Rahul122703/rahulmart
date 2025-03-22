import React, { useEffect, useRef, useState } from "react";
import banner1 from "../assets/carousel/banner1.jpg";
import banner2 from "../assets/carousel/banner2.jpg";
import banner3 from "../assets/carousel/banner3.jpg";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const imageData = [banner1, banner2, banner3];

const BannerCarousel = () => {
  const scrollDiv = useRef(null);
  const [index, setIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (scrollDiv.current) {
      const firstImage = scrollDiv.current.querySelector("img");
      if (firstImage) {
        setImageWidth(firstImage.getBoundingClientRect().width);
      }
    }
  }, []);

  useEffect(() => {
    if (scrollDiv.current && imageWidth > 0) {
      scrollDiv.current.scrollTo({
        left: index * imageWidth,
        behavior: "smooth",
      });
    }

    const interval = setTimeout(() => {
      setIndex((prev) => (prev + 1) % imageData.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [index, imageWidth]);

  const leftScroll = () => {
    setIndex((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  const rightScroll = () => {
    setIndex((prev) => (prev + 1) % imageData.length);
  };

  return (
    <>
      <style>
        {`
        .carousel-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .carousel-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
       `}
      </style>

      <div className="relative w-full overflow-hidden mb-6">
        <button
          onClick={leftScroll}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition duration-300">
          <FaAnglesLeft />
        </button>

        <div
          className="flex w-full overflow-x-auto carousel-no-scrollbar"
          ref={scrollDiv}>
          {imageData.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`banner-${idx}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        <button
          onClick={rightScroll}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition duration-300">
          <FaAnglesRight />
        </button>
      </div>
    </>
  );
};

export default BannerCarousel;
