import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MyCart from "./Pages/MyCart";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";
import "./App.css";
// import bg from "./assets/background.jpg" // Renamed file

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      {/* <img src={bg} alt="loading background.." /> */}

      <Router>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<MyCart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
