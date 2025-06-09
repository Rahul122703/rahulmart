import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaLock,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer.js";

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative bg-[#121212] text-gray-200 flex flex-col items-center bottom-0">
        <div className="min-w-full bg-gray-800 text-white py-6 px-4 mb-8 justify-center">
          <div className="text-3xl font-semibold text-center">
            <button
              onClick={() => {
                navigate("/", { replace: true });
              }}>
              Home
            </button>
            <span className="mx-4">/</span>
            <span>About</span>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-20"
          style={{
            backgroundImage: `url('https://source.unsplash.com/1600x900/?store,market')`,
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: "blur(10px)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 py-16 w-full max-w-6xl">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-100"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            About <span className="text-gray-400">RahulMart</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-400 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            An effortless shopping experience, curated with care. We bring
            high-quality products, seamless transactions, and fast delivery —
            all in one place.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
            {[
              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                desc: "Quick and reliable shipping for all orders.",
              },
              {
                icon: <FaLock />,
                title: "Secure Payments",
                desc: "End-to-end encrypted transactions.",
              },
              {
                icon: <FaShoppingCart />,
                title: "Curated Products",
                desc: "Only the best items selected for you.",
              },
              {
                icon: <FaUsers />,
                title: "Community Driven",
                desc: "Trusted by thousands of happy customers.",
              },
            ].map((item, index) => (
              <motion.di
                key={index}
                className="p-6 bg-[#1a1a1a] rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.7 }}>
                <div className="text-3xl text-gray-300 mb-3">{item.icon}</div>
                <h3 className="text-xl font-medium text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.di>
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/products", { replace: true });
            }}>
            <motion.button
              className="mt-12 px-6 py-3 text-lg font-medium text-gray-200 bg-[#1e1e1e] border border-gray-600 rounded-md hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Start Shopping →
            </motion.button>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
