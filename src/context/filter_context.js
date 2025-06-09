import react, { useContext, createContext, useEffect, useReducer } from "react";

import {
  LOAD_PRODUCTS,
  UPADTE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action.js";
import { useProductContext } from "./product_context.js";

import { filter_reducer } from "../reducer/filter_reducer.js";

const sort_initialstate = {
  all_products: [],
  filteredProducts: [],
  sort: "price-lowest",
  filter_data: {
    categories: [],
    companies: [],
    colors: [],
    min_price: 0,
    max_price: 0,
  },
  filters: {
    category: "all",
    company: "all",
    color: "all",
    free_shipping: "false",
    price: 0,
  },
};

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filter_reducer, sort_initialstate);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: UPADTE_SORT, payload: value });
  };

  const filterProduct = (e) => {
    console.clear();
    let value = e.target.value;
    const name = e.target.name;
    if (name === "free_shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { value, name } });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS, payload: state.filter_data.max_price });
  };

  return (
    <filterContext.Provider
      value={{ ...state, dispatch, sortProducts, filterProduct, clearFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
