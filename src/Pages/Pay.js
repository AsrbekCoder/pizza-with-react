import React from "react";

import { useSelector } from "react-redux";
import EmptyForm from "../components/PaymentForm/EmptyForm";
import FormProviderInType from "../components/PaymentForm/FormProvider";
const Pay = () => {
  const { itemPrice } = useSelector(({ cart }) => cart);

  return (
    <div className="container box_payment">
      {itemPrice > 0 ? (
        <FormProviderInType itemPrice={itemPrice} />
      ) : (
        <EmptyForm />
      )}
    </div>
  );
};

export default Pay;
