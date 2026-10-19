import React from "react";
import { Button, FormControl } from "react-bootstrap";
import { Form } from "react-router-dom";

export default function SearchBar({ search, setSearch }) {
  return (
    <FormControl
      className=""
      placeholder="Tìm tên sản phẩm..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      // ref={ref}
    />
  );
}
