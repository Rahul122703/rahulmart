import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { NavbarProvider } from "./context/navbar_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavbarProvider>
    <App />
  </NavbarProvider>
);

serviceWorkerRegistration.register();
