import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>Yunify</h3>
          <p>
            Your trusted partner for quality services. We bring solutions to
            your doorstep with ease and professionalism.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/aboutus" className="footer-link">
            About Us
          </a>
          <a href="/services" className="footer-link">
            Services
          </a>
          <a href="/Contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-phone-alt"></i> +91 7024223240
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@yunify.in
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Office No. 305, Akbar Ali
            Complex, Hotel Kanchan Tilak Near by 56 Dukaan, New Palasiya, MG
            Road, Indore
          </p>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for latest updates and offers.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="newsletter-form"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/p/Yunify-61569461881722/"
          target="_blank"
          rel="noreferrer"
          className="social-icon facebook"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yunify-hr-and-it-solution-20b704341/"
          target="_blank"
          rel="noreferrer"
          className="social-icon linkedin"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/yunify_2024/"
          target="_blank"
          rel="noreferrer"
          className="social-icon instagram"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@YunifyhrITsolutions"
          target="_blank"
          rel="noreferrer"
          className="social-icon youtube"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>

        <a
          href="https://wa.me/+919424899939"
          target="_blank"
          rel="noreferrer"
          className="social-icon whatsapp"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Yunify. All rights reserved. Designed
        with <i className="fas fa-heart" style={{ color: "red" }}></i> by Yunify Team.
      </div>
    </footer>
  );
};

export default Footer;
