import React, { useState } from 'react'; 
import axios from 'axios';
import './Registration.css'
import config from '../config.js'
import { Navigate } from 'react-router-dom';
 
export default function Registration() { 
    const [formData, setFormData] = useState({ 
        name: '', 
        age: '', 
        contact: '', 
        aadhar: '',
        email:'',
        password:'', 
        panno: '', 
        annualIncome: '', 
        source: '', 
        bankName: '', 
        bankAccount: '' 
    }); 
    //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');
 
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value 
        }); 
    }; 
 
    const handleSubmit = async(e) => { 
        e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertstockpurchaser`,formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
            name: '', 
            age: '', 
            contact: '', 
            aadhar: '', 
            email:'',
            password:'',
            panno: '', 
            annualIncome: '', 
            source: '', 
            bankName: '', 
            bankAccount: '' 
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

            <h2 align="center">Registration Form</h2> 
            <h3 align="center"><u>Stock Purchaser Registration</u></h3>
            {
                message ? 
                
                <h4 align="center">{message}</h4> :
                 <h4 align="center">{error}</h4>
                
                
            }
            <div className="big-box"> 
                <form onSubmit={handleSubmit}> 
                    <div className="inner-box"> 
                        <div className="form-group"> 
                            <label htmlFor="name" className="label-field">Name</label> 
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="age" className="label-field">Age</label> 
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="contact" className="label-field">Contact</label> 
                            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="email" className="label-field">Email</label> 
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="input-field" /> 
                        </div>
                        <div className="form-group"> 
                            <label htmlFor="password" className="label-field">Password</label> 
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter New Password" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="aadhar" className="label-field">Aadhar Number</label> 
                            <input type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter your Aadhar number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="panno" className="label-field">PAN Number</label> 
                            <input type="text" id="panno" name="panno" value={formData.panno} onChange={handleChange} placeholder="Enter your PAN number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="annualIncome" className="label-field">Annual Income</label> 
                            <input type="text" id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange} placeholder="Enter your annual income" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="source" className="label-field">Source of Income</label> 
                            <input type="text" id="source" name="source" value={formData.source} onChange={handleChange} placeholder="Enter your source of income" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="bankName" className="label-field">Bank Name</label> 
                            <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Enter your bank name" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label
htmlFor="bankAccount" className="label-field">Bank Account</label> 
<input type="text" id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} placeholder="Enter your bank account number" className="input-field" /> 
</div> 
</div> 

<button type="submit" className="button">Register</button>

</form> 
</div> 
<div className="form-group"> 
</div> 
</div> 

); 
}