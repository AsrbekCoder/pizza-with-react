const { default: axios } = require("axios");

let api = "  http://localhost:3001";

class Api {
  getApiPizzas(category, sortBy) {
    return axios.get(
      `${api}/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    );
  }
}
export default Api;
