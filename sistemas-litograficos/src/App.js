import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import WhatsApp from './components/whatsapp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <WhatsApp />
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;