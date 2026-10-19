import React from "react";
import { products } from "../data/products";

export default function CategoryFilter({ filter, setFilter }) {
  const getGenres = () => {
    const genres = [];
    products.forEach((m) => {
      if (!genres.includes(m.category)) {
        genres.push(m.category);
      }
    });
    return genres;
  };
  return (
    <div>
      <select
        className="form-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        {getGenres().map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}
