import { useNavigate } from "react-router-dom";
import CryptoListItem from "../../components/CryptoListItem/CryptoListItem";
import { AppContext } from "../../context/AppContext";
import React, { useContext } from "react";
import { Button, Flex } from "antd";

function Favorites() {
  const navigate = useNavigate();
  const { favorites } = useContext(AppContext);

  // if (!favorites || favorites.length === 0) {
  //   return (
  //     <h1 style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
  //       No favorites added yet.
  //     </h1>
  //   );
  // }

  return (
    <div>
      {/* <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          gap: 30,
        }}
      >
        
      </h1> */}
      <ul>
        {/* {favorites.map((coin) => (
          <CryptoListItem key={coin.uuid} coin={coin} />
        ))} */}
        {favorites.length > 0 ? (
          <div className='shopGlavni'>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                gap: 30,
              }}
            >
              Your Favorites
            </h1>
            {favorites.map((coin) => (
              <CryptoListItem coin={coin} key={coin.uuid} />
            ))}
          </div>
        ) : (
          <div
            style={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                gap: 30,
              }}
            >
              There is no Favorites{" "}
            </h1>

            <Button onClick={() => navigate("/Crypto-List")} type='primary'>
              Go Back
            </Button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Favorites;
