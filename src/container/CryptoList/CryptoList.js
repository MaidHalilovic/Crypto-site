import React, { useEffect, useState } from "react";
import "./cryptoList.css";
import { Button } from "antd";
import axios from "axios";
import CryptoListItem from "../../components/CryptoListItem/CryptoListItem";
import { Pagination } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import FooterCryptoList from "../../components/FooterCryptoList/FooterCryptoList";

function CryptoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(20);
  const [coins, setCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(950);

  // const fetchCoins = async () => {
  // const offset = coinsPerPage * (currentPage - 1);

  //   try {
  //     const { data } = await axios.get(
  //       `https://api.coinranking.com/v2/coins?api_key=coinranking23264622916bfeb50d7c480bea8f2665cae6701a93df626e&limit=${coinsPerPage}&offset=${offset}`
  //     );
  //     console.log(data.data.coins);

  //     setCoins(data.data.coins);
  //   } catch (error) {
  //     console.error("Error while fethching products", error);
  //   }
  // };

  const fetchCoins = async () => {
    const offset = coinsPerPage * (currentPage - 1);

    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coins?limit=${coinsPerPage}&offset=${offset}`,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "1",
      },
      headers: {
        "x-rapidapi-key": "fa3ad0bc85mshf98160e7de354a0p1cd16ajsne4c113ec1e05",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      setCoins(response.data.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoins(currentPage);
  }, [currentPage]);

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

      {/* <CryptoListItem coins={coins} /> */}

      <div className='Container'>
        <div className='List'>
          <div className='cards'>
            {coins.map((coin) => (
              <CryptoListItem key={coin.uuid} coin={coin} />
            ))}
            <>
              <br />
              <Pagination
                showSizeChanger={false}
                total={totalCoins}
                pageSize={coinsPerPage}
                onChange={(page) => {
                  setCurrentPage(page);
                }}
                current={currentPage}
                align='center'
                defaultCurrent={1}
              />
              <br />
            </>
            <div className='trading'>
              <h2>
                Create a Coinbase account to trade crypto. It’s quick, easy, and
                secure.
              </h2>
              <button>
                Start Trading <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <FooterCryptoList />
      </div>
    </div>
  );
}

export default CryptoList;
