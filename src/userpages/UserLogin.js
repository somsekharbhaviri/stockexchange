import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from'../config.js';
import { useNavigate } from 'react-router-dom';

export default function UserLogin({ onUserLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('Stockmember');
    if (loggedInUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkstockpurchaserlogin`, formData);
      if (response.data != null) {
        onUserLogin();
        sessionStorage.setItem('Stockmember', JSON.stringify(response.data));
        navigate("/home");
      } else {
        setMessage("Login Failed")
        setError("")
      }
    } catch (error) {
      setMessage("")
      setError(error.message)
    }
  };
 
  return (
    <div>
      <h3 align="center"><u>User Login</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
