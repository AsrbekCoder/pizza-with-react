import React, { useEffect } from "react";
import { Header } from "./components/index";
import { Home, Cart } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/action/setPizzas";
import Api from "./serverApi/ActiveServer";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPizza() {
      const respons = await new Api().getApiPizzas();
      dispatch(setPizzas(respons));
      console.log(respons);
    }
    fetchPizza();
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
