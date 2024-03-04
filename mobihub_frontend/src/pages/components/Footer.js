import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer"> 
      <div className="footer-section">
        <h3>Categories</h3>
        <ul>
          <li><Link to="/category1">Category 1</Link></li>
          <li><Link to="/category2">Category 2</Link></li>
          <li><Link to="/category3">Category 3</Link></li>
          <li><Link to="/category4">Category 4</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Information</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/shipping">Shipping Information</Link></li>
          <li><Link to="/returns">Returns & Exchanges</Link></li>
          <li><Link to="/track">Track Your Order</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for updates</p>
        <form>
          <input type="email" placeholder="Your Email" className="input-field" />
          <Link to="#" className="link-button">Subscribe</Link>
        </form>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Your Ecommerce Website. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
