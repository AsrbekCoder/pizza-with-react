import React, { useState } from "react";

const Categories = React.memo(function Categories({
  activeCategoryIdx,
  items,
  onClickAndSetIdx,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickAndSetIdx(null)}
          className={activeCategoryIdx === null ? "active" : ""}
        >
          Все
        </li>

        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onClickAndSetIdx(index)}
              className={activeCategoryIdx === index ? "active" : ""}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
