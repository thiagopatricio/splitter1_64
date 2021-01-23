
import React from 'react';
import './App.css';
import Taps from './components/mostrarTaps/mostrarTaps';
import ReactGA from 'react-ga';


const trackingId = "G-MZ2291X5Z5"; // Replace with your Google Analytics tracking ID


function initializeReactGA() {
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/homepage');
}


function App() {
  initializeReactGA();
  return (
<div>
<Taps/>


</div>




   
  );
}

export default App;
