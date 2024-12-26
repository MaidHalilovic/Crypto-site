import react from "react";
import "./explore.css";
import { Button, Flex } from "antd";

function Explore({ coins }) {
  return (
    <div className='Container'>
      <div className='List'>
        <div className='cards'>
          {coins.map((el, index) => (
            <div key={index} className='card'>
              <img
                src={el.iconUrl}
                alt='img'
                style={{ width: "50px", height: "50px" }}
              />
              <div className=''>
                <p>{el.name}</p>
                <h4>{el.symbol}</h4>
              </div>
              <p>{el.price}</p>
              <p>{el.change}</p>
              <p>{el.marketCap}</p>
              <Button type='primary'>Trade</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
