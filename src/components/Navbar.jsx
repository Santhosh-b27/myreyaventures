import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Globe, Sparkles } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

export default function Navbar({ activePage, setActivePage, isModalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = activePage === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'corporate-info', label: 'Corporate Info' },
    { id: 'services', label: 'Our Services' },
    { id: 'projects', label: 'Executed Projects' },
    { id: 'clients', label: 'Our Clients' },
    { id: 'associates', label: 'Associates' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${isHomePage ? 'fixed top-0 left-0 w-full z-50' : 'sticky top-0 z-50 w-full'} transition-all duration-500 ease-in-out ${
      isModalOpen ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
    }`}>
      {/* Top Contact Bar */}
      <div className={`transition-all duration-300 text-slate-200 py-1.5 px-4 text-xs font-medium border-b relative z-20 ${
        isHomePage 
          ? (isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-white/10' : 'bg-transparent backdrop-blur-none border-white/15')
          : 'bg-slate-950/95 backdrop-blur-md border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[11px] md:text-xs text-slate-300">
              <Phone size={12} className="text-brand-orange shrink-0" />
              <a href="tel:+60108969776" className="hover:text-brand-orange transition-colors">+60 10 8969776</a>
              <span className="text-slate-600">/</span>
              <a href="tel:+919949502858" className="hover:text-brand-orange transition-colors">+91 9949502858</a>
            </span>
            <span className="flex items-center gap-1.5 text-[11px] md:text-xs text-slate-300">
              <Mail size={12} className="text-brand-orange shrink-0" />
              <a href="mailto:info@mytreyaventures.com" className="hover:text-brand-orange transition-colors">info@mytreyaventures.com</a>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-wider font-outfit uppercase font-semibold text-slate-400">
            <Globe size={11} className="text-brand-orange shrink-0" />
            <span>Power • Rail • Oil & Gas Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`w-full py-3.5 px-4 md:px-8 transition-all duration-300 relative z-20 ${
        isHomePage
          ? (isScrolled 
              ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl' 
              : 'bg-transparent backdrop-blur-none border-b border-white/15 shadow-none')
          : 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-xl'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Company Logo (Left Side) */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] group"
          >
            <div className="relative bg-white/95 p-1.5 rounded-xl border border-white/40 shadow-sm">
              <img 
                src={getImagePath("/images/logo.76c63.png")} 
                alt="Mytreya Ventures Logo" 
                className="h-9 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 text-sm lg:text-[15px] xl:text-base font-extrabold font-outfit tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-brand-orange' 
                      : 'text-white hover:text-brand-orange'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-orange rounded-full shadow-[0_0_12px_#f6931c]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button ("Contact Us") */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-7 py-3 bg-brand-orange hover:bg-brand-light-orange text-white text-sm xl:text-base font-extrabold font-outfit rounded-full shadow-lg shadow-brand-orange/25 hover:scale-105 transition-all duration-300 cursor-pointer min-h-[44px]"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Min 44px Touch Target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-white bg-white/5 hover:bg-white/15 rounded-xl transition-colors cursor-pointer border border-white/20 shrink-0"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer Menu */}
      {isOpen && (
        <>
          {/* Dark Overlay Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Drawer Panel */}
          <div className="lg:hidden w-full bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 py-5 px-5 absolute top-full left-0 shadow-2xl animate-in slide-in-from-top-3 duration-300 z-50 text-white max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-2.5">
              {menuItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-2xl text-base font-bold font-outfit transition-all flex items-center justify-between min-h-[48px] active:scale-[0.99] ${
                      isActive 
                        ? 'bg-brand-orange text-white shadow-md' 
                        : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles size={16} className="text-white" />}
                  </button>
                );
              })}
              
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3.5 mt-3 bg-brand-orange active:bg-[#e6820c] text-white text-base font-extrabold font-outfit rounded-2xl shadow-md text-center min-h-[48px] flex items-center justify-center"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
