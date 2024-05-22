// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
       <h1><a href="https://replay.software/">REPLAY</a></h1>
      </div>
      <ul className="middle-links">
        <li><a href="https://replay.software/sleeve"><img src="https://replay.software/replay/images/Sleeve@2x.png" alt="Sleeve" /> Sleeve</a></li>
        <li><a href="https://replay.software/umbra"><img src="https://replay.software/replay/images/Umbra@2x.png" alt="Umbra" /> Umbra</a></li>
      </ul>
      <ul className="nav-links">
        <li><a href="https://replay.software/updates">Updates</a></li>
        <li><a href="https://replay.software/help/sleeve">Help</a></li>
        <li><a href="https://x.com/softwarereplay">X</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
