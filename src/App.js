import { useEffect, useState } from "react";

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
import ProductsPage from "./pages/ProductsPage.js";
import AboutPage from "./pages/AboutPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import ErrorPage from "./pages/ErrorPage.js";
import CartPage from "./pages/CartPage.js";
import CheckoutPage from "./pages/CheckoutPage.js";

import { useProductContext } from "./context/product_context.js";

import PrivateRoute from "./components/PrivateRoute.js";

// clientID
// Domain dev-1w6wlwy2wjyvspbk.us.auth0.com
const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 0);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 min-h-screen border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-black ">
      <Router>
        <Navbar />
        <CloseNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/product/:productid" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <InstallPrompt />
      </Router>
    </div>
  );
};

const CloseNavbar = () => {
  const { closeNavbar } = useProductContext();
  const location = useLocation();
  useEffect(() => {
    closeNavbar();
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

export default App;
