import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

import { ProductProvider } from "./context/product_context.js";
import { FilterProvider } from "./context/filter_context.js";
import { CartProvider } from "./context/cart_context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </ProductProvider>
);

serviceWorkerRegistration.register();
