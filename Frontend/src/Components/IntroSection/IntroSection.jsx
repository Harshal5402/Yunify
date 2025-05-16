import React, { useEffect, useState } from "react";
import "./IntroSection.css";

const IntroSection = () => {
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-card ${slideUp ? "slide-up" : ""}`}>
      <h1>Empowering Your Digital Future</h1>
      <p>
        Yunify is dedicated to transforming businesses through smart, scalable,
        and sustainable digital solutions. From strategy to execution, we help
        you build a strong digital presence and achieve your goals with
        innovation and precision.
      </p>
    </div>
  );
};

export default IntroSection;
