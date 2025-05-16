import React from "react";
import "./LogoMarque.css";
import Marquee from "react-fast-marquee";
import { assets } from "../../assets/assets";

const LogoMarque = () => {
  return (
    <div className="marquee-container">
      <h1>Our Clients</h1>
      <p>
        We take pride in partnering with innovative companies and delivering
        results that drive growth and trust.
      </p>

      <Marquee pauseOnHover speed={60} className="marquee">
        {Object.entries(assets).map(
          ([key, src]) =>
            key !== "Yunify_logo" && (
              <img key={key} src={src} alt={key} className="client-logo" />
            )
        )}
      </Marquee>
    </div>
  );
};

export default LogoMarque;
