import { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addCoinToFavorites = (coin) => {
    setFavorites((prevFav) => {
      if (prevFav.find((prev) => prev.uuid === coin.uuid)) {
        return prevFav.filter((prevs) => prevs.uuid !== coin.uuid);
      } else {
        return [...prevFav, coin];
      }
    });
  };

  const values = {
    favorites,
    setFavorites,
    addCoinToFavorites,
  };

  // Prosleđujemo vrednosti kroz kontekst
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
