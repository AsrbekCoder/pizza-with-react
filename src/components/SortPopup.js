import React, { useEffect, useRef, useState } from "react";

const SortPopup = React.memo(function SortPopup({
  items,
  activeSortBy,
  onClickSortTypr,
}) {
  const SortRef = useRef();
  const [togglePopup, setTogglePopup] = useState(false);

  const getSortName = items.find((obj) => obj.type === activeSortBy).name;
  const getIndexSort = (type) => {
    onClickSortTypr(type);
    setTogglePopup(false);
  };

  const toggleSortPopup = () => {
    setTogglePopup(!togglePopup);
  };

  const handleClickPopupOutside = (e) => {
    if (!e.path.includes(SortRef.current)) setTogglePopup(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickPopupOutside);
  }, []);

  return (
    <div ref={SortRef} className="sort">
      <div className="sort__label">
        <svg
          className={togglePopup ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleSortPopup}>{getSortName}</span>
      </div>
      {togglePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((main) => (
                <li
                  className={activeSortBy === main.type ? "active" : ""}
                  key={main.type}
                  onClick={() => getIndexSort(main)}
                >
                  {main.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
