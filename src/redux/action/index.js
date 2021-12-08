import { combineReducers } from "redux";
import useFilterReducer from "../reducer/filter";
import usePizzasReducer from "../reducer/pizzas";

const readReducers = combineReducers({
  filter: useFilterReducer,
  pizzas: usePizzasReducer,
});

export default readReducers;
