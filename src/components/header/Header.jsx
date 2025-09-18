import React from 'react';
import Cart from './Cart';

const Header = ({ cartCount, searchTerm, onSearchChange, onLogout, currentUser }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>ONYX SHOP</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="header-right">
          <Cart cartCount={cartCount} />
          <div className="user-info">
            <span>Welcome, {currentUser?.username}!</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;