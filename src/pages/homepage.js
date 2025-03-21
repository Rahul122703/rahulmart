import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProuducts from "../components/FeaturedProuducts";
import Footer from "../components/Footer";

import InstallPrompt from "../components/installPrompt";
import BannerCarousel from "../components/BannerCarousel";
import MidSection from "../components/MidSection";

const Homepage = () => {
  return (
    <>
      <div className="shadow flex flex-col">
        <Navbar />
        <BannerCarousel />
        <Hero />
        <FeaturedProuducts />
        <MidSection />
        <Footer />
      </div>
      <InstallPrompt />
    </>
  );
};

export default Homepage;
