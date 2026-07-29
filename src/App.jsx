import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ChatbotWidget from './components/ChatbotWidget';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CorporateInfo from './pages/CorporateInfo';
import Services from './pages/Services';
import ExecutedProjects from './pages/ExecutedProjects';
import OurClients from './pages/OurClients';
import Associates from './pages/Associates';
import ContactUs from './pages/ContactUs';
import gsap from 'gsap';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageContainerRef = useRef(null);

  // Transition Page Animation on Page Change
  useEffect(() => {
    if (pageContainerRef.current) {
      // Fade in and float up page content when activePage changes
      gsap.fromTo(
        pageContainerRef.current,
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power3.out',
          clearProps: 'transform' // Avoid layout issue with fixed position elements
        }
      );
    }
  }, [activePage]);

  // Page switcher
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <AboutUs setIsModalOpen={setIsModalOpen} />;
      case 'corporate-info':
        return <CorporateInfo />;
      case 'services':
        return <Services />;
      case 'projects':
        return <ExecutedProjects />;
      case 'clients':
        return <OurClients />;
      case 'associates':
        return <Associates />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col justify-between selection:bg-brand-orange selection:text-white relative">
      {/* Glow decorative blobs at background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-orange/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-96 h-96 bg-brand-orange/3 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Sticky Header / Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} isModalOpen={isModalOpen} />

      {/* Main Dynamic Content Area */}
      <main ref={pageContainerRef} className="flex-1 w-full relative z-10">
        {renderPage()}
      </main>

      {/* Footer Block */}
      <Footer setActivePage={setActivePage} />

      {/* Floating Action Widgets */}
      <WhatsAppWidget />
      <ChatbotWidget />
    </div>
  );
}
