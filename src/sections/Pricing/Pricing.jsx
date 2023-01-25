import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Feature from '../../components/Feature/Feature';
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
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" />{' '}
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              {' '}
              <RxCross2 className="list-icon" />{' '}
              
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
              <span><strong>2</strong> meal per day</span>
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> <span>Order <strong>24/7</strong></span>
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
       
      </div>
      <div className="container">
        <aside className="plan-detail">
          Prices include all applicable taxes. You can cancel at any time. Both plans include the following
        </aside>
      </div>


      <div className="container grid grid--4--cols featured-grid">
        <Feature />
        
      </div>
    </section>
  );
};

export default Pricing;
