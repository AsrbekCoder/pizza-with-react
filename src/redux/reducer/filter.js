const initialState = {
  categories: null,
  types: "popular",
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_PIZZAS":
      return {
        ...state,
        types: action.payload,
      };
    case "SORT_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
export default filter;
