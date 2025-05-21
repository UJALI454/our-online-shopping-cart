import React from "react";
import products from "../data/Product";
import ProductCard from "../Component/ProductCard";

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
