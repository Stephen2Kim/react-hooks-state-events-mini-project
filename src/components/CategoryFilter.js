import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ selectedCategory, onCategorySelect }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
