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
    setIndex((prev) => (prev - 1) % imageData.length);
  };

  const rightScroll = () => {
    setIndex((prev) => (prev + 1) % imageData.length);
  };

  return (
    <div className="w-full relative border border-none mb-4 overflow-hidden ">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
        onClick={leftScroll}>
        <FaAnglesLeft />
      </button>

      <div
        className="flex overflow-x-auto scrollbar-hide w-full"
        ref={scrollDiv}>
        {imageData.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`banner-${idx}`}
            className="w-full object-fill flex-shrink-0"
          />
        ))}
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
        onClick={rightScroll}>
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default BannerCarousel;
