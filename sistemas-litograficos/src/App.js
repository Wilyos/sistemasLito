import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import './ModernLanding.css'; // Add modern styles for new proposal
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import WhatsApp from './components/whatsapp';
import Clientes from './components/Clientes';
import Aside from './components/Aside';
import BannerCarousel from './components/BannerCarousel';
import Loader from './components/Loader';
import SEO from './components/SEO';
import './i18n';

// Lazy loaded pages for better performance
const Contacto = lazy(() => import("./components/pages/Contacto"));
const Nosotros = lazy(() => import("./components/pages/Nosotros"));
const Cotizacion = lazy(() => import('./components/pages/Cotizacion'));
const Soluciones = lazy(() => import('./components/pages/Soluciones'));
const Confirmacion = lazy(() => import('./components/pages/Confirmacion'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));

function MetaPixelTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);
  return null;
}

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <MetaPixelTracker />
        <div className="App">
          <div className="bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
          
          <Navbar />
          
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Ruta para la página principal */}
              <Route
                path="/"
                element={
                  <>
                    <SEO title="Inicio" />
                    <Carousel />
                    <Aside />
                    <BannerCarousel />
                    <Portafolio />
                    <Clientes />
                  </>
                }
              />
              {/* Ruta para las demas paginas */}
              <Route path="/contacto" element={<><SEO title="Contacto" /><Contacto /></>} />
              <Route path="/nosotros" element={<><SEO title="Nosotros" /><Nosotros /></>} />
              <Route path='/cotizacion' element={<><SEO title="Cotización" /><Cotizacion /></>} />
              <Route path='/soluciones' element={<><SEO title="Soluciones" /><Soluciones /></>} />
              <Route path="/confirmacion" element={<><SEO title="Confirmación" /><Confirmacion /></>} />
              <Route path='/privacy' element={<><SEO title="Aviso de Privacidad" /><PrivacyPolicy /></>} />
            </Routes>
          </Suspense>
          
          <WhatsApp />
          <Footer />
          
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;