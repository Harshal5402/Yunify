import React from "react";
import "./WhyChoose.css";

const features = [
  {
    icon: "fa-headset",
    title: "Fast Support",
    desc: "24/7 responsive customer support to resolve your issues quickly."
  },
  {
    icon: "fa-dollar-sign",
    title: "Affordable Pricing",
    desc: "Best value plans that suit your business needs and budget."
  },
  {
    icon: "fa-users",
    title: "Expert Team",
    desc: "A dedicated and skilled team with years of experience."
  },
  {
    icon: "fa-thumbs-up",
    title: "Trusted by Clients",
    desc: "Hundreds of happy clients across various industries."
  }
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">
          Why Choose <span className="highlight">Yunify?</span>
        </h2>
        <p className="section-subtitle">Feature Highlights that make us stand out</p>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="icon-wrapper">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
