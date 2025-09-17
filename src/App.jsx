import React, { useState } from "react";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/logo192.png" alt="AI Club" className="logo" />
        <span className="nav-title">Katihar Engineering College AI Club</span>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#resources">Resources</a>
        <a href="#events">Events</a>
        <a href="#achievements">Highlights</a>
        <a href="#contact">Contact</a>
        <button className="join-btn">Join Club</button>
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
