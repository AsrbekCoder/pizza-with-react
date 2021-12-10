import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import readReducers from "./action";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  readReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
