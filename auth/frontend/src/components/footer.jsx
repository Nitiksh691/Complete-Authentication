import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
       <div className="footer-navigation">
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/jobs">jobs</Link>
          <Link to="/faq">faq</Link>
          <Link to="/advertise">advertise</Link>
          <Link to="/terms">terms</Link>
          <Link to="/privacy">privacy</Link>
       </div>

       <div className="footer-credits">
          <strong>a Nitiksh Das production</strong>
          <br/>
          TheNeuralNets © 2025
       </div>
    </div>   
  );
};

export default Footer;
