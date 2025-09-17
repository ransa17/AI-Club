import React from "react";
import { motion } from "framer-motion";

import "./App.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div>
          <h4>Contact Us</h4>
          <p>Email: aiclub@kec.edu.in</p>
          <p>Phone: +91 00000 43210</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#achievements">Achievements</a></li>
          </ul>
        </div>
        
       <div>
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit" className="ripple">Subscribe</button>
          </form>
          <div className="social-icons">
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://twitter.com/" aria-label="Twitter">🐦</motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://linkedin.com/" aria-label="LinkedIn">🔗</motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://github.com/" aria-label="GitHub">🐙</motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Katihar Engineering College AI Club. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;