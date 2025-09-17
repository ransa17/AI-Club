import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Resources from "./Resources";
import Events from "./Events";
import Achievements from "./Achievements";
import Footer from "./Footer";
import Members from "./Members";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <HeroSection />
      <Resources />
      <Events />
      <Achievements />
       <Members/>
      <Footer />
    </div>
  );
}

export default App;
