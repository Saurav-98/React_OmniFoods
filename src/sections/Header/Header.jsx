import React from 'react';
import './Header.css';
import logo from '../../assets/omnifood-logo.png';
import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Omnifood logo" className="logo" />
      <Navigation />
    </div>
  );
};

export default Header;
