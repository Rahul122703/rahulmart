import React, { useEffect, useState } from "react";

import InstallPrompt from "./components/installPrompt.js";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Loader from "./components/Loader.js";

import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";
import AboutPage from "./pages/AboutPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import ErrorPage from "./pages/ErrorPage.js";
import RandomPage from "./pages/randompage.js";
import { useProductContext } from "./context/product_context.js";

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
          <Route path="/randompage" element={<RandomPage />} />
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
