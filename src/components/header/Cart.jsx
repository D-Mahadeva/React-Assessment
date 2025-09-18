import React from 'react';

const Cart = ({  cartCount }) => {
  return (
    <div className="cart">
      <span>🛒</span>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default Cart;