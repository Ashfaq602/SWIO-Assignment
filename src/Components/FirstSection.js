import React from "react";
import Navbar from "./Navbar";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div>
    <Navbar />
    <div className="first-section">
      <h1>Sleek2</h1>
      <p>The ultimate music accessory for your Mac</p>
      <p>
        Sleeve sits on the desktop, displaying and controlling the music you’re
        currently playing in<img src="https://replay.software/sleeve/images/AppMusicDark@2x.png"></img> Apple Music,<img src="https://replay.software/sleeve/images/AppSpotifyDark@2x.png"></img>
        Spotify, and <img src="https://replay.software/sleeve/images/AppDopplerDark@2x.png"></img> Doppler.
      </p>
      <button className="cta-button"><img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"></img><a href="https://apps.apple.com/us/app/sleeve-for-spotify-music/id1606145041?mt=12">Mac Apple Store</a></button>
      <button>Buy Directly-$5.99</button>
    </div>
   
    </div>
    
  );
};

export default FirstSection;
