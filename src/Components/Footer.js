import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="social-links">
          <h3>SUPPORT</h3>
          <a href="https://replay.software/help/sleeve">DOCS</a><br /><br />
          <a href ="https://lookup.replay.software/">LOOKOUT PURCHASES</a><br /><br />
          {/* <li><a href=""><i className="fab fa-X"></i></a></li> */}
          <li><a href="https://www.instagram.com/musicsleeve/"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.facebook.com/sleeveapp"><i className="fab fa-facebook"></i></a></li>
        </ul>
        <a href="mailto:support@replay.software">Email us</a>

      </footer>
    </div>
  );
};

export default Footer;
