import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useInput } from "./components/hooks/geceModuAc";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode, onClickHandler] = useInput("Mood", false);
  const [login, setLogin, logHandler] = useInput("login", false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={onClickHandler} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
