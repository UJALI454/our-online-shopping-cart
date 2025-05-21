import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </>
      )}
    </div>
  );
}

export default Cart;
