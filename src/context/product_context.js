import React, { useContext, createContext, useReducer, useEffect } from "react";

import {
  OPEN_NAVBAR,
  CLOSE_NAVBAR,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_SUCCESS,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_SUCCESS,
} from "../action.js";

import { product_reducer } from "../reducer/product_reducer.js";
import axios from "axios";

import { ALL_PRODUCTS, SINGLE_PRODUCT } from "../utils/urls.js";

const product_initialState = {
  isNavbarOpen: false,
  productLoading: false,
  productError: false,
  products: null,
  featuredProducts: [],
  singleproductLoading: false,
  singleproductError: false,
  singleproduct: null,
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

  const fetchProductData = async () => {
    try {
      const { data } = await axios.get(ALL_PRODUCTS);
      setTimeout(() => {
        dispatch({ type: PRODUCT_SUCCESS, payload: data });
      }, 2000);
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: SINGLE_PRODUCT_LOADING });
      const { data } = await axios.get(`${SINGLE_PRODUCT}${id}`);
      setTimeout(() => {
        dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
      }, 2000);
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_ERROR });
    }
  };

  // useEffect(() => {
  //   dispatch({ type: SINGLE_PRODUCT_LOADING });
  //   fetchSingleProduct();
  // }, []);

  useEffect(() => {
    dispatch({ type: PRODUCT_LOADING });
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ closeNavbar, openNavbar, fetchSingleProduct, ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
