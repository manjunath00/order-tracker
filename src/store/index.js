import {createStore} from "redux";
import rootReducer from "../reducers";
import { loadState, saveState} from "./localStorage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedStore = loadState();

const store = createStore(rootReducer, persistedStore, composeWithDevTools());

store.subscribe(() => {
    const orders = store.getState().orders
    saveState(orders);
}); 

export default store;
