import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services')
  }
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to Yunify</h2>
        <p>"Your one-stop solution for business services"</p>
        <div className="cta-btn">
          <button onClick={handleClick}>View Services</button>
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
