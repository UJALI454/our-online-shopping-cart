import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [form, setForm] = useState({ name: "", address: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="text" placeholder="Address" required onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="tel" placeholder="Phone" required onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default Checkout;
