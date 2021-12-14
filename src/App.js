import React from "react";
import { Header } from "./components/index";
import { Home, Cart, Pay, Done } from "./Pages";
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
          <Route path="/done" element={<Done />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
