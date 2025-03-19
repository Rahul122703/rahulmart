import Navbar from "../components/Navbar";
import InstallPrompt from "../components/installPrompt";
const Homepage = () => {
  return (
    <div className="shadow flex flex-row">
      <Navbar />
      <InstallPrompt />
    </div>
  );
};

export default Homepage;
