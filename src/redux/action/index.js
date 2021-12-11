import { combineReducers } from "redux";
import filter from "../reducer/filter";
import pizzas from "../reducer/pizzas";
import cart from "../reducer/cart";
const readReducers = combineReducers({
  filter,
  pizzas,
  cart,
});

export default readReducers;
