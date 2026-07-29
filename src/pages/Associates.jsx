import React from 'react';
import { ExternalLink, Handshake, ShieldAlert } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { getImagePath } from '../utils/imageUtils';

export default function Associates() {
  const partners = [
    {
      name: "Sree Harika Engineers & Builders",
      location: "India",
      image: getImagePath("/images/card_civil.jpg"),
      desc: "Specialized in civil foundation designs, structural engineering, and general infrastructure construction projects."
    },
    {
      name: "Mytreya Ventures (India)",
      location: "India",
      image: getImagePath("/images/card_power.jpg"),
      desc: "Liaison partner for domestic electrical installations, power substation testing, and grid commissioning."
    },
    {
      name: "Global Vision Management Consultancy",
      location: "Abu Dhabi (UAE)",
      image: getImagePath("/images/card_planning.jpg"),
      desc: "Associate advisory partner handling Middle East project management, commercial strategy, and contract coordination."
    },
    {
      name: "Eversource Electromechanical Engineering LLC",
      location: "Dubai (UAE)",
      image: getImagePath("/images/card_ei.jpg"),
      desc: "Partner for mechanical and power system design installations on high-capacity industrial assets."
    },
    {
      name: "Maverick Power Technologies Limited",
      location: "United Kingdom",
      image: getImagePath("/images/service3.76c63.jpg"),
      desc: "Primary design associate for Electrical Engineering drawings, schema verification, and simulation studies.",
      link: "http://www.maverickpowertech.com/"
    },
    {
      name: "Sri Sai Techno & Engineers Pvt. Ltd.",
      location: "India",
      image: getImagePath("/images/card_rail_works.jpg"),
      desc: "Subcontract associate for specialized railway track works, signaling systems, and communications setups.",
      link: "http://www.srisaiprojects.com/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-16">
      
      {/* Header */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Global Alliances
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Our Global Associates
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Through strategic international alliances, we deliver multi-disciplinary engineering, specialized drawing designs, and local project execution support.
          </p>
        </div>
      </RevealOnScroll>

      {/* Associates Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {partners.map((partner, idx) => (
          <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
            <div className="flex flex-col gap-4 group h-full">
              
              <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden relative shadow-xl border border-slate-200/80 bg-slate-950 shrink-0">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                <span className="absolute top-4 right-4 bg-brand-orange text-white text-[11px] font-extrabold font-outfit uppercase px-3.5 py-1 rounded-full shadow-md">
                  {partner.location}
                </span>
              </div>

              <div className="flex flex-col justify-between flex-grow gap-2 px-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 font-extrabold font-outfit text-xl tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    {partner.desc}
                  </p>
                </div>

                {partner.link && (
                  <a 
                    href={partner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1.5 text-brand-orange hover:text-[#e6820c] text-xs font-extrabold font-outfit uppercase tracking-wider transition-colors cursor-pointer group/link w-fit pt-2 border-t border-slate-100"
                  >
                    <span>Visit Partner Portal</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Scope / Exclusions Banner */}
      <RevealOnScroll direction="zoom-in" delay={250}>
        <section className="bg-gradient-to-br from-brand-orange via-[#f79e2c] to-[#e6820c] text-white border border-brand-orange/30 p-8 md:p-10 rounded-3xl flex flex-col sm:flex-row gap-6 items-start shadow-xl relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 text-white relative z-10 shadow-xs">
            <ShieldAlert size={24} />
          </div>
          <div className="flex flex-col gap-2 relative z-10">
            <h3 className="text-white font-extrabold text-base font-outfit tracking-wide uppercase drop-shadow-xs">Design Scope & Professional Exclusions</h3>
            <p className="text-white/95 text-xs md:text-sm leading-relaxed max-w-4xl font-medium">
              "MYTREYA associates directly with Maverick Power Technologies Limited (UK) for the development of detailed designs, electrical drawings, and system diagrams. Please note that MYTREYA strictly excludes architectural, structural, and mechanical drawings from its system engineering designs."
            </p>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}
