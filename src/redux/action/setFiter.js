export const setFilter = (items) => ({
  type: "SORT_PIZZAS",
  payload: items,
});

export const setCategory = (catIndex) => ({
  type: "SORT_CATEGORY",
  payload: catIndex,
});
