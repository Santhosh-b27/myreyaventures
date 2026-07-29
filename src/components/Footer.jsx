import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ChevronUp, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { getImagePath } from '../utils/imageUtils';

export default function Footer({ setActivePage }) {
  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-12 md:mt-16 border-t border-slate-800 bg-slate-950 text-slate-300 overflow-hidden">
      {/* Subtle Ambient Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-amber-500/10 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Main Footer Info Grid */}
      <div className="max-w-7xl mx-auto py-10 md:py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start relative z-10">
        
        {/* About Company */}
        <RevealOnScroll direction="up" delay={0}>
          <div className="flex flex-col gap-3.5">
            <div className="bg-white/95 p-2 rounded-xl inline-block w-fit backdrop-blur-md shadow-sm border border-white/20">
              <img 
                src={getImagePath("/images/logo.76c63.png")} 
                alt="Mytreya Ventures Logo" 
                className="h-9 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal max-w-sm">
              Mytreya Ventures Sdn Bhd delivers expert-led engineering, project management, power systems installation, and specialized contract administration in Rail, Power, and Oil & Gas sectors globally.
            </p>
            <div className="flex flex-col gap-2 mt-1 text-xs md:text-sm font-medium text-slate-300">
              <span className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-orange shrink-0" />
                <span>+60 10 8969776 / +91 9949502858</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-orange shrink-0" />
                <a href="mailto:info@mytreyaventures.com" className="hover:text-brand-orange transition-colors">
                  info@mytreyaventures.com
                </a>
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Quick Links */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-sm font-bold font-outfit text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm text-slate-400 font-medium">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'corporate-info', label: 'Corporate Info' },
                { id: 'services', label: 'Our Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'clients', label: 'Our Clients' },
                { id: 'associates', label: 'Associates' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center gap-1.5 hover:text-brand-orange hover:translate-x-1 transition-all duration-300 group text-left cursor-pointer"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Registered Offices */}
        <RevealOnScroll direction="up" delay={300}>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-sm font-bold font-outfit text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-orange" />
              Headquarters
            </h3>
            <div className="flex gap-3 text-xs md:text-sm text-slate-300">
              <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white tracking-wide">MYTREYA VENTURES SDN BHD</p>
                <p className="text-[11px] text-brand-orange/90 font-mono mt-0.5">(Company No. 1243694-W)</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400 font-normal">
                  Ground Floor, No.122, Jalan Thamby Abdullah,<br />
                  Off Jalan Tun Sambanthan (Brickfields),<br />
                  Kuala Lumpur, 50470, Malaysia.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400 font-medium font-outfit">
          <p>© {new Date().getFullYear()} MYTREYA VENTURES SDN BHD. All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Powered by{' '}
            <a href="http://www.bitratech.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange underline text-slate-300">
              BitraTech
            </a>{' '}
            &{' '}
            <a href="http://www.bitranet.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange underline text-slate-300">
              BitraNet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
