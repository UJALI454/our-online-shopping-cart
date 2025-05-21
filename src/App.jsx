import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MyCart from "./Pages/MyCart";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";
import "./App.css"

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
