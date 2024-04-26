import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config.js'
import './viewstockpurchaser.css'; // Import the CSS file

export default function ViewStockMembers() {
  const [stockmembers, setStockMembers] = useState([]);

  const fetchStockMembers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstockmembers`);
      setStockMembers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStockMembers();
  }, []);

  const deleteStockPurchaser = async (email) => {
    try {
      await axios.delete(`${config.url}/deletestockpurchaser/${email}`);
      fetchStockMembers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="container">
      {stockmembers.map((stockmember, index) => (
        <div className="card" key={index}>
          <h2 align="center">{stockmember.name}</h2>
          <p>Age: {stockmember.age}</p>
          <p>Email: {stockmember.email}</p>
          <p>Pan Number: {stockmember.panno}</p>
          <p>Bank Name: {stockmember.bankName}</p>
          <p>Contact: {stockmember.contact}</p>
          <button onClick={() => deleteStockPurchaser(stockmember.email)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
