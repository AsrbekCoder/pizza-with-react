const { default: axios } = require("axios");

let api = "  http://localhost:3001";

class Api {
  getApiPizzas() {
    return axios.get(`${api}/pizzas`);
  }
}
export default Api;
