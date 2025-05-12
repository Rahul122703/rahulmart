import Hero from "../components/Hero.js";
import FeaturedProuducts from "../components/FeaturedProuducts.js";
import Footer from "../components/Footer.js";

import InstallPrompt from "../components/installPrompt.js";
import BannerCarousel from "../components/BannerCarousel.js";
import MidSection from "../components/MidSection.js";
import ContactUs from "../components/ContactUs.js";

const HomePage = () => {
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
