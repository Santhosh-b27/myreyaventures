import React, { useState, useEffect } from 'react';
import { Shield, UserCheck, Award, Eye, Target, Briefcase, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import { CLIENT_LOGOS } from '../components/ClientLogos';

export default function Home({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WELCOME TO MYTREYA VENTURES SDN BHD",
      subtitle: "Delivering Engineering Excellence Across Rail, Power, and Infrastructure Projects Worldwide.",
      bg: "/images/hero_banner_new.jpg",
      cta: "Explore Our Services",
      page: "services"
    },
    {
      title: "PIONEERS IN POWER SYSTEM INSTALLATION",
      subtitle: "Advanced testing, commissioning, and construction for railway and industrial power grids.",
      bg: "/images/hero_banner_new.jpg",
      cta: "View Executed Projects",
      page: "projects"
    },
    {
      title: "OIL & GAS INSTRUMENTATION SPECIALISTS",
      subtitle: "High-precision electro-mechanical solutions and rigorous quality standards for deep-sea and refinery installations.",
      bg: "/images/banner_oil_gas.jpg",
      cta: "Contact Us Today",
      page: "contact"
    },
    {
      title: "PROJECT MANAGEMENT & CLAIMS CONSULTANCY",
      subtitle: "Specialized in Extension of Time (EOT), Loss and Expense Claims, and Master Planning.",
      bg: "/images/banner_rail.jpg",
      cta: "Learn About Us",
      page: "about"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { targetNumber: 34, suffix: "+", label: "Years Industry Leadership", sub: "Global transit & rail expertise" },
    { targetNumber: 100, suffix: "+", label: "Engineers & Specialists", sub: "Electrical, Systems & Claims" },
    { targetNumber: 50, suffix: "+", label: "Major Infrastructure Projects", sub: "Railways, Power & Petrochemical" },
    { targetNumber: 100, suffix: "%", label: "ISO Quality Compliance", sub: "Strict safety & EOT standards" }
  ];

  const services = [
    {
      title: "Electrical & Instrumentation",
      desc: "Installation, testing, and commissioning for major industrial, petrochemical, and Oil & Gas developments.",
      image: "/images/card_ei.jpg",
      badge: "E&I Engineering"
    },
    {
      title: "Power System Installation",
      desc: "Comprehensive power system grid creation, cabling, testing, and commissioning tailored for Rail and Subway Projects.",
      image: "/images/card_power.jpg",
      badge: "Substation & Grid"
    },
    {
      title: "Commercial & Contract Claims",
      desc: "Expert commercial representation, contract administration, EOT developments, and prolongation loss/expense recovery.",
      image: "/images/card_claims.jpg",
      badge: "EOT & Disputes"
    },
    {
      title: "Master Planning & Scope",
      desc: "Strategic project structuring, scheduling, feasibility analysis, risk management, and overall master programme delivery.",
      image: "/images/card_planning.jpg",
      badge: "Primavera & TILOS"
    },
    {
      title: "Railway Construction Works",
      desc: "End-to-end track installations, signalling, communication networks, depots, OCS electrification, AFC, and PSD setups.",
      image: "/images/card_rail_works.jpg",
      badge: "Transit Systems"
    },
    {
      title: "Civil & General Building",
      desc: "General infrastructure creation, civil structural works, substation structures, and specialized building construction.",
      image: "/images/card_civil.jpg",
      badge: "Civil Infrastructure"
    }
  ];

  const teamMembers = [
    {
      name: "James Williams",
      role: "Managing Director",
      specialty: "Railways & Transit Specialist",
      qualification: "B.Sc. Construction Management, Honors – Coventry University, UK (34+ Yrs Exp)",
      image: "/images/team_james.jpg"
    },
    {
      name: "Lakshmipathi Rao",
      role: "Project Controls Specialist",
      specialty: "Systems Engineering Lead",
      qualification: "M.Sc. Strategic Planning – Heriot-Watt Univ, Dubai; B.Tech EEE (24+ Yrs Exp)",
      image: "/images/team_rao.jpg"
    },
    {
      name: "Sateesh Kumar",
      role: "General Manager",
      specialty: "E&I Operations Lead",
      qualification: "MBA – ITM India; B.Tech EEE; Ex-Maire Tecnimont HOD (32+ Yrs Exp)",
      image: "/images/team_sateesh.jpg"
    },
    {
      name: "Chandra Sekhar",
      role: "Senior Electrical Engineer",
      specialty: "Operations Specialist",
      qualification: "B.Tech EEE; Indian President Award Recipient (25+ Yrs Exp)",
      image: "/images/team_sekhar.jpg"
    }
  ];

  return (
    <div className="w-full flex flex-col gap-24 relative overflow-hidden">
      
      {/* Hero Banner Section (Extends Behind Fixed Transparent Header Overlay) */}
      <section className="relative w-full min-h-[680px] lg:min-h-[820px] bg-slate-950 flex items-center overflow-hidden pt-36 md:pt-40 lg:pt-44 pb-20">
        {/* Background Image Slider (Clear & High Contrast) */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[8000ms]' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${slide.bg})`,
            }}
          />
        ))}

        {/* Soft Ambient Contrast Layer (No Heavy Black Filter) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/15 to-slate-950/40 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full filter blur-[140px] pointer-events-none animate-pulse-glow" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10 flex flex-col gap-6 justify-center items-center text-center h-full select-none">
          <div className="flex items-center justify-center bg-slate-900/95 backdrop-blur-xl px-6 py-2 rounded-full border border-white/30 w-fit shadow-lg mx-auto relative z-30">
            <span className="text-white uppercase text-xs sm:text-sm font-extrabold tracking-[0.22em] font-outfit drop-shadow-md">
              ISO 9001 Certified • Rail • Power • Oil & Gas
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl leading-tight text-white font-outfit drop-shadow-lg tracking-tight text-center mx-auto">
            {slides[currentSlide].title}
          </h1>

          <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium drop-shadow-sm text-center mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 mx-auto">
            <button
              onClick={() => setActivePage(slides[currentSlide].page)}
              className="px-8 py-4 bg-brand-orange hover:bg-brand-light-orange text-white text-sm font-bold font-outfit rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(246,147,28,0.35)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(246,147,28,0.5)] cursor-pointer flex items-center gap-2.5"
            >
              <span>{slides[currentSlide].cta}</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setActivePage('about')}
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-900 text-white text-sm font-bold font-outfit rounded-2xl border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center gap-2.5"
            >
              <Briefcase size={18} className="text-brand-orange" />
              <span>Corporate Profile</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Key Metrics / Stats Section */}
      <section className="-mt-16 relative z-20 max-w-7xl mx-auto w-full px-4 md:px-8">
        <RevealOnScroll direction="zoom-in" duration={800}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-brand-orange/30 hover:bg-white transition-all duration-300 group">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-extrabold font-outfit text-slate-900 group-hover:text-brand-orange transition-colors">
                    <AnimatedCounter targetNumber={stat.targetNumber} suffix={stat.suffix} duration={2200} />
                  </span>
                  <Zap size={16} className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 font-outfit mt-1">{stat.label}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Services Grid Section - "What We Deliver" (Extended Full-Width Section Card) */}
      <section className="w-full relative py-16 md:py-24 bg-gradient-to-br from-brand-orange via-[#f79e2c] to-[#e6820c] text-white shadow-[0_20px_50px_rgba(246,147,28,0.25)] border-y border-brand-orange/30 overflow-hidden">
        {/* Ambient Glow & Wave Decorators */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col gap-12 relative z-10">
          <RevealOnScroll direction="up">
            <div className="flex flex-col gap-3 text-center items-center relative z-10">
              <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white uppercase text-xs font-bold tracking-widest font-outfit px-5 py-1.5 rounded-full flex items-center justify-center shadow-sm">
                What We Deliver
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit drop-shadow-sm">
                Specialized Engineering & Claims Solutions
              </h2>
              <p className="text-white/95 max-w-2xl text-center text-sm md:text-base leading-relaxed font-medium">
                Our multi-disciplinary expert units ensure complex infrastructure projects are completed strictly to international quality, schedule, and claims management standards.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((srv, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
                <div 
                  onClick={() => setActivePage('services')}
                  className="bg-white rounded-3xl flex flex-col relative overflow-hidden group cursor-pointer h-full border border-white/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400"
                >
                  {/* Image Header */}
                  <div className="h-48 w-full overflow-hidden border-b border-slate-100 relative shrink-0">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
                    <span className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30 shadow-sm">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-4 relative z-10">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-slate-900 tracking-wide font-outfit group-hover:text-brand-orange transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-brand-orange pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                      <span>Explore Capability</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Foundations & Corporate Profile side-by-side */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Core Values / Focus */}
        <RevealOnScroll direction="left" delay={100}>
          <div className="flex flex-col gap-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden glass-panel-dark h-full shadow-xl text-white">
            <div className="flex flex-col gap-2">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider font-outfit">
                Our Foundations
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-outfit">
                Core Principles & Focus
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <UserCheck className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Client Focus</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    We align deliverables directly with client priorities, providing veteran engineers to solve critical technical and commercial hurdles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Award className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Service Excellence</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Through rigorous technical execution and cross-industry leadership, we continually exceed targets and maximize asset value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Shield className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Uncompromising Integrity</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    We enforce strict ethical compliance, total transparency, and certified safety across all project stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Corporate Profile Highlights */}
        <RevealOnScroll direction="right" delay={200}>
          <div className="flex flex-col gap-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden glass-panel-dark h-full shadow-xl text-white">
            <div className="flex flex-col gap-2">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider font-outfit">
                Corporate Direction
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-outfit">
                History & Strategic Vision
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Briefcase className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Established History</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Incorporated in 2017 in Kuala Lumpur (originally Mytreya Holdings in 2010), Mytreya Ventures has grown into a key systems management partner for national infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Eye className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Our Vision</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    To expand technical reach into high-growth global markets, establishing dynamic systems engineering frameworks across Southeast Asia and the Middle East.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-orange/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Target className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-outfit">Our Operational Goal</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    To achieve total ISO-quality standards, guaranteeing projects finish on schedule, strictly within scope boundaries, and on targeted budget numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </section>

      {/* Leadership Team Showcase Section (Sleek Borderless Portrait Showcase) */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col gap-10">
        <RevealOnScroll direction="up">
          <div className="flex flex-col gap-2.5 items-center text-center">
            <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest font-outfit">
              Leadership & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Meet Our Executive Leadership
            </h2>
            <p className="text-slate-600 max-w-xl text-center text-sm md:text-base leading-relaxed font-medium">
              Industry-hardened systems engineers, planning managers, and claims consultants with decades of combined global experience.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 120}>
              <div 
                onClick={() => setActivePage('about')}
                className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(246,147,28,0.25)] hover:-translate-y-2 transition-all duration-500 bg-slate-950 border border-slate-800"
              >
                {/* Background Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%230f172a"/><circle cx="50" cy="40" r="18" fill="%23cbd5e1"/><path d="M20,80 C20,60 80,60 80,80" fill="%23cbd5e1"/></svg>`;
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-colors duration-500" />

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1.5 z-10">
                  <span className="px-3 py-1 bg-brand-orange/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase font-outfit rounded-full w-fit shadow-xs">
                    {member.role}
                  </span>
                  
                  <h3 className="text-white font-extrabold text-xl font-outfit tracking-wide group-hover:text-brand-orange transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-slate-300 text-xs font-medium leading-snug line-clamp-2 mt-0.5">
                    {member.qualification}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Clients & Partners Infinite Motion Marquee Showcase */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col gap-10 py-6">
        <RevealOnScroll direction="up">
          <div className="flex flex-col gap-2.5 items-center text-center">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-outfit">
              Global Engineering Alliances
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Our Valued Partners & Clients
            </h2>
            <p className="text-slate-600 max-w-2xl text-center text-sm md:text-base leading-relaxed font-medium">
              We collaborate with leading global transit corporations, EPC contractors, petrochemical companies, and infrastructure ministries worldwide.
            </p>
          </div>
        </RevealOnScroll>

        {/* Infinite Motion Marquee Tracks Stream */}
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
      </section>

      {/* Modern Spatial CTA Banner */}
      <section className="relative max-w-7xl mx-auto w-full px-4 md:px-8 mb-12">
        <RevealOnScroll direction="tilt-3d">
          <div className="relative w-full rounded-3xl p-8 md:p-14 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            {/* Glow blobs */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange/20 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-3 relative z-10 max-w-2xl text-center md:text-left">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest font-outfit flex items-center gap-1.5 justify-center md:justify-start">
                <CheckCircle2 size={14} />
                Global System Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-outfit tracking-tight">
                Ready to collaborate on your next infrastructure venture?
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                Connect with our systems engineers and claims consultants to map a custom, ISO-certified delivery framework for your project.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-9 py-4 bg-brand-orange hover:bg-brand-light-orange text-white text-sm font-bold font-outfit rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(246,147,28,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(246,147,28,0.6)] shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
