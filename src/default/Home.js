import React from 'react';
import Chart from 'chart.js/auto';
import './Home.css'; // Import your homepage styles
import { useEffect, useRef } from 'react';

export default function Home() {
    const chartRef = useRef(null);
    const jsonData=[
        {
          "symbol": "AAPL",
          "company_name": "Apple Inc.",
          "current_price": 150.23,
          "change_percent": 1.56,
          "volume": 2356789,
          "market_cap": "2.5T",
          "sector": "Technology"
        },
        {
          "symbol": "TSLA",
          "company_name": "Tesla, Inc.",
          "current_price": 800.45,
          "change_percent": -2.33,
          "volume": 1890765,
          "market_cap": "900B",
          "sector": "Automotive"
        },
        {
          "symbol": "AMZN",
          "company_name": "Amazon.com, Inc.",
          "current_price": 3100.67,
          "change_percent": 0.78,
          "volume": 1209845,
          "market_cap": "1.6T",
          "sector": "Retail"
        },
        {
          "symbol": "GOOG",
          "company_name": "Alphabet Inc.",
          "current_price": 2890.12,
          "change_percent": 0.98,
          "volume": 865432,
          "market_cap": "2.2T",
          "sector": "Technology"
        },
        {
          "symbol": "MSFT",
          "company_name": "Microsoft Corporation",
          "current_price": 340.56,
          "change_percent": 0.45,
          "volume": 1500987,
          "market_cap": "2.1T",
          "sector": "Technology"
        },
        {
          "symbol": "NVDA",
          "company_name": "NVIDIA Corporation",
          "current_price": 700.89,
          "change_percent": 2.12,
          "volume": 987654,
          "market_cap": "500B",
          "sector": "Technology"
        },
        {
          "symbol": "NFLX",
          "company_name": "Netflix, Inc.",
          "current_price": 600.34,
          "change_percent": -0.87,
          "volume": 876543,
          "market_cap": "300B",
          "sector": "Entertainment"
        },
        {
          "symbol": "FB",
          "company_name": "Meta Platforms, Inc.",
          "current_price": 310.78,
          "change_percent": 1.23,
          "volume": 765432,
          "market_cap": "900B",
          "sector": "Technology"
        },
        {
          "symbol": "BABA",
          "company_name": "Alibaba Group Holding Limited",
          "current_price": 180.45,
          "change_percent": 3.76,
          "volume": 654321,
          "market_cap": "600B",
          "sector": "Technology"
        },
        {
          "symbol": "JPM",
          "company_name": "JPMorgan Chase & Co.",
          "current_price": 150.67,
          "change_percent": 0.98,
          "volume": 543210,
          "market_cap": "400B",
          "sector": "Finance"
        },
        {
          "symbol": "PYPL",
          "company_name": "PayPal Holdings, Inc.",
          "current_price": 200.34,
          "change_percent": 2.89,
          "volume": 432109,
          "market_cap": "350B",
          "sector": "Financial Technology"
        },
        {
          "symbol": "CRM",
          "company_name": "Salesforce.com, Inc.",
          "current_price": 275.67,
          "change_percent": 1.76,
          "volume": 321098,
          "market_cap": "250B",
          "sector": "Software"
        }
      ];
    
      const renderRealTimeData = () => {
        return jsonData.map((item, index) => (
          <div className="real-time-item" key={index}>
            <p>{item.company_name} ({item.symbol}): ${item.current_price} ({item.change_percent}%)</p>
          </div>
        ));
      };
    
      // Render personalized watchlist
      const renderWatchlist = () => {
        // Assuming watchlist is the first 5 items in jsonData
        const watchlistData = jsonData.slice(0, 5);
        return watchlistData.map((item, index) => (
          <div className="watchlist-item" key={index}>
            <p>{item.company_name} ({item.symbol}): ${item.current_price} ({item.change_percent}%)</p>
          </div>
        ));
      };
      useEffect(() => {
  if (chartRef.current && !chartRef.current.chart) {
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['AAPL', 'TSLA', 'AMZN', 'GOOG', 'MSFT'],
        datasets: [
          {
            label: 'Market Cap',
            data: [2500, 900, 1600, 2200, 2100],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
    chartRef.current.chart = newChart;
  }
}, []);

      
      
    
      return (
        <div className="home-container">
          <header className="header">
            <h1 color="white"> 
              <u>Welcome to ASH Stocks</u>
            </h1>
            <h2 align="center">Your one-stop destination for all things stocks</h2>
          </header>
    
          <section className="hero-section">
            <div className="hero-content">
              <h2 align="center">Discover Stocks</h2>
              <p>
                Explore trending stocks, track their performance, and make informed investment decisions.
              </p>
              
            </div>
            
          </section>
    
          <section className="features-section">
            <div className="feature">
              <h3>Real-Time Data</h3>
              {renderRealTimeData()}
            </div>
            <div className="feature">
              <h3>Personalized Watchlist</h3>
              {renderWatchlist()}
            </div>
            
            <div className="feature">
          <div className="chart-box">
            <div className="chart-container">
              <canvas ref={chartRef} className="chart-canvas" />
            </div>
            <div className="chart-attributes">
              <h3>Market Cap Distribution</h3>
              <ul>
                <li>AAPL: $2.5T</li>
                <li>TSLA: $900B</li>
                <li>AMZN: $1.6T</li>
                <li>GOOG: $2.2T</li>
                <li>MSFT: $2.1T</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

             
    
          
    
          <footer className="footer">
            <p>&copy; 2024 ASH Stocks. All rights reserved.</p>
          </footer>
        </div>
      );
    }
