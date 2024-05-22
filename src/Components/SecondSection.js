import React from 'react';
import './SecondSection.css';

const SecondSection = () => {
  return (
    <div className="features-section">
      <h1>Themes. Unlimited themes.</h1>
      <h2>Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</h2>
      <div className="container">
      <div className="features-grid">
        <div className="feature-card">
          <img src="https://i1.sndcdn.com/artworks-000254510660-noiwo8-t500x500.jpg" alt="" />
          <h3>Creation Comes Alive</h3>

          <p>Pete Biscuit</p>
        </div>
        <div className="feature-card">
          <img src="https://i.scdn.co/image/ab67616d00001e02553de6179fd1ba659a9fbbb7"></img>
          <h3>Are you Listening</h3>
          <p>Chelsea Cutler</p>
        </div>
        {/* <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div> */}
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
