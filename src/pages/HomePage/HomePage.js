import React from "react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import Img1 from "../../images/image 1.png";
import Img2 from "../../images/image 1 (1).png";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='Container '>
      <div className='NavBar'>
        <div className='NavBar-2'>
          <img src={Img1} alt='img' />
          <img
            src={Img2}
            alt='img'
            style={{ position: "relative", right: "200px" }}
          />

          <div className='Text'>
            <h1>The future of money is here</h1>
            <h4>
              We're the most trusted place for people and businesses to buy,
              sell, and manage crypto.
            </h4>
            <button onClick={() => navigate("/Crypto-List")}>
              Explore More{" "}
            </button>
          </div>
        </div>
        <div className='NavBar-3'>
          <h2>USDC is the dollar for the digital age</h2>
          <h2>
            USDC gives you 24/7 access to payments and financial services.
            Trade, spend, and send faster and more efficiently.
          </h2>
          <div className='btn'>
            <button onClick={() => navigate("/Learn More")}>Learn More</button>
          </div>
        </div>
        <div className='NavBar-4'>
          <h2>If you are interested, you can see more About Us.</h2>
          <button onClick={() => navigate("/AboutUs")}>About Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
