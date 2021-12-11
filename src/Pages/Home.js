import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, Pizza } from "../components/index";
import PizzaLoader from "../components/Loader/PizzaLoader";
import ErrorBoundry from "../error/errorBoundry";
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

  const onClickAndSetIdx = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
  const onClickSortTypr = useCallback((type) => {
    dispatch(setFilter(type));
  }, []);

  const pizzasItem = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { categories, types } = useSelector(({ filter }) => filter);

  useEffect(() => {
    dispatch(fetchPizzas(categories, types));
  }, [categories, types]);
  return (
    <div className="container">
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
            pizzasItem.data?.map((obj) => <Pizza key={obj.id} {...obj} />)
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
