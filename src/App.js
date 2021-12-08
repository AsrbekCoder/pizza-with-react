import React, { useEffect } from "react";
import { Header } from "./components/index";
import { Home, Cart } from "./Pages";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/action/setPizzas";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
