import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center">
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to="/">Về trang chủ</Link>
    </div>
  );
}
