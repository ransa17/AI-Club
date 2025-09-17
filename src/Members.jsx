import React from 'react';
import "./App.css";

const membersData = [
  {
    role: "Club President",
    name: "Amit ",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Leading the AI Club with vision and passion.",
    color: "member-card-gold",
  },
  {
    role: "Vice President",
    name: "Priya ",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Supporting club operations and member engagement.",
    color: "member-card-silver",
  },
  {
    role: "Member",
    name: "Rahul ",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Managing communications and records.",
    color: "member-card-blue",
  },
  {
    role: "Member",
    name: "Sneha ",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Active participant in AI projects.",
    color: "member-card-green",
  },
  {
    role: "Member",
    name: "Deepak ",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Active participant in AI projects.",
    color: "member-card-teal",
  },
];

function Members() {
  return (
    <section className="members-section" id="members">
      <h2>Members</h2>
      <div className="members-grid">
        {membersData.map((m, idx) => (
          <div className={`member-card ${m.color}`} key={idx} title={m.role}>
            <div className="member-avatar">
              <img src={m.avatar} alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            <p className="member-role">{m.role}</p>
            <p className="member-bio">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;
