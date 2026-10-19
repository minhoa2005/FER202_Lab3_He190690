import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center">
      <h1>Welcome to the Product Store</h1>
      <p>Explore and manage your products for you need.</p>
      <Link to="/products">View Products</Link>
    </div>
  );
}
