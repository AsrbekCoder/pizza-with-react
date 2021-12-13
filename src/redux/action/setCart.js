export const setCart = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});
export const setClear = () => ({
  type: "CLEAR_CART",
});
export const setDeleate = (id) => ({
  type: "DELEATE_ITEMS",
  payload: id,
});
export const setPlus = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});
export const setMinus = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
