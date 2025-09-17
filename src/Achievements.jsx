import React, { useRef, useEffect } from "react";
import "./App.css";

const achievementData = [
  {
    icon: "🏆",
    title: "Hackathon Winner",
    desc: "Team Alpha secured 1st place in AI Innovation Hackathon 2024.",
  },
  {
    icon: "🎖️",
    title: "Workshop Champion",
    desc: "Conducted 12 successful AI workshops in 2024.",
  },
  {
    icon: "🥇",
    title: "Innovation Award",
    desc: "Awarded for 'AI for Social Good' project.",
  },
];

function Achievements() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const timer = setInterval(() => {
      if (carousel) {
        scrollAmount += 260;
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="achievements-section" id="achievements">
      <h2>Recent Achievements</h2>
      <div className="achievements-carousel" ref={carouselRef}>
        {achievementData.map((a, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
