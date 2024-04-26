import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config.js'
import './Stocks.css';

export default function Stocks() {
  const [userData, setUserData] = useState("");
  const [data, setData] = useState({
    adminStocks: [],
    topGainers: [],
    stocksInLoss: [],
    mostBought: []
  });

  async function fetchData() {
    try {
      const adminStocksResponse = await axios.get(`${config.url}/viewadminstocks`);
      const topGainersResponse = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
      setData({
        adminStocks: adminStocksResponse.data || [],
        topGainers: topGainersResponse.data.top_gainers || [],
        stocksInLoss: topGainersResponse.data.top_losers || [],
        mostBought: topGainersResponse.data.most_actively_traded || []
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchData();
    const storedUserData = localStorage.getItem('Stockmember');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const buyStock = async (stock) => {
    try {
      stock["email"] = userData.email;
      await axios.post(`${config.url}/storemystock`, stock);
      await axios.post(`${config.url}/storeboughtstock`, stock);
      console.log(stock);
    } catch (error) {
      console.error(error.message);
    }
  }

  const UserDataContext = React.createContext();

  const StocksSection = ({ title, stocks }) => (
    <div className="section">
      <h2>{title}</h2>
      <div className="outsideboxes" style={{ height: "200px", overflow: "scroll" }}>
        {stocks.map((stock, index) => (
          <div key={index} className="insideboxes">
            <div className='pintopstocks'>
              <span className="font-insideboxes">{stock.ticker}</span>
              <span className="font-insideboxes">{stock.stockname}</span>
              <span className="font-insideboxes">{stock.price}</span>
              <span className="font-insideboxes" style={{ color: stock.change_amount > 0 ? "rgb(81, 201, 81)" : "rgb(255, 0, 0)" }}>
                {stock.change_percentage}
              </span>
            </div>
            <div className="button-container">
              <button className="BuySmallButton" onClick={() => buyStock(stock)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <UserDataContext.Provider value={userData}>
      <div className="main-div">
        {document.title = "Stocks"}
        <div className="left-section">
          <StocksSection title="Top Stocks" stocks={data.topGainers} />
          <StocksSection title="Stocks In Loss" stocks={data.stocksInLoss} />
          <StocksSection title="Most Bought on our Website" stocks={data.mostBought} />
          
        </div>
        <div className="right-section">
          <div className="verticalbox">
            <StocksSection title="Trending" stocks={data.mostBought} />
            <StocksSection title="Admin Stocks" stocks={data.adminStocks} />
          </div>
        </div>
      </div>
    </UserDataContext.Provider>
  );
}
