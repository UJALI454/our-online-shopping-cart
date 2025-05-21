import React from "react";
import { Link } from "react-router-dom";

function Home() {

const styles ={
  
}



  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to React19 Shop!</h1>
      <Link to="/products"><button>Shop Now</button></Link>
    </div>
  );
}

export default Home;
