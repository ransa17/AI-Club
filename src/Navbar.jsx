import React, { useState, useEffect } from "react";
import "./App.css";

function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="nav-logo">
        <img src="/college_logo.png" alt="AI Club" className="logo" />
        <img src="/ashna_logo.png" alt="AI Club" className="logo" />
        <span className="nav-title">Katihar Engineering College AI Club</span>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#resources">Resources</a>
        <a href="#events">Events</a>
        <a href="#achievements">Highlights</a>
        <a href="#members">Members</a>

        <a href="#contact">Contact</a>
        <button className="join-btn ripple">Join Club</button>
      </div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Navbar;
