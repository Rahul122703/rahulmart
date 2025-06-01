import Hero from "../components/Hero.js";
import FeaturedProducts from "../components/FeaturedProducts.js";
import Footer from "../components/Footer.js";

import InstallPrompt from "../components/installPrompt.js";
import BannerCarousel from "../components/BannerCarousel.js";
import MidSection from "../components/MidSection.js";
import ContactUs from "../components/ContactUs.js";
import { useState } from "react";

const HomePage = () => {
  const [retryCount, setRetryCount] = useState(0);
  return (
    <>
      <div className="shadow flex flex-col bg-white dark:bg-gray-900">
        <BannerCarousel />
        <Hero />
        <FeaturedProducts
          RetryKey={retryCount}
          onRetry={() => {
            setRetryCount((prev) => prev + 1);
          }}
        />
        <MidSection />
        <ContactUs />
        <Footer />
      </div>
      <InstallPrompt />
    </>
  );
};

export default HomePage;
