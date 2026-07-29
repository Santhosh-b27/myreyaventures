import React, { useState } from 'react';
import { Calendar, CheckCircle2, RotateCw, Landmark, Activity, Layers, Briefcase, Zap, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ExecutedProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const ongoingProjects = [
    {
      title: "RTS Link Project, Malaysia",
      client: "Siemens Malaysia",
      badge: "Signalling & Transit Systems",
      role: "Signalling Programme Management services for the cross-border rapid transit system between Malaysia and Singapore.",
      timeline: "May 2021 – Present",
      status: "Ongoing",
      image: "/images/banner_rail.jpg"
    },
    {
      title: "KVDT Nationwide TETRA Network, Malaysia",
      client: "Motorola Solutions",
      badge: "Telecom Network & EOT Claims",
      role: "Extension of Time (EOT), Prolongation, and Loss and Expense Claims advocacy for nationwide railway communications.",
      timeline: "November 2021 – Present",
      status: "Ongoing",
      image: "/images/card_claims.jpg"
    }
  ];

  const executedProjects = [
    {
      id: "01",
      category: "rail",
      categoryName: "Rail & Transit",
      title: "Metro Manila Subway Project, Philippines",
      client: "Colas Rail Asia",
      role: "Overall Systems Programme Management services.",
      timeline: "August 2021 – June 2022"
    },
    {
      id: "02",
      category: "claims",
      categoryName: "Claims & EOT Advisory",
      title: "Package S7, MRT SBK Line, Malaysia",
      client: "PDP & MRT Corp",
      role: "Developed construction project claims within 4 months and submitted for settlement.",
      timeline: "Completed"
    },
    {
      id: "03",
      category: "claims",
      categoryName: "Claims & EOT Advisory",
      title: "Package S8, MRT SBK Line, Malaysia",
      client: "PDP & MRT Corp",
      role: "Developed construction project claims within 2 months and submitted for settlement.",
      timeline: "Completed"
    },
    {
      id: "04",
      category: "rail",
      categoryName: "Rail & Transit",
      title: "KVDT1 & KVDT2 Transit Upgrades, Malaysia",
      client: "DMIA",
      role: "Programme Management services support.",
      timeline: "Completed"
    },
    {
      id: "05",
      category: "rail",
      categoryName: "Rail & Transit",
      title: "MRT2 Mass Rapid Transit, Malaysia",
      client: "Sapura-EVD",
      role: "Programme Management services support.",
      timeline: "Completed"
    },
    {
      id: "06",
      category: "claims",
      categoryName: "Claims & EOT Advisory",
      title: "MRT Package S205, Malaysia",
      client: "APEX Communications",
      role: "Programme and Contract Management services for a duration of 2 years.",
      timeline: "Completed"
    },
    {
      id: "07",
      category: "claims",
      categoryName: "Claims & EOT Advisory",
      title: "Nationwide Telecommunications Project, Malaysia",
      client: "Motorola Solutions Malaysia",
      role: "Acted as claims consultant for commercial contract settlements.",
      timeline: "Completed"
    },
    {
      id: "08",
      category: "power",
      categoryName: "Petrochemical & Power",
      title: "RAPID, P007 Package Refinery Works, Malaysia",
      client: "Tecnimont E&I(M) Sdn Bhd",
      role: "Electrical installation works execution at Johor Bahru.",
      timeline: "August 2017 – December 2019"
    },
    {
      id: "09",
      category: "power",
      categoryName: "Petrochemical & Power",
      title: "CDU/VDU Subcontract VRMP, Visakhapatnam, India",
      client: "L&T Hydrocarbon (under HPCL)",
      role: "Back-to-back subcontract execution of Electrical & Telecom installations, testing, and commissioning.",
      timeline: "March 2019 – December 2020"
    },
    {
      id: "10",
      category: "power",
      categoryName: "Petrochemical & Power",
      title: "HPCL SRU/SFU EPCC-07 Infrastructure, India",
      client: "Petrofac International",
      role: "Execution of Civil Infrastructure, Oxygen Plant, Substation, Weigh Bridge construction, and E&I installation works.",
      timeline: "May 2019 – Ongoing"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? executedProjects 
    : executedProjects.filter(p => p.category === activeFilter);

  // Slider Pagination Logic (2 items per slide)
  const itemsPerPage = 2;
  const totalSlides = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentSlide(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const displayedProjects = filteredProjects.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-24">
      
      {/* Header (Without Icon) */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Proven Track Record
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Executed & Active Projects
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Explore Mytreya's project portfolio displaying systems management on subway networks, contract claims settlements, and heavy industrial instrumentation.
          </p>
        </div>
      </RevealOnScroll>

      {/* Ongoing Projects Section (Borderless Spatial Layout - No Cards) */}
      <section className="flex flex-col gap-12">
        <RevealOnScroll direction="left">
          <div className="flex flex-col gap-2">
            <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest font-outfit flex items-center gap-2">
              <Activity className="text-brand-orange animate-pulse" size={16} />
              Live Operations
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Current & Active Undertakings
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-16 md:gap-20">
          {ongoingProjects.map((proj, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 150}>
              <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-14 items-center`}>
                
                {/* Borderless Spatial Image Container */}
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden relative shadow-2xl group border border-slate-200/80 bg-slate-950 shrink-0">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Pulsing Live Status Tag */}
                  <span className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold font-outfit uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-2">
                    <RotateCw size={13} className="animate-spin text-brand-orange" />
                    {proj.status}
                  </span>

                  <span className="absolute bottom-4 left-4 bg-brand-orange/90 backdrop-blur-md text-white text-xs font-extrabold font-outfit uppercase px-3.5 py-1.5 rounded-full shadow-xs">
                    {proj.badge}
                  </span>
                </div>

                {/* Cardless Spatial Text Presentation */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 text-xs font-extrabold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full w-fit">
                    <Landmark size={14} />
                    <span>Client: {proj.client}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight leading-tight">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                    {proj.role}
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-500 pt-4 border-t border-slate-200/80 mt-2">
                    <Calendar size={16} className="text-brand-orange" />
                    <span>Project Duration: <strong className="text-slate-800 font-outfit">{proj.timeline}</strong></span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Completed Achievements & Portfolio History (Minimal Cardless Spatial Slider Only) */}
      <section className="flex flex-col gap-10">
        <RevealOnScroll direction="left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="flex flex-col gap-2">
              <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest font-outfit">
                Historical Successes
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
                Completed Achievements & Portfolio History
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'rail', label: 'Rail & Transit' },
                { id: 'claims', label: 'Claims & EOT' },
                { id: 'power', label: 'Power & Oil' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleFilterChange(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold font-outfit transition-all duration-300 cursor-pointer ${
                    activeFilter === btn.id
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Minimal Borderless Spatial Slider Track */}
        <div className="flex flex-col gap-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 min-h-[220px]">
            {displayedProjects.map((proj, idx) => (
              <RevealOnScroll key={proj.id} direction="up" delay={idx * 100}>
                <div className="flex flex-col gap-4 p-2 relative group border-l-2 border-slate-200 hover:border-brand-orange pl-6 transition-all duration-300">
                  
                  {/* Top Index & Category */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-4xl lg:text-5xl font-black font-mono text-brand-orange/60 group-hover:text-brand-orange transition-colors">
                      {proj.id}
                    </span>
                    <span className="px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[11px] font-extrabold font-outfit rounded-full uppercase tracking-wider">
                      {proj.categoryName}
                    </span>
                  </div>

                  {/* Title & Client */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-outfit tracking-tight group-hover:text-brand-orange transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
                      <Landmark size={14} className="text-brand-orange shrink-0" />
                      <span>Client: <strong className="text-slate-800">{proj.client}</strong></span>
                    </div>
                  </div>

                  {/* Role Narrative */}
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                    {proj.role}
                  </p>

                  {/* Status Timeline */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 pt-3 border-t border-slate-100 mt-auto">
                    <CheckCircle2 size={14} className="text-brand-orange" />
                    <span>Status: <strong className="text-slate-700 font-outfit">{proj.timeline}</strong></span>
                  </div>

                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Centered Dots & Slider Action Navigation */}
          {totalSlides > 1 && (
            <div className="flex items-center justify-center gap-5 pt-6 border-t border-slate-200/80">
              {/* Prev Button */}
              <button
                onClick={handlePrevSlide}
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                title="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Centered Dots Indicator */}
              <div className="flex items-center gap-2 px-2">
                {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === dotIdx 
                        ? 'w-8 bg-brand-orange shadow-xs' 
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextSlide}
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                title="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
