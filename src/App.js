import React from "react";

import InstallPrompt from "./components/installPrompt";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] border border-none">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <InstallPrompt />
    </>
  );
};

export default App;
