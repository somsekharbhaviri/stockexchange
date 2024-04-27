import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import config from '../config.js'
import '../userpages/profile.css';

export default function AdminLogin({ onAdminLogin }) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password}=formData
  
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`,{email,password});
  
      if (response.data != null) {
        onAdminLogin(); 
        sessionStorage.setItem('admin', JSON.stringify(response.data));
        navigate("/adminhome"); 
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };
  
  return (
    <div className="profile-container">
      <h1 className="profile-heading"><u>Welcome to Admin Login Page</u></h1>
      <div className="login-form">
        <h2 className="form-heading">Admin Login</h2>
        {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="password-input">
              <input
                type={formData.showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className="show-password" onClick={togglePassword}>
                <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <button type="submit" className="button" >Login</button>
        </form>
      </div>
    </div>
  );
}
