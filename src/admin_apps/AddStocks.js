import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.js'

function AddStock() {
  const [formData, setFormData] = useState({
    stockname: '',
    quantity: '',
    price: '',
    // Add more fields as needed
  });
    //message state variable
    const [message, setMessage] = useState('');
    //error state variable
    const [error, setError] = useState('');
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => { 
    e.preventDefault();
try 
{
  const response = await axios.post(`${config.url}/addstocksbyadmin`,formData);
  if (response.status === 200) 
  {
    //It will set all fields to ""
    setFormData({
        stockname: '',
        quantity: '',
        price: '',
    });
  }
  setMessage(response.data);
  setError(''); //set error to ""
} 
catch(error) 
{
  setError(error.response.data);
  setMessage(''); //set message to ""
}

}; 

  return (
    <div>
      <h2>Add Stock</h2>
      {
                message ? 
                
                <h4 align="center">{message}</h4> :
                 <h4 align="center">{error}</h4>
                
                
            }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="stockname" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        {/* Add more fields here as needed */}
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default AddStock;
