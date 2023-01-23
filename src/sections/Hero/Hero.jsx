import React from 'react';
import './Hero.css';

import heroImg from '../../assets/hero.png';
import customer1 from '../../assets/customers/customer-1.jpg';
import customer2 from '../../assets/customers/customer-2.jpg';
import customer3 from '../../assets/customers/customer-3.jpg';
import customer4 from '../../assets/customers/customer-4.jpg';
import customer5 from '../../assets/customers/customer-5.jpg';
import customer6 from '../../assets/customers/customer-6.jpg';
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
            Learn more <span> &darr;</span>
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={customer1} alt="customer photo" />
              <img src={customer2} alt="customer photo" />
              <img src={customer3} alt="customer photo" />
              <img src={customer4} alt="customer photo" />
              <img src={customer5} alt="customer photo" />
              <img src={customer6} alt="customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
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
