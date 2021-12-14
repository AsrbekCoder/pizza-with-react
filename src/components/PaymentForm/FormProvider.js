import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";
import FormInput from "./FormInput";
import { setClear } from "../../redux/action/setCart";
import { useDispatch } from "react-redux";
const FormProviderInType = ({ itemPrice }) => {
  const dispatch = useDispatch();
  const payClear = () => {
    dispatch(setClear());
  };
  const methods = useForm();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Данний
      </Typography>

      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Имя" />
            <FormInput required name="lastName" label="Фамиля" />
            <FormInput required name="address1" label="Страна" />
            <FormInput required name="number" label="Телефон" />
            <FormInput required name="number" label="MM\YY" />
          </Grid>
          <div className="cart__bottom-buttons">
            <Link
              to="/cart"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </Link>
            <Link to="/done">
              <Button className="pay-btn" onClick={payClear}>
                <span>Оплатить, {itemPrice} ₽</span>
              </Button>
            </Link>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default FormProviderInType;
