import React, { useEffect } from 'react';
import './App.css';
import './ModernLanding.css'; // Add modern styles for new proposal
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import WhatsApp from './components/whatsapp';
import Contacto from "./components/pages/Contacto";
import Clientes from './components/Clientes';
import Nosotros from './components/pages/Nosotros';
import Cotizacion from './components/pages/Cotizacion';
import Soluciones from './components/pages/Soluciones';
import Confirmacion from './components/pages/Confirmacion';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Aside from './components/Aside';
import './i18n';

function MetaPixelTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);
  return null;
}

const App =()=> {
  return (
    <Router>
      <MetaPixelTracker />
      <div className="App">
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <Navbar />
        <Routes>
          {/* Ruta para la página principal */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Aside />
                <Portafolio />
                <Clientes />
              </>
            }
          />
          {/* Ruta para las demas paginas */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/cotizacion' element={<Cotizacion />} />
          <Route path='/soluciones' element={<Soluciones />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
        <WhatsApp />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;