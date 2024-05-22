import React from 'react';
import './FourthSection.css';

const FourthSection = () => {
    
    return (
        <div>
           <h5>INTEGRATIONS</h5>
           <h1>Like, Scrobble.</h1>
           <div className="feature-container1">
           <div className="feature-card1">
               <img src="https://replay.software/sleeve/images/IntegrationLastfmDark@2x.png"  />
              
               
               <p>Sleeve integrates with Last.fm so you never miss a track. Simply sign in and start scrobbling.</p>
               <h4>Last.fm account required</h4>
           </div>
           <div className="feature-card1">

               <img src="https://replay.software/sleeve/images/IntegrationSpotifyDark@2x.png"  />
              
               <p>With Sleeve 2 you can now like tracks in Spotify, without ever having to switch away from Sleeve.</p>
               <h4>A free Spotify Developer account is required</h4>
           </div>
           
        </div>
        </div>
    );
};

export default FourthSection;