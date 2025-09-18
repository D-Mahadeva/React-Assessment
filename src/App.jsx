import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Product from './components/body/Product';
import Login from './components/Login';
import { products } from './data/products';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Check for existing user session on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Update cart count when cart items change
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setCartItems([]);
    setCartCount(0);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Header 
        cartCount={cartCount}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      <main className="main-content">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <Product 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="no-products">No products found matching "{searchTerm}"</div>
        )}
      </main>
    </div>
  );
}

export default App;