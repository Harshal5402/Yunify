import React from 'react';
import "./SectionService.css";
import { useNavigate } from "react-router-dom"; 

const services = [
  {
    title: "Payroll Management",
    desc: "Streamline your payroll process with our reliable solutions.",
    iconClass: "fa-solid fa-hand-holding-dollar",
  },
  {
    title: "Permanent Staffing",
    desc: "Hire top talent for long-term roles to drive your business forward.",
    iconClass: "fa-solid fa-user-tie",
  },
  {
    title: "Recruitment Solutions",
    desc: "Efficient recruitment tailored to your company’s needs.",
    iconClass: "fa-solid fa-briefcase",
  },
  {
    title: "Digital Marketing",
    desc: "Boost your online presence with our marketing strategies.",
    iconClass: "fa-solid fa-bullhorn",
  },
  {
    title: "SEO Solutions",
    desc: "Rank higher and attract more traffic with our SEO services.",
    iconClass: "fa-solid fa-magnifying-glass-chart",
  },
  {
    title: "Software Solutions",
    desc: "Custom software built to optimize your operations.",
    iconClass: "fa-solid fa-code",
  },
];

const SectionService = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/services')
  }

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We provide specialized services for the following:
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <i className={service.iconClass}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <button className="explore-btn" onClick={handleClick}>Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionService;
