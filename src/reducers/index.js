import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import paginationReducer from "./paginationReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  orders: orderReducer,
  pages: paginationReducer,
  auth: authReducer
});

export default rootReducer;
