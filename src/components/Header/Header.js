import React, { useContext } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Space } from "antd";
import { BellFilled } from "@ant-design/icons";
import { AppContext } from "../../context/AppContext";

function Header() {
  const navigate = useNavigate();
  const { favorites } = useContext(AppContext);

  const favoritesCount = favorites ? favorites.length : 0;

  return (
    <div className='Header'>
      <h2 onClick={() => navigate("/")}>Crypto</h2>
      <div className='Header-2'>
        <h3 onClick={() => navigate("/Crypto-List")}>Crypto-List</h3>
        <h3 onClick={() => navigate("/Learn More")}>Learn More</h3>
        <h3 onClick={() => navigate("/AboutUs")}>About Us</h3>
        <h3 onClick={() => navigate("/Individuals")}>Individuals</h3>

        <Badge
          count={favorites.length}
          onClick={() => navigate("/Favorites")}
          style={{
            backgroundColor: "#52c41a",
            cursor: "pointer",
          }}
        >
          <BellFilled style={{ fontSize: "30px", color: "white" }} />
        </Badge>
      </div>
    </div>
  );
}

export default Header;
