import React from 'react';
import './Hero.css';

import heroImg from '../../assets/hero.png';
const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-desc">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="#" className="btn btn--primary">
            Start eating well
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src={heroImg}
            alt="woman enjoying onmifood delicasy, healthy meals in storage container, and food bowls on a table"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
