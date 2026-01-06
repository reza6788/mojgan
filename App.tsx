import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Testimonials } from './pages/Testimonials';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Order } from './pages/Order';
import { useStore } from './store/useStore';
import { Language } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const { language } = useStore();

  useEffect(() => {
    // Handle RTL for Persian
    const dir = language === Language.FA ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    if (language === Language.FA) {
      document.body.classList.add('rtl', 'font-body'); // Fallback font if needed
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative font-body">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;