const initialState = {
  categories: 0,
  types: "popular",
};

const filter = (state = initialState, action) => {
  if (action.type === "SORT_PIZZAS") {
    return {
      ...state,
      types: action.payload,
    };
  }
  return state;
};
export default filter;
