/* eslint-disable */
import {
  DELETE_ORDER,
  SORT_ORDER,
  EDIT_ORDER,
  NEW_ORDER,
} from "../actions/types";

import {data} from "./data";

const initialState = {
  orders: data,
  // orders: [],
};

const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case NEW_ORDER:
      return [...state, action.payload];
      break;
    case EDIT_ORDER:
      const orders = state.map((order) => {
        // look for edited order & send updated order
        if (order.id === action.payload.id) {
          return action.payload;
        } else {
          return order;
        }
      });
      return orders;
      break;
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.payload);
      break;
    case SORT_ORDER:
      const {field, sortType} = action.payload;
      if (field === "quantity") {
        return [...state].sort(
          (a, b) => a[field] * sortType - b[field] * sortType
        );
      } else {
        return [...state].sort((a, b) => {
          if (a[field] < b[field]) {
            return sortType;
          } else if (a[field] > b[field]) {
            return -1 * sortType;
          }
          return 0;
        });
      }
  }

  return state;
};

export default orderReducer;
