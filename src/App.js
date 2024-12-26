import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Crypto from "./pages/Crypto-List/Crypto";
import Header from "./components/Header/Header";
import LearnMore from "./pages/LearnMore/LearnMore";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Crypto-List' element={<Crypto />} />
        <Route path='/Learn More' element={<LearnMore />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
