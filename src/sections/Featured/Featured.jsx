import React from 'react';
import './Featured.css';
import logo1 from '../../assets/logos/techcrunch.png';
import logo2 from '../../assets/logos/business-insider.png';
import logo3 from '../../assets/logos/the-new-york-times.png';
import logo4 from '../../assets/logos/forbes.png';
import logo5 from '../../assets/logos/usa-today.png';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured-heading">As featured in</h2>
        <div className="logo-container">
          <img src={logo1} alt="Techcrunch logo" />
          <img src={logo2} alt="Business insider logo" />
          <img src={logo3} alt="The New York Times logo" />
          <img src={logo4} alt="Forbes logo" />
          <img src={logo5} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
