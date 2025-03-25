import React, { useEffect, useState } from "react";

import InstallPrompt from "./components/installPrompt";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import { useProductContext } from "./context/product_context";

const App = () => {
  const [loading, setLoading] = useState(true);
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
        <Navbar />
        <CloseNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <InstallPrompt />
      </Router>
    </>
  );
};

const CloseNavbar = () => {
  const { closeNavbar } = useProductContext();
  const location = useLocation();
  useEffect(() => {
    closeNavbar();
  }, [location.pathname]);
  return null;
};

export default App;
