import React, { useState } from 'react';
import Header from './header/Header';
import Product from './body/Product';
import { products } from '../data/products';

const Products = ({ onLogout, currentUser }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header 
        cartCount={cartItems.length}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onLogout={onLogout}
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
    </>
  );
};

export default Products;