import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Choose Service",
    description: "Select the service you need from our wide range.",
    iconClass: "fa-solid fa-screwdriver-wrench",
  },
  {
    id: 2,
    title: "Register",
    description: "Sign up with your basic details quickly.",
    iconClass: "fa-solid fa-user-plus",
  },
  {
    id: 3,
    title: "Get Support",
    description: "Sit back and enjoy our premium support service.",
    iconClass: "fa-solid fa-headset",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card fade-in">
            <div className="icon">
              <i className={step.iconClass}></i>
            </div>
            <div className="step-number">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="cta-section fade-in">
        <h3>Ready to Experience Our Service?</h3>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HowItWorks;
