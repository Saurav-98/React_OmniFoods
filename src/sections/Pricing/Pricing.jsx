import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2--cols">
        <div className="pricing-plan">
          <header>
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's just $13 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>Order times are between 11am and 9pm</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>Delivery is free</span>
            </li>
          </ul>
          <div className="plan-signup">
            <a href="#" className="btn btn--primary">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan">
          <header>
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. That's just $11 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>2 meal per day</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> <span>Order 24/7</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-signup">
            <a href="#" className="btn btn--primary">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan"></div>
      </div>
    </section>
  );
};

export default Pricing;
