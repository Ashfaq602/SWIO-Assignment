import React from 'react';
// import Navbar from './Components/Navbar';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from  './Components/ThirdSection';
import FourthSection from  './Components/FourthSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <FirstSection />
      <SecondSection />
       <ThirdSection />
       <FourthSection />
       <Footer/>
    </div>
  );
}

export default App;
