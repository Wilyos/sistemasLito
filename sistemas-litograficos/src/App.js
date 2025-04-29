import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import WhatsApp from './components/whatsapp';
import Contacto from "./components/pages/Contacto";
import Clientes from './components/Clientes';
import Nosotros from './components/pages/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ruta para la página principal */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <WhatsApp />
                <Portafolio />
                <Clientes />
              </>
            }
          />
          {/* Ruta para la página de contacto */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;