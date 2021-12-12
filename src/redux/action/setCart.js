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
