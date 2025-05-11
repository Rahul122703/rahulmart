import React, { useContext, createContext, useReducer } from "react";

import { OPEN_NAVBAR, CLOSE_NAVBAR } from "../action.js";
import { product_reducer } from "../reducer/product_reducer.js";

const product_initialState = {
  isNavbarOpen: false,
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, product_initialState);

  const closeNavbar = () => {
    dispatch({ type: CLOSE_NAVBAR });
  };
  const openNavbar = () => {
    dispatch({ type: OPEN_NAVBAR });
  };
  return (
    <ProductContext.Provider value={{ closeNavbar, openNavbar, ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
