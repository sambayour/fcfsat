import RootReducer from "./reducers";
import { createStore } from "redux";
const store = createStore(RootReducer);

export default store;