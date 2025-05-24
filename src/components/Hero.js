import Carousel from "./Carousel.js";

import { Link } from "react-router-dom";

const imageData = [
  "https://videos.pexels.com/video-files/5585939/5585939-sd_960_540_25fps.mp4",
  "https://videos.pexels.com/video-files/7821646/7821646-hd_1280_720_30fps.mp4",
  "https://videos.pexels.com/video-files/5077084/5077084-hd_1366_720_25fps.mp4",
];

const Hero = () => {
  return (
    <div className="border dark:border-white rounded-2xl flex flex-col md:mt-unset lex-col md:flex md:flex-row mt-1 md:mt-unset p-4 md:p-unset z-1 relative max-w-[1290px] m-auto mb-4">
      <style>
        {`@media (max-width: 768px) {
        .phone-height-carousel {
            height: 400px;
            margin-top: 1rem;
        }
        }

        .bg-blur {
        background-image: url("../../assets/hero-left.jpg");
        filter: blur(2px);
        /* z-index: -1; */
        `}
      </style>
      <div className="min-w-[60%] p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center bg-base-100 overflow-hidden relative">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-base-content tracking-tight mb-4 uppercase">
            rahul mart
          </h1>
          <p className="text-lg lg:text-xl font-medium text-base-content/70 mb-6">
            Your one-stop shop for all your urban lifestyle needs. Explore our
            wide range of products tailored just for you.
          </p>

          <Link
            to="/products"
            className="cursor-pointer bg-primary text-primary-content px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary-focus focus:ring-4 focus:ring-primary-content/40 transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>

      <Carousel autoSlide={true}>
        {imageData.map((source, index) => (
          <div
            key={index}
            className="w-full h-full phone-height-carousel flex-shrink-0 flex items-center justify-center z-1">
            <video
              className="object-cover h-[38rem] w-full rounded-3xl z-1"
              autoPlay
              muted
              loop>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
