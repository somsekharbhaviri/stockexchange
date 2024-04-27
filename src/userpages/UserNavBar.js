import React from 'react';
import { Routes, Route, Link, Navigate,useNavigate } from 'react-router-dom';
import Stocks from './Stocks';
import Portfolio from './Portfolio';
import Transactions from './Transactions';
import Profile from './accountprofile';
import '../style.css';
import AboutUs from './About';

export default function UserNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('Stockmember');
    navigate('/userlogin');
    window.location.reload()
  };

  return (
    <div align="left" className='navbar'> 
      <div className='ul'>
        <ul>
          <li><Link to='/' className="Home">Stock Manager</Link></li>    
        </ul>
        
        
          <ul>
            <li style={{marginLeft:"50px"}}><Link to='/home'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
            <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

          </ul>
        
        
        <div className='hr'>
          <hr/>
        </div>
      </div>

      <div>
        <Routes>
              <Route path='/' element={<Stocks />} />
              <Route path='/home' element={<Stocks />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/help' element={<AboutUs />} />
              <Route path='/login' element={<Navigate to="/home" />} />
              <Route path='/registration' element={<Navigate to="/" />} />
        </Routes>  
        
        <br/>
        <br/>
        
        <footer>
          <p style={{color:"white"}}>&copy; 2024 Stocksmanager. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
