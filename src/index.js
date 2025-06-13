import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

import { Toaster } from "react-hot-toast";

import { ProductProvider } from "./context/product_context.js";
import { FilterProvider } from "./context/filter_context.js";
import { CartProvider } from "./context/cart_context.js";
import { UserProvider } from "./context/user_context.js";
import { Auth0Provider } from "@auth0/auth0-react";

import { AUTH_CLIENTID, AUTH_SECRETKEY } from "./utils/urls.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    clientId={AUTH_CLIENTID}
    domain={AUTH_SECRETKEY}
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
        <Toaster position="top-center" />
      </ProductProvider>
    </UserProvider>
  </Auth0Provider>
);

serviceWorkerRegistration.register();
