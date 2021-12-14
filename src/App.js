import React from "react";
import { Header } from "./components/index";
import { Home, Cart, Pay } from "./Pages";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
