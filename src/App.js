import React from "react";
import { Header } from "./components/index";
import { Home, Cart } from "./Pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
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
