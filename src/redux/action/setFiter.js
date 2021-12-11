export const setFilter = ({ type, order }) => ({
  type: "SORT_PIZZAS",
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: "SORT_CATEGORY",
  payload: catIndex,
});
