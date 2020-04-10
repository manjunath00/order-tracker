/* eslint-disable */
import {NEXT_PAGE} from "../actions/types";
import {PREV_PAGE} from "../actions/types";
import {SET_ITEMS_PER_PAGE} from "../actions/types";

const initialState = {
  currentPage: 1,
  itemsPerPage: 2,
};

const returnStateObject = function (state) {
  // array start index & array end index for orders slicing
  const updatedStateObjForArrayEndIndex = {
    ...state,
    arrayEndIndex: state.itemsPerPage * state.currentPage,
  };
  const arrayStartIndexObj = {
    arrayStartIndex:
      updatedStateObjForArrayEndIndex.arrayEndIndex - state.itemsPerPage,
  };

  const updatedStateObjForArrayStartIndex = {
    ...updatedStateObjForArrayEndIndex,
    ...arrayStartIndexObj,
  };
  return updatedStateObjForArrayStartIndex;
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return returnStateObject({...state, currentPage: action.payload});
      break;
    case PREV_PAGE:
      return returnStateObject({...state, currentPage: action.payload});
      break;
    case SET_ITEMS_PER_PAGE:
      return returnStateObject({
        ...state,
        itemsPerPage: action.payload,
        currentPage: 1,
      });
      break;
  }
  return returnStateObject(state);
};

export default paginationReducer;
