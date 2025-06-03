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
    return {
      ...state,
      all_products: action.payload,
      filteredProducts: action.payload,
    };
  }
  if (action.type === UPADTE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    return { ...state };
  }
  if (action.type === UPDATE_FILTERS) {
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
    return { ...state };
  }
  if (action.type === CLEAR_FILTERS) {
    return { ...state };
  } else {
    throw new Error(`No matching ${action.type} in filter_reducer`);
  }
};
