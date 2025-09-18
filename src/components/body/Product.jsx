import React from 'react';

const Product = ({ product, onAddToCart }) => {

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">₹{formatPrice(product.price)}</div>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;