import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("all");
  const [sort, setSort] = useState("default");
  const filter = () => {
    return products.filter((m) => {
      const searchResult =
        search === "" || m.name.toLowerCase().includes(search.toLowerCase());
      const genre = filterGenre === "all" || filterGenre === m.category;
      return searchResult && genre;
    });
  };

  };
  return (
    <div className="container">
      <div className="d-flex gap-3">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter filter={filterGenre} setFilter={setFilterGenre} />
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="default">Mặc định</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>
      <div>
        <p>Tổng: {sortProducts().length}</p>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phầm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sortProducts().map((p) => (
              <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price.toLocaleString("vn-VN")}đ</td>
                <td>
                  <Link to={`/products/${p.id}`}>Chi tiết</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
