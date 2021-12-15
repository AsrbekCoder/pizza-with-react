import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, Pizza } from "../components/index";
import PizzaLoader from "../components/Loader/PizzaLoader";
import SliderLoader from "../components/Loader/SliderLoader";
import MapForChoose from "../components/MapForChoose";
import Sliders from "../components/Slider";
import ErrorBoundry from "../error/errorBoundry";
import { setCart } from "../redux/action/setCart";
import { setCategory, setFilter } from "../redux/action/setFiter";
import { fetchPizzas } from "../redux/action/setPizzas";
const categoriesNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", oreder: "desc" },
  { name: "цене", type: "price", oreder: "desc" },
  { name: "алфавиту", type: "name", oreder: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();

  const onSendSaltBox = (obj) => {
    dispatch(setCart(obj));
  };

  const pizzasItem = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { categories, types } = useSelector(({ filter }) => filter);

  const carts = useSelector(({ cart }) => cart.items);
  useEffect(() => {
    dispatch(fetchPizzas(categories, types));
  }, [categories, types]);

  const onClickAndSetIdx = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
  const onClickSortTypr = useCallback((type) => {
    dispatch(setFilter(type));
  }, []);

  return (
    <div className="container">
      <MapForChoose />
      {isLoaded ? <Sliders /> : <SliderLoader />}
      <div className="content__top">
        <Categories
          activeCategoryIdx={categories}
          items={categoriesNames}
          onClickAndSetIdx={onClickAndSetIdx}
        />
        <SortPopup
          items={sortItems}
          activeSortBy={types.type}
          onClickSortTypr={onClickSortTypr}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoaded ? (
          pizzasItem.status === 200 ? (
            pizzasItem.data?.map((obj) => (
              <Pizza
                key={obj.id}
                {...obj}
                appyCart={carts[obj.id]?.items.length}
                onSendSaltBox={onSendSaltBox}
              />
            ))
          ) : (
            <ErrorBoundry />
          )
        ) : (
          Array(12)
            .fill(0)
            .map((_, idx) => <PizzaLoader key={idx} />)
        )}
      </div>
    </div>
  );
};

export default Home;
