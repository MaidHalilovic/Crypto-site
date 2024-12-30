import React from "react";
import "./crypto.css";
import CryptoList from "../../container/CryptoList/CryptoList";
import { GoArrowDownRight } from "react-icons/go";
import axios from "axios";

function Crypto() {
  return (
    <div className='MainContainer'>
      <div className='NavBar'>
        <h1>Explore the cryptoeconomy</h1>
        <p>
          Coinbase 50 Index is down <GoArrowDownRight /> 3.72% (24hrs)
        </p>
        <input placeholder='Search for an asset' />
      </div>

      <CryptoList />
    </div>
  );
}

export default Crypto;
