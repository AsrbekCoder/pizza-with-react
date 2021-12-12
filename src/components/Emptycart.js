import React from "react";
import cartEmptyIMg from "../asset/img/empty-cart.png";

const Emptycart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyIMg} alt="Empty cart" />
      <a href="/" className="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default Emptycart;
