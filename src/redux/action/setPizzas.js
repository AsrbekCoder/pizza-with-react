import Api from "../../serverApi/Api";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  new Api().getApiPizzas().then((data) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZA",
  payload: items,
});
