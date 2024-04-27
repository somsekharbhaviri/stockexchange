import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminNavBar from './admin_apps/AdminNavBar';
import HomeNavBar from './default/HomeNavBar';
import UserNavBar from './userpages/UserNavBar';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    const userLoggedIn = sessionStorage.getItem('isUserLoggedIn') === 'true';

    setIsAdminLoggedIn(adminLoggedIn);
    setIsUserLoggedIn(userLoggedIn);

    console.log("Admin Logged In:", adminLoggedIn);
    console.log("User Logged In:", userLoggedIn);

  }, []);

  const onAdminLogin = () => {
    sessionStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onUserLogin = () => {
    sessionStorage.setItem('isUserLoggedIn', 'true');
    setIsUserLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <UserNavBar />
        ) : (
          <HomeNavBar
            onAdminLogin={onAdminLogin}
            onUserLogin={onUserLogin}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
