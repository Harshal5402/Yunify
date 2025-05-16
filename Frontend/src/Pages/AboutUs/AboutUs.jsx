import React, { useEffect, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.querySelector(".about-text");
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="aboutus-container">

      {/* <div className="background-animation">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div> */}

      <div className={`about-text ${fadeIn ? "fade-in" : ""}`}>
        <h1>About Yunify</h1>
        <p>
          Yunify is dedicated to empowering businesses through innovative
          technology solutions that streamline operations and maximize growth.
        </p>

        <div className="mission-vision-goals">
          <div>
            <h2>Our Mission</h2>
            <p>To unify technology and creativity for a better tomorrow.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>Be the leading platform that transforms ideas into reality.</p>
          </div>
          <div>
            <h2>Our Goals</h2>
            <ul>
              <li>Deliver exceptional user experiences</li>
              <li>Innovate continuously</li>
              <li>Build lasting partnerships</li>
            </ul>
          </div>
        </div>

        <h2 className="timeline-title">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              Yunify was founded with a vision to innovate the tech landscape.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2019</div>
            <div className="timeline-content">
              Launched first product that revolutionized client management.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              Expanded globally with partners across 5 countries.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              Introducing AI-powered solutions to boost efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
