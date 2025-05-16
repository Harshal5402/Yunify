import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { token, setToken } = useContext(StoreContext);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <img src={assets.Yunify_logo} alt="Yunify Logo" className="logo" />

      <div>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setMenu("About-Us")}
            className={menu === "About-Us" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setMenu("Services")}
            className={menu === "Services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/clients"
            onClick={() => setMenu("Clients")}
            className={menu === "Clients" ? "active" : ""}
          >
            Clients
          </Link>
          <a
            href="/Contact"
            onClick={() => setMenu("Contact-Us")}
            className={menu === "Contact-Us" ? "active" : ""}
          >
            Contact Us
          </a>
          
          {token && (
            <Link
              to={role === "admin" ? "/adminDashboard" : "/userDashboard"}
              onClick={() => setMenu("Dashboard")}
              className={menu === "Dashboard" ? "active" : ""}
            >
              Dashboard
            </Link>
          )}
        </ul>
      </div>

      <ThemeToggle />

      {!token ? (
        <button className="cta-button" onClick={() => setShowLogin(true)}>
          Dashboard/Login
        </button>
      ) : (
        <div className="logged-in-buttons">
          {/* <Link to="/dashboard" className="cta-button">
      Dashboard
    </Link> */}
          <button className="cta-button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
