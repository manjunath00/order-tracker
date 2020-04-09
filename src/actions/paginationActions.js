import {NEXT_PAGE} from "./types";
import {PREV_PAGE} from "./types";
import {SET_ITEMS_PER_PAGE} from "./types"; 

export const nextPage = (value, totalPages) => {
  if (value < totalPages) {
    value++;
  }
  return {
    type: NEXT_PAGE,
    payload: value,
  };
};

export const prevPage = (value) => {
  if (value > 1) {
    value--;
  }
  return {
    type: PREV_PAGE,
    payload: value,
  };
};

export const setItemsPerPage = (value) => {
  return {
    type: SET_ITEMS_PER_PAGE,
    payload: value,
  };
};