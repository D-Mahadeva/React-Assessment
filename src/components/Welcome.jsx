import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to ONYX SHOP</h2>

        <p className="welcome-text">
          Discover exclusive collections, latest trends, and premium shopping
          experience.
        </p>

    
        <div className="signup-link">
           <Link to="/login" className="button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
