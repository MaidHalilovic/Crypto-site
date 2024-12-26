import React, { useEffect, useState } from "react";
import "./cryptoList.css";
import { Button, Flex } from "antd";
import axios from "axios";
import Explore from "../../components/CryptoListExplore/Explore";

function CryptoList() {
  const [coins, setCoins] = useState([]);

  const FetchCoins = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coinranking.com/v2/coins?api_key=coinranking23264622916bfeb50d7c480bea8f2665cae6701a93df626e"
      );
      console.log(data);
      setCoins(data.data.coins);
    } catch (error) {
      console.error("Error while fethching products", error);
    }
  };

  useEffect(() => {
    FetchCoins();
  }, []);

  return (
    <div className='mainContainer'>
      <div className='navBar'>
        <h1>Crypto prices</h1>
        <p>17,746 assets</p>
      </div>
      <div className='description'>
        <p>
          The overall crypto market is shrinking this week. As of today, the
          total crypto market capitalization is 3.22 trillion, representing a
          8.96% decrease from last week.
        </p>
      </div>
      <div className='Buttons'>
        <Button type='primary'>All assets</Button>
        <Button type='primary'>1 D</Button>
        <Button type='primary'>RSD</Button>
        <Button type='primary'>30 ROW</Button>
      </div>
      <Explore coins={coins} />
    </div>
  );
}

export default CryptoList;
