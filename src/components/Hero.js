import Carousel from "./Carousel.js";
import { Link } from "react-router-dom";

const imageData = [
  "https://videos.pexels.com/video-files/5585939/5585939-sd_960_540_25fps.mp4",
  "https://videos.pexels.com/video-files/7821646/7821646-hd_1280_720_30fps.mp4",
  "https://videos.pexels.com/video-files/5077084/5077084-hd_1366_720_25fps.mp4",
];

const Hero = () => {
  return (
    <div className="border border-gray-300 dark:border-white rounded-2xl flex flex-col md:flex-row mt-1 md:mt-0 p-4 md:p-0 z-10 relative max-w-[1290px] mx-auto mb-4">
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
        }
        `}
      </style>

      <div className="min-w-[60%] p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center bg-white dark:bg-gray-900 overflow-hidden relative">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 uppercase">
            rahul mart
          </h1>
          <p className="text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Your one-stop shop for all your urban lifestyle needs. Explore our
            wide range of products tailored just for you.
          </p>

          <Link
            to="/products"
            className="border-2 border-gray-700  mt-4 max-w-[100px] max-h-[50px] px-6 py-3 text-base rounded-lg transition duration-200
    bg-primary text-primary-content hover:bg-primary-focus focus:ring-2 focus:ring-primary  hover:bg-gray-700 hover:text-white
    dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-600">
            Shop Now
          </Link>
        </div>
      </div>

      <Carousel autoSlide={true}>
        {imageData.map((source, index) => (
          <div
            key={index}
            className="w-full h-full phone-height-carousel flex-shrink-0 flex items-center justify-center z-10">
            <video
              className="object-cover h-[38rem] w-full rounded-3xl z-10"
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
