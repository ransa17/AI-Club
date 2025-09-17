import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./App.css";


const resourceData = [
  {
    icon: "💡",
    title: "AI Tutorials",
    desc: "Step-by-step guides to master AI concepts.",
    details: "Learn supervised, unsupervised, and reinforcement learning with examples and hands-on labs.",
    color: "resource-card-blue",
  },
  {
    icon: "📚",
    title: "Research Papers",
    desc: "Read the latest published research from our club.",
    details: "Access our most recent publications in AI, ML, and Data Science.",
    color: "resource-card-green",
  },
  {
    icon: "🎥",
    title: "Video Lectures",
    desc: "Watch curated lectures and workshops.",
    details: "Over 50 hours of content from experts and club alumni.",
    color: "resource-card-teal",
  },
  {
    icon: "🔗",
    title: "Useful Links",
    desc: "Access top AI tools, datasets, and resources.",
    details: "Datasets, open source libraries, and online competitions.",
    color: "resource-card-orange",
  },
];




function Resources() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="resources-section" id="resources">
      <h2>Resources</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="resources-grid"
      >
        {resourceData.map((r, idx) => (
          <div className={`resource-card ${r.color}`} key={idx} title={r.desc}>
            <div className="resource-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <button className="view-btn ripple">View Details</button>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Resources;
