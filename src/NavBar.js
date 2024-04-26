import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Stocks from './userpages/Stocks';
import Portfolio from './userpages/Portfolio';
import Transactions from './userpages/Transactions';
import Help from './userpages/Help';
import Profile from './userpages/accountprofile';
import Login from './userpages/Login';
import UserRegistration from './userpages/Registeration';
import './style.css';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div align="left" className='navbar'> 
      <div className='ul'>
        <ul>
          <li className='Home'onClick={()=>setIsLoggedIn(false)}><Link to='/' className="Home">Stock Manager</Link></li>    
        </ul>
        
        {isLoggedIn && (
          <ul>
            <li style={{marginLeft:"50px"}}><Link to='/home'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
          </ul>
        )}
        
        <div className='hr'>
          <hr/>
        </div>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn ? (
            <>
              <Route path='/home' element={<Stocks />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/help' element={<Help />} />
              <Route path='/login' element={<Navigate to="/home" />} />
              <Route path='/registration' element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/registration' element={<UserRegistration />} />
              <Route path='*' element={<Navigate to="/login" />} />
            </>
          )}
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
