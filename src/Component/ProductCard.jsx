import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} width="100" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
