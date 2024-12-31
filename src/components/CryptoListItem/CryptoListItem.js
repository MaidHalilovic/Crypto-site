import "./cryptoListItem.css";
import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowDownLeft } from "react-icons/go";
import { useColStyle } from "antd/es/grid/style";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function CryptoListItem({ coin }) {
  const { favorites, addCoinToFavorites } = useContext(AppContext);

  const isFavorite = favorites.find((favorit) => favorit.uuid === coin.uuid);

  return (
    <div className='card'>
      <div onClick={() => addCoinToFavorites(coin)}>
        {isFavorite ? (
          <StarFilled style={{ fontSize: "20px", color: "black" }} />
        ) : (
          <StarOutlined style={{ fontSize: "20px" }} />
        )}
      </div>

      <img
        src={coin.iconUrl}
        alt='img'
        style={{ width: "50px", height: "50px" }}
      />

      <div className='oneDiv'>
        <p>{coin.name}</p>
        <h4>{coin.symbol}</h4>
      </div>
      <p>{coin.price}</p>
      <p style={{ color: coin.change < 0 ? "red" : "green" }}>
        {coin.change < 0 ? <GoArrowDownLeft /> : <FiArrowUpRight />}
        {coin.change}%
      </p>
      <p>{coin.change}</p>
      <p>{coin.marketCap}</p>
      <Button type='primary'>Trade</Button>
    </div>
  );
}

export default CryptoListItem;
