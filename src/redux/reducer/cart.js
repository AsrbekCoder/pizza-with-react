const initialState = {
  items: {},
  itemCounter: null,
  itemPrice: 0,
};

const cart = (state = initialState, action) => {
  const newItem = {
    ...state.items,
    [action.payload?.id]: !state.items[action.payload?.id]
      ? [action.payload]
      : [...state.items[action.payload?.id], action.payload],
  };
  const arrChecker = [].concat.apply([], Object.values(newItem));
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: newItem,
        itemCounter: arrChecker.length,
        itemPrice: arrChecker.reduce((sum, obj) => sum + obj.price, 0),
      };

    default:
      return state;
  }
};
export default cart;
