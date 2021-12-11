import Api from "../../serverApi/Api";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (categories, types) => (dispatch) => {
  dispatch(setLoaded(false));
  new Api()
    .getApiPizzas(categories, types)
    .then((data) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZA",
  payload: items,
});
