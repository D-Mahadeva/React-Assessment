import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      navigate('/products');
    }
  }, [navigate]);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/products" element={
          currentUser ? (
            <Products onLogout={handleLogout} currentUser={currentUser} />
          ) : (
            <Login onLogin={handleLogin} />
          )
        } />
      </Routes>
    </div>
  );
}

export default App;