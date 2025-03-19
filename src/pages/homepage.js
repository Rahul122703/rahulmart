import React, { useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
const Homepage = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] border border-none">
        <Loader />
      </div>
    );
  }

  return (
    <div className="border border-black flex flex-row">
      <Navbar />
    </div>
  );
};

export default Homepage;
