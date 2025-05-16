import React from "react";
import Slider from "react-slick";

import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "Amit Sharma",
    message: "Yunify has transformed our business. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    message: "Excellent service and support. Great experience!",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    message: "Very professional team. Would love to work again.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-wrapper">
        <div className="slider-box">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card fade-in">
                <p className="message">"{item.message}"</p>
                <h4 className="name">- {item.name}</h4>
                {item.rating && (
                  <div className="stars">
                    {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
