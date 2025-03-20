import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProuducts from "../components/FeaturedProuducts";

import InstallPrompt from "../components/installPrompt";

const Homepage = () => {
  return (
    <div className="shadow flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProuducts />
      <InstallPrompt />
    </div>
  );
};

export default Homepage;
