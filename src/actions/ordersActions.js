import {DELETE_ORDER} from "./types";
import {EDIT_ORDER} from "./types";
import {NEW_ORDER} from "./types";
import {SORT_ORDER} from "./types";
import {v4 as uuidv4} from "uuid";

export function newOrder(order) {
  order.id = uuidv4();
  return {
    type: NEW_ORDER,
    payload: order,
  };
}

export function deleteOrder(orderId) {
  return {
    type: DELETE_ORDER,
    payload: orderId,
  };
}

export function editOrder(order) {
  return {
    type: EDIT_ORDER,
    payload: order,
  };
}

export function sortOrder(field, direction) {
  const sortType = direction ? 1 : -1;

  return {
    type: SORT_ORDER,
    payload: {
      field,
      sortType,
    },
  };
}
