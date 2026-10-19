import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <div className="d-flex justify-content-between p-2 border-bottom mb-3">
      <h1>Product Store</h1>
      <div>
        <Link to={"/"}>
          <Button variant="outline-success">Home</Button>
        </Link>
        <Link to="/products">
          <Button variant="outline-success">Product</Button>
        </Link>
      </div>
    </div>
  );
}
