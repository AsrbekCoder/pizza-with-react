import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickAndSetIdx }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickAndSetIdx(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? "active" : ""}
        >
          Все
        </li>

        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? "active" : ""}
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
