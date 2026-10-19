import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { Table } from "react-bootstrap";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    if (!id) {
      return;
    }
    console.log(products.find((p) => p.id === parseInt(id)));
    return products.find((p) => p.id === parseInt(id));
  };
  useEffect(() => {
    setProduct(getProduct());
  }, [id]);
  return (
    <div className="container-fluid">
      <Link to="/products">Quay lại danh sách</Link>
      <div className="d-flex gap-3">
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
        ></div>
        <div>
          <Table className="">
            <td>
              <tr>ID: </tr>
              <tr>Danh mục: </tr>
              <tr>Giá: </tr>
              <tr>Mô tả: </tr>
            </td>
            <td>
              <tr>{id}</tr>
              <tr> {product.category}</tr>
              <tr>{product.price.toLocaleString("vn-VN")}đ</tr>
              <tr>{product.description}</tr>
            </td>
          </Table>
        </div>
      </div>
    </div>
  );
}
