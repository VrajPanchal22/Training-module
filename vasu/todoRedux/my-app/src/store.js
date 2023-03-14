import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./reducer";

const store = configureStore(
  { reducer: RootReducers },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
