import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom"

const Header = ({ setShowLogin, setIsSignup }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services')
  }

  const handleRegisterClick = () => {
    setIsSignup(true);   
    setShowLogin(true);    
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to Yunify</h2>
        <p>"Your one-stop solution for business services"</p>
        <div className="cta-btn">
          <button onClick={handleClick}>View Services</button>
          <button onClick={handleRegisterClick}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
