import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Crypto from "./pages/Crypto-List/Crypto";
import Header from "./components/Header/Header";
import LearnMore from "./pages/LearnMore/LearnMore";
import AboutUs from "./pages/AboutUs/AboutUs";
import Individuals from "./pages/Individuals/Individuals";
import { ContextProvider } from "./context/AppContext";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Crypto-List' element={<Crypto />} />
          <Route path='/Learn More' element={<LearnMore />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Individuals' element={<Individuals />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
