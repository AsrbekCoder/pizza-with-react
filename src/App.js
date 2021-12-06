import React, { useEffect, useState } from "react";
import { Header } from "./components/index";
import { Home, Cart } from "./Pages";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);
  console.log(pizzas);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home pizzasItem={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
