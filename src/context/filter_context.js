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
      console.log(value);
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

// {
//     "id": "rec0sKqV6bzMrtkcR",
//     "image": "https://v5.airtableusercontent.com/v3/u/41/41/1747951200000/gJILmg0I6Mt-j27AFDeGjg/DdDxiMBiCadUAoXqedanlmfDET5XnEyyWSaellYVfb3S6tpjnp0gyg5hsfdbza8uLJYSYv15E_I0oyPfiwK07KeDiAuAZBiO34XedokT8DaodDkCG_7UdLbOcXc0IMQJo1iAUDV1T87BkIGq_S1c4YJXUq2AbXO3jn86fbHsKm4/Qva6yN0Rhi8EYnPvT7UXM6A46kyDPkOtbPZFKGG0H1E",
//     "price": 1999,
//     "name": "Hue White LED Bulb",
//     "stock": 4,
//     "rating": 2,
//     "colors": [
//       "blue",
//       "black",
//       "purple",
//       "grey"
//     ],
//     "company": "Philips",
//     "desc": "This is a sports product made by Philips. It comes in blue, black, purple, grey colors and is designed for quality and durability. Suitable for all your daily needs, this product ensures both comfort and performance. A perfect choice for anyone looking for value and functionality.",
//     "category": "Home Improvement",
//     "featured": "false",
//     "shipping": "false"
//   }
