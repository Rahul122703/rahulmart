import { FaAcquisitionsIncorporated } from "react-icons/fa";
import {
  LOAD_PRODUCTS,
  UPADTE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action.js";

export const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const newFilterData = action.payload.reduce(
      function (acc, curr) {
        if (!acc.categories.includes(curr.category)) {
          acc.categories.push(curr.category);
        }

        if (!acc.companies.includes(curr.company)) {
          acc.companies.push(curr.company);
        }

        curr.colors.forEach((currentColor) => {
          if (!acc.colors.includes(currentColor)) {
            acc.colors.push(currentColor);
          }
        });

        if (curr.price > acc.max_price) {
          acc.max_price = curr.price;
        }

        return acc;
      },
      {
        categories: ["all"],
        companies: ["all"],
        colors: ["all"],
        max_price: 0,
      }
    );

    return {
      ...state,
      all_products: action.payload,
      filteredProducts: action.payload,
      filter_data: newFilterData,
      filters: { ...state.filters, price: newFilterData.max_price },
    };
  }
  if (action.type === UPADTE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: `${value}` } };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a-z") {
      tempProducts = tempProducts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (sort === "name-z-a") {
      tempProducts = tempProducts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { category, company, color, free_shipping, price } = state.filters;
    const { all_products } = state;
    let tempSideFilterProducts = [...all_products];

    if (category !== "all") {
      tempSideFilterProducts = tempSideFilterProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempSideFilterProducts = tempSideFilterProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempSideFilterProducts = tempSideFilterProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    tempSideFilterProducts = tempSideFilterProducts.filter(
      (product) => product.price <= price
    );

    if (free_shipping === "true") {
      tempSideFilterProducts = tempSideFilterProducts.filter(
        (product) => product.shipping === "true"
      );
    }

    return { ...state, filteredProducts: tempSideFilterProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      sort: "price-lowest",
      filter_data: {
        ...state.filter_data,
        max_price: action.payload,
      },
      filters: {
        category: "all",
        company: "all",
        color: "all",
        free_shipping: "false",
        price: action.payload,
      },
    };
  } else {
    throw new Error(`No matching ${action.type} in filter_reducer`);
  }
};
