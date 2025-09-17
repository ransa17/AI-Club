import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

function useCountUp(target, duration, shouldStart) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const end = target;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);
  return count;
}

function Stat({ icon, target, label }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(target, 1200, visible);
  return (
    <div className="stat-block" ref={ref}>
      <span className="stat-icon">{icon}</span>
      <span className="stat-num">{count}+ </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-animated" />
      <div className="hero-content">
        <h1 className="hero-headline">
          We only <span className="teal-highlight">empower</span> what we are really passionate about.
        </h1>
        <p className="hero-subtext">
          Welcome to the Katihar Engineering College AI Club. Join our innovative community, learn, build, and make an impact in the world of Artificial Intelligence!
        </p>
        <button className="cta-btn ripple">Explore Resources – Make an Impact</button>
        <div className="hero-stats">
          <Stat icon="👥" target={25} label="Active Projects" />
          <Stat icon="🛠️" target={12} label="Workshops" />
          <Stat icon="📄" target={5} label="Published Papers" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
