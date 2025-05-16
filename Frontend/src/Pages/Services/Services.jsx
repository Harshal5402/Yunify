import React, { useState } from 'react';
import './Services.css';

const serviceData = [
  {
    icon: 'fa-user-tie',
    title: 'HR Solutions',
    services: [
      'Payroll Management',
      'Recruitment',
      'Permanent Staffing',
      'Temporary Staffing',
      'Labour Contracts',
      'White Collar Hiring',
      'Blue Collar Hiring',
      'IT Recruitment',
      'BPO Hiring',
      'Corporate Hiring',
    ],
  },
  {
    icon: 'fa-broom',
    title: 'Facility',
    services: ['Facility Management', 'Security Services'],
  },
  {
    icon: 'fa-chart-line',
    title: 'Sales/Marketing',
    services: [
      'Sales Force Management',
      'Marketing Solutions',
      'Influencer Marketing',
      'Loyalty Program',
      'Visual Merchandising',
    ],
  },
  {
    icon: 'fa-laptop-code',
    title: 'Tech & Digital',
    services: [
      'Website Solutions',
      'Software Solutions',
      'SaaS Program (360)',
      'Digital Marketing',
      'SEO',
      'Content Creating',
    ],
  },
  {
    icon: 'fa-gift',
    title: 'Other',
    services: ['Corporate Gifting', 'Logo Designing', 'Compliance Management'],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {serviceData.map((section, index) => (
          <div
            key={index}
            className={`services-card ${openIndex === index ? 'active' : ''}`}
          >
            <div className="card-header" onClick={() => toggle(index)}>
              <div className="header-left">
                <i className={`fas ${section.icon} icon`}></i>
                <h3>{section.title}</h3>
              </div>
              <span>{openIndex === index ? '−' : '+'}</span>
            </div>
            <div
              className="card-content"
              style={{
                maxHeight: openIndex === index ? '500px' : '0px',
              }}
            >
              <ul>
                {section.services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


      <div className="background-animation">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div>
    </div>
  );
};

export default Services;
