import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, Pizza } from "../components/index";
import ErrorBoundry from "../error/errorBoundry";
import { setFilter } from "../redux/action/setFiter";

const categoriesNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();

  const onSelectIdx = (idx) => {
    dispatch(setFilter(idx));
  };

  const pizzasItem = useSelector(({ pizzas }) => pizzas.items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoriesNames} onClickAndSetIdx={onSelectIdx} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {pizzasItem.status === 200 ? (
          pizzasItem.data?.map((obj) => <Pizza key={obj.id} {...obj} />)
        ) : (
          <ErrorBoundry />
        )}
      </div>
    </div>
  );
};

export default Home;
