import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className='Header'>
      <h2 onClick={() => navigate("/")}>Crypto</h2>
      <div className='Header-2'>
        <h3>Crypto-List</h3>
        <h3>Learn More</h3>
        <h3>About Us</h3>
        <h3>Individuals</h3>
      </div>
    </div>
  );
}

export default Header;
