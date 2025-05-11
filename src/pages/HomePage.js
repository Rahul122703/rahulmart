import Hero from "../components/Hero.js";
import FeaturedProuducts from "../components/FeaturedProuducts.js";
import Footer from "../components/Footer.js";

import InstallPrompt from "../components/installPrompt.js";
import BannerCarousel from "../components/BannerCarousel.js";
import MidSection from "../components/MidSection.js";
import ContactUs from "../components/ContactUs.js";

import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("/api/getproduct");
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div className="shadow flex flex-col">
        <BannerCarousel />
        <Hero />
        <FeaturedProuducts />
        <MidSection />
        <ContactUs />
        <Footer />
      </div>
      <InstallPrompt />
    </>
  );
};

export default HomePage;
