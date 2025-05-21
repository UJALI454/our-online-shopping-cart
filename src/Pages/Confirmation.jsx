import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div>
      <h2>Thank you for your order!</h2>
      <Link to="/"><button>Go to Home</button></Link>
    </div>
  );
}

export default Confirmation;
