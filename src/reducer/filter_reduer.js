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
    return { ...state };
  }
  if (action.type === UPADTE_SORT) {
    return { ...state };
  }
  if (action.type === SORT_PRODUCTS) {
    return { ...state };
  }
  if (action.type === UPDATE_FILTERS) {
    return { ...state };
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
