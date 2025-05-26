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
import Cotizacion from './components/pages/Cotizacion';
import Soluciones from './components/pages/Soluciones';
import Confirmacion from './components/pages/Confirmacion';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Opcional from './components/pages/Opcional';
import Aside from './components/Aside';
import { useTranslation } from 'react-i18next';
import './i18next';

const App =()=> {
  const {t, i18next} = useTranslation();
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
                <Aside />
                <Portafolio />
                <Clientes />
              </>
            }
          />
          {/* Ruta para la página de contacto */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/cotizacion' element={<Cotizacion />} />
          <Route path='/soluciones' element={<Soluciones />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/opcional' element={<Opcional />} />
        </Routes>
        <WhatsApp />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;