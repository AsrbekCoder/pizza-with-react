const initialState = {
  items: {},
  itemCounter: null,
  itemPrice: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

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
          totalPrice: getTotalPrice(currentItem),
        },
      };

      const itemCounter = getTotalSum(newItem, "items.length");
      const itemPrice = getTotalSum(newItem, "totalPrice");
      return {
        ...state,
        items: newItem,
        itemCounter,
        itemPrice,
      };

    case "PLUS_CART_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemCounter = getTotalSum(newItems, "items.length");
      const itemPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        itemCounter,
        itemPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemCounter = getTotalSum(newItems, "items.length");
      const itemPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        itemCounter,
        itemPrice,
      };
    }

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
