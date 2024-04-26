import React, { useState, useEffect } from 'react';
import MyStocksdata from './data/trendingstocks.json';
import graphdata from './data/graph.json';
import { Line } from "react-chartjs-2";
import axios from 'axios';
import config from '../config.js'

import { ChartasChartJS } from 'chart.js/auto';
import './Portfolio.css'

export default function Portfolio() {
  const [count, setCount] = useState(0);
  const [MyStocks, setMyStocks] = useState([]);
  const [userdata,setuserdata]=useState("")
  const [data, setData] = useState({ boughtstocksdata: []});
  async function fetchData() {
    try {
        const response = await axios.get(`${config.url}/viewboughtstocks/${userdata.email}`);
        console.log(response.data);
        setData({
            boughtstocksdata: response.data || []
        });
    } catch (err) {
        console.log(err.message);
    }
}

  const [chartData, setChartData] = useState({
    labels: graphdata.map((data) => data.year), // X-axis labels
    datasets: [
      {
        label: "Users gained",
        data: graphdata.map((data) => data.userGain),
        // Add any additional dataset properties here if needed
      },
    ],
  });

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white' // Solid white color for x-axis labels
        }
      },
      y: {
        ticks: {
          color: 'white' // Solid white color for y-axis labels
        }
      }
    }
  };

  useEffect(() => {
    let sum = 0;
    MyStocks.map((stock) => {
      sum += parseFloat(stock.current_price);
    });
    let sumofreturn
    setCount(sum);
    const storeduserdata=localStorage.getItem('Stockmember')
    if(storeduserdata){
        const parseduserdata=JSON.parse(storeduserdata)
        setuserdata(parseduserdata)
    }

    fetchData()

    // Update only the datasets property, keep labels intact
    setChartData(prevState => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0], // Keep existing dataset properties
          data: graphdata.map((data) => data.userGain), // Update data property
        },
      ],
    }));

  }, [userdata]);
  const deletestock = async (Mystock) => {
    try{
      Mystock["email"] = userdata.email;
          await axios.post(`${config.url}/storemystock`,Mystock)
      await axios.delete(`${config.url}/deletestocks/${Mystock.email}/${Mystock.ticker}`);
      fetchData();
  } catch (err) {
      console.log(err.message);
  }
  }


  return (
    <div className="portfolio-container">
      <div className="main-div-portfolio">
        <div className="verticalboxportfolio">
          <h2>My Stocks</h2>
          <div align="center" className="outsideboxes">
          {
            
            Array.isArray(data.boughtstocksdata) && data.boughtstocksdata.length>0?(
             data.boughtstocksdata.map((Mystock, index)=> (
             <div key={index} className="insideboxes">
               <div className="pintopstocks"style={{marginTop:"15px"}}>
                 <i >&nbsp;&nbsp;{ `${Mystock.ticker}`} </i>
                 <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.price} </i>
                 <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.volume}</i>
                 {
                 (Mystock.change_amountu>0)?
                 <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${Mystock.change_percentage}`}</i>:
                 <i className="font-insideboxes" style={{color:" rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${Mystock.change_percentage}`}</i>
                 }
                 
                 
               </div>
               <div className="button-container-portfolio" style={{marginBottom:"35px"}}>
                 <button className="SellSmallButton" onClick={()=>deletestock(Mystock)}
>Sell</button>
               </div>
             </div>
           ))):<div style={{color:'white'}}>No Stocks</div>}

          </div>
        </div>
      </div>
      <div className="sub-main-div-portfolio" style={{marginLeft:"40px"}}>
        <div className="verticalboxportfolio">
          <h2 style={{ marginLeft: "-550px" }}>My Graph</h2>
          <div className="outsideboxgraph">
            <Line data={chartData} options={options} />
          </div>
        </div>
        <div className="verticalboxportfolio">
          <h2>Investments</h2>
          <div className="outsideboxinvestments"  style={{alignItems:"center"}}>
            
            <div style={{marginRight:"10px",alignItems:"center"}} >
            <a style={{color:"white",marginLeft:"35px",fontSize:"20px"}}>Invested</a>
            <h1 style={{color:"white",marginLeft:"35px"}}>{`$1907.63`}</h1>
            </div>
            <div>
              <a style={{color:"white",marginLeft:"35px",align:"right",fontSize:"20px"}}>Current Value</a>
              <h1 style={{color:"white",marginTop:"10px",marginLeft:"45px"}}>{ `$${count.toFixed(2)}`}</h1>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}