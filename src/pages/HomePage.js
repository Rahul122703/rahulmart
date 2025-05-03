import Hero from "../components/Hero";
import FeaturedProuducts from "../components/FeaturedProuducts";
import Footer from "../components/Footer";

import InstallPrompt from "../components/installPrompt";
import BannerCarousel from "../components/BannerCarousel";
import MidSection from "../components/MidSection";
import ContactUs from "../components/ContactUs";
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
