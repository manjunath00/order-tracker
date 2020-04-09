import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import paginationReducer from "./paginationReducer";

const rootReducer = combineReducers({
  orders: orderReducer,
  pages: paginationReducer,
});

export default rootReducer;
