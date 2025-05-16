import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend integration yaha karo, e.g. fetch or axios post request
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "" }); // Clear form
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Mobile Number
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              pattern="^\+?\d{10,15}$"
              title="Enter a valid mobile number"
            />
          </label>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {submitted && (
            <p className="success-msg">
              Thank you for contacting us! We will get back soon.
            </p>
          )}
        </form>

        <div className="contact-info">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Yunify Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.115735062478!2d75.88290097534882!3d22.723939279384286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4adcbf1189%3A0x8843b566903d68a7!2sHotel%20Kanchan%20Tilak!5e0!3m2!1sen!2sin!4v1747373183742!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-icons">
            <div className="icon-item">
              <i className="fas fa-phone"></i>
              <p>+91 7024223240</p>
            </div>
            <div className="icon-item">
              <i className="fas fa-envelope"></i>
              <p>contact@yunify.in</p>
            </div>
            <div className="icon-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>
                Office No. 305, Akbar Ali Complex, Hotel Kanchan Tilak <br />
                Near by 56 Dukaan, New Palasiya, MG Road, Indore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
