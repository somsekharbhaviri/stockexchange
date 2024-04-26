import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Navigate
import '../style.css';
import AdminLogin from '../admin_apps/AdminLogin';
import UserLogin from '../userpages/UserLogin';
import Registration from './Registeration';
import Home from './Home';

export default function HomeNavBar({ onAdminLogin, onUserLogin }) {
  return (
    <>
      <h2 align="center">Stock Management</h2>
      <div align="left" className='navbar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li className="dropdown">
            <Link>Login</Link>
            <div className="dropdown-content">
              <Link to="/userlogin">User Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
          <li><Link to='/registration'>Register</Link></li>
        </ul>
        <div className='hr'>
          <hr />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin onAdminLogin={onAdminLogin}/>} />
          <Route path='/userlogin' element={<UserLogin onUserLogin={onUserLogin} />} />
          <Route path='/registration' element={<Registration/>}/>      
          {/* Add a default route to handle unmatched paths */}
        </Routes>
      </div>
    </>
  )
}
