import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import an from "../asset/img/an.gif";
import { Button } from "../components";
const Done = () => {
  const [state, setstate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setstate(() => true);
    }, 3000);
  }, []);
  return (
    <div className="container done_box">
      {state ? (
        <>
          <img src={an} alt=""></img>
          <strong>Спасибо за покупок.</strong>
          <br />
          <br />
          <Link to="/">
            <Button className="pay-btn">
              <span>Эшо хотите заказать</span>
            </Button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Done;
