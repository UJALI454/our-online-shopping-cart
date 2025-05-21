import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default NavBar;
