import React from "react";
import logoPay from "../../asset/img/card.png";
import { Link } from "react-router-dom";
const EmptyForm = () => {
  return (
    <div className="cart cart--empty">
      <h2>У вас нет вибронно питцца заказивайте 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={logoPay} alt="PizzaLogo" style={{ width: "220px" }} />
      <Link to="/" className="button button--black">
        <span>Вернуться главную страницу</span>
      </Link>
    </div>
  );
};

export default EmptyForm;
