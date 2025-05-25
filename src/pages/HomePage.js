import Hero from "../components/Hero.js";
import FeaturedProducts from "../components/FeaturedProducts.js";
import Footer from "../components/Footer.js";

import InstallPrompt from "../components/installPrompt.js";
import BannerCarousel from "../components/BannerCarousel.js";
import MidSection from "../components/MidSection.js";
import ContactUs from "../components/ContactUs.js";

const HomePage = () => {
  return (
    <>
      <div className="shadow flex flex-col dark:bg-gray-900">
        <BannerCarousel />
        <Hero />
        <FeaturedProducts />
        <MidSection />
        <ContactUs />
        <Footer />
      </div>
      <InstallPrompt />
    </>
  );
};

export default HomePage;
