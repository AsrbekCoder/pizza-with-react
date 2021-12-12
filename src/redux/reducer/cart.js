const initialState = {
  items: {},
  itemCounter: null,
  itemPrice: 0,
};

const getTotalSum = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const currentItem = !state.items[action.payload?.id]
        ? [action.payload]
        : [...state.items[action.payload?.id].items, action.payload];

      const newItem = {
        ...state.items,
        [action.payload.id]: {
          items: currentItem,
          totalPrice: getTotalSum(currentItem),
        },
      };
      const linkGet = Object.values(newItem).map((obj) => obj.items);
      const arrChecker = [].concat.apply([], linkGet);
      return {
        ...state,
        items: newItem,
        itemCounter: arrChecker.length,
        itemPrice: getTotalSum(arrChecker),
      };

    case "CLEAR_CART":
      return {
        items: {},
        itemCounter: 0,
        itemPrice: 0,
      };
    case "DELEATE_ITEMS":
      const newDelItem = {
        ...state.items,
      };
      const currentTotalPrice = newDelItem[action.payload].totalPrice;
      const currentItemCaounter = newDelItem[action.payload].items.length;

      delete newDelItem[action.payload];

      return {
        ...state,
        items: newDelItem,
        itemPrice: state.itemPrice - currentTotalPrice,
        itemCounter: state.itemCounter - currentItemCaounter,
      };

    default:
      return state;
  }
};
export default cart;
