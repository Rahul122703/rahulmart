import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import InstallPrompt from "../components/installPrompt";
const Homepage = () => {
  return (
    <div className="shadow flex flex-col">
      <Navbar />
      <Hero />
      <InstallPrompt />
    </div>
  );
};

export default Homepage;
