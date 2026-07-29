import React from 'react';
import { Building } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { CLIENT_LOGOS } from '../components/ClientLogos';

export default function OurClients() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-16">
      
      {/* Header */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-2.5 items-center text-center">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Global Engineering Alliances
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Our Valued Partners & Clients
          </h1>
          <p className="text-slate-600 max-w-2xl text-center text-sm md:text-base leading-relaxed font-medium">
            We collaborate with leading global construction consortia, transit corporations, petrochemical EPC contractors, and public ministries across Southeast Asia, South Asia, and the Middle East.
          </p>
        </div>
      </RevealOnScroll>

      {/* Infinite Motion Marquee Stream (Perfectly Centered Logos) */}
      <RevealOnScroll direction="zoom-in" delay={150}>
        <div className="marquee-container mask-edge-fade overflow-hidden w-full flex flex-col gap-6 py-2">
          
          {/* Track 1: Smooth Leftward Motion */}
          <div className="animate-marquee-track-left">
            {[...CLIENT_LOGOS.slice(0, 9), ...CLIENT_LOGOS.slice(0, 9)].map((client, idx) => (
              <div 
                key={idx}
                className="w-56 h-20 md:w-64 md:h-24 bg-white border border-slate-200/80 rounded-2xl px-6 py-4 flex items-center justify-center shrink-0 hover:scale-108 hover:border-brand-orange hover:shadow-[0_12px_30px_rgba(246,147,28,0.2)] transition-all duration-300 mx-3 cursor-pointer group shadow-xs"
                title={client.name}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Smooth Rightward Motion */}
          <div className="animate-marquee-track-right">
            {[...CLIENT_LOGOS.slice(9), ...CLIENT_LOGOS.slice(9)].map((client, idx) => (
              <div 
                key={idx}
                className="w-56 h-20 md:w-64 md:h-24 bg-white border border-slate-200/80 rounded-2xl px-6 py-4 flex items-center justify-center shrink-0 hover:scale-108 hover:border-brand-orange hover:shadow-[0_12px_30px_rgba(246,147,28,0.2)] transition-all duration-300 mx-3 cursor-pointer group shadow-xs"
                title={client.name}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>

      {/* Trust Banner */}
      <RevealOnScroll direction="up" delay={250}>
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center shrink-0">
              <Building className="text-brand-orange" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold font-outfit text-white">Proven Subcontract & Claims Reliability</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-0.5 font-medium">
                Our certified engineers handle multi-million dollar rail, power, and petrochemical scopes for Tier-1 contractors worldwide.
              </p>
            </div>
          </div>
          <span className="px-5 py-2.5 bg-brand-orange text-white text-xs font-bold font-outfit rounded-xl shrink-0 uppercase tracking-wider shadow-md">
            Global Compliance
          </span>
        </div>
      </RevealOnScroll>

    </div>
  );
}
