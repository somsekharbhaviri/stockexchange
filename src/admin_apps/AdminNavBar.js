import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import AdminHome from './AdminHome'
import ViewStockPurchaser from './ViewStockPurchaser'
import ChangeAdminPwd from './ChangeAdminPwd'
import AddStock from './AddStocks'
import './admin.css'

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  try {
    sessionStorage.removeItem('isAdminLoggedIn');
    sessionStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload();
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

     
  return (
    <div align="left" className='navbar'>     
       <h2>ADMIN PAGE</h2>
        
        <ul>
            <li><Link to='/adminhome'>Admin Home</Link></li>
            <li><Link to='/viewstockpurchaser'>View Stock Purchaser</Link></li>
            <li><Link to="/changeadminpwd">Change Password</Link></li>
            <li><Link to='/addstocks'>Add Stocks</Link></li>

            <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

            
        </ul>
        <div className='hr'>
          <hr/>
       </div>
        <Routes>
            <Route path='/adminhome' Component={AdminHome}/>
            <Route path='/viewstockpurchaser' Component={ViewStockPurchaser}/>
            <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
            <Route path='/addstocks' element={<AddStock/>}/>
        </Routes>  
    </div>
  )
}