import React, { useState, useEffect } from "react";
const Carousel = ({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 6000,
}) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden w-full h-full rounded-3xl mt-[1rem] md:mt-0 z-1 bg-white dark:bg-gray-900">
      <style>
        {`
          @keyframes infiniteSlide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-slide {
            animation: infiniteSlide 20s linear infinite;
          }
        `}
      </style>

      <div
        className={`flex transition-transform ease-out duration-[4s] rounded-full`}
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 rounded-3xl md:border border-none dark:border-gray-700">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
