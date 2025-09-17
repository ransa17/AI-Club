import React from "react";
import "./App.css";

function Events() {
  return (
    <section className="events-section" id="events">
      <h2>Upcoming Events</h2>
      <div className="event-timeline">
        <div className="event-card featured">
            <img
              className="event-img"
              src="./event.jpeg"
              alt="AI Innovation Hackathon 2025"
            />
          <h3>AI Innovation Hackathon 2025</h3>
          <div className="event-meta">
            <span className="event-date">March 15-16, 2025</span>
            <span className="event-venue">KEC Main Auditorium</span>
            <span className="event-badge">Featured</span>
          </div>
          <p>
            Build, innovate, and showcase your AI skills! Prizes, networking, and mentoring opportunities await.
          </p>
          <button className="register-btn">Register Now</button>
          <div className="event-countdown">
            <span>⏳ 178 days left</span>
          </div>
        </div>
        <div className="event-card">
              <img
              className="event-img"
              src="./event.jpeg"
              alt="AI Innovation Hackathon 2025"
            />
          <h3>Weekly AI Study Group</h3>
          <div className="event-meta">
            <span className="event-date">Every Saturday</span>
            <span className="event-venue">Room 204</span>
            <span className="event-badge small">RSVP</span>
          </div>
          <p>
            Join our peer-led study group to discuss and learn AI topics hands-on.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Events;
