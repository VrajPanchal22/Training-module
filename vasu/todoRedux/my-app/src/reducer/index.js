import TodoReducer from "./todoReducer";

import { combineReducers } from "redux";

const RootReducers = combineReducers({
  TodoReducer,
});

export default RootReducers;
