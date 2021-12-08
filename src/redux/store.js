import { createStore } from "redux";
import readReducers from "./action";

const store = createStore(
  readReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
