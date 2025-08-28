import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RecentWorkSection from './components/RecentWorkSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import ConsultCTA from './components/ConsultCTA';
import Blog from './pages/Blog';
import WeOffer from './pages/WeOffer';

const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <RecentWorkSection />
    <StatsSection />
    <TestimonialsSection />
    <CTASection />
    <ConsultCTA />
  </>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} />
      {!isMobileMenuOpen && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/we-offer" element={<WeOffer />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FloatingChat />
        </>
      )}
    </div>
  );
}

export default App;
