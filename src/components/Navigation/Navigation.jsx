import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <a className="main-nav-link" href="#">
            How it Works
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="#">
            Meals
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="#">
            Testimonials
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="#">
            Pricing
          </a>
        </li>
        <li>
          <a className="main-nav-link nav-cta" href="#">
            Try for free
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
