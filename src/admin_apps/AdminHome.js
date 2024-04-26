import React, { useEffect, useState } from 'react';

export default function AdminHome() {
  const [AdminData, setAdminData] = useState("");

  useEffect(() => {
    const storedAdminData = localStorage.getItem('Stockadmin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData)
    }
  }, []);
  return (
    <div>
      
      <div style={styles.container}>
        <h1 align="center">Welcome</h1>
        <h3 align="center">Manage your stock exchange efficiently.</h3>
        <h3 align="center"><u>YOU CAN PERFORM</u></h3>
        <h3 align="center">1.View stock members</h3>
        <h3 align="center">2.Delete stock members</h3>
        <h3 align="center">3.Change password</h3>
        <h3 align="center">4.Add stocks</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
  card: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};
