import React from 'react'
import "./Footer.css"

import { SiInstagram } from "react-icons/si";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import logo from "../../assets/omnifood-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" src={logo} alt="Omnifood logo" />
          </a>
          <ul className="social-links">
            <li><a href="#"><SiInstagram className='social-icon' /> </a></li>
            <li><a href="#"><FaFacebookF className='social-icon' /> </a></li>
            <li><a href="#"><FaTwitter className='social-icon' /> </a></li>
          </ul>

          <p className="copyright">Copyright &copy; 2027 by Omnifood, Inc. All rights reserved </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="address-link" href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a className="address-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><a href="#">Create account</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">iOS app</a></li>
            <li><a href="#">Android app</a></li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a href="#">About Omnifood</a></li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Cooking partners</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a href="#">Recipe directory</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Privacy & terms</a></li>
        
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

// Phone: 415-201-6370
// Email: hello@omnifood.com