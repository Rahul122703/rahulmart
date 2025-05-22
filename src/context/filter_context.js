import react, { useContext, createContext } from "react";

import {
  LOAD_PRODUCTS,
  UPADTE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action.js";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  return <filterContext.Provider value={{}}>{children}</filterContext.Provider>;
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