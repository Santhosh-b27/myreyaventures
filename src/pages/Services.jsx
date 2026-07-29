import React from 'react';
import { Zap, Cpu, TrendingUp, CheckCircle } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Services() {
  const serviceCategories = [
    {
      title: "Power Sector Installations",
      badge: "Power & Substation Grid",
      icon: <Zap size={24} />,
      image: "/images/card_power.jpg",
      items: [
        "Power system installation, testing & commissioning.",
        "Electro-mechanical installations and grid synchronization.",
        "Power System Engineering & design consultancy partnership.",
        "Substation control buildings construction & instrumentation."
      ]
    },
    {
      title: "Railways & Transit Systems",
      badge: "Rail & Transit Infrastructure",
      icon: <Cpu size={24} />,
      image: "/images/card_rail_works.jpg",
      items: [
        "Railway Construction Works (Infra, Track, OCS, Signalling, Communication, Depot).",
        "Power system installation, testing & commissioning for transit networks.",
        "Automatic Fare Collection (AFC) & Platform Screen Doors (PSD) installations.",
        "Electrification & overhead contact systems (OCS) alignment."
      ]
    },
    {
      title: "Oil & Gas Instrumentation",
      badge: "Offshore & Refinery Instrumentation",
      icon: <CheckCircle size={24} />,
      image: "/images/banner_oil_gas.jpg",
      items: [
        "Electrical & Instrumentation installation for deep-sea refinery platforms.",
        "Subcontracted back-to-back testing & commissioning for petrochemical CDU/VDU units.",
        "Skilled and unskilled manpower supply for toxic & safety-critical environments.",
        "Quality assurance auditing & electro-mechanical quality management controls."
      ]
    },
    {
      title: "Project Control & Claims",
      badge: "EOT & Commercial Claims",
      icon: <TrendingUp size={24} />,
      image: "/images/card_claims.jpg",
      items: [
        "Project Management Consultancy for massive transit systems & refinery units.",
        "Contract administration, Extension of Time (EOT) claim development.",
        "Disruption, prolongation cost assessments, loss & expense claims advocacy.",
        "Master Programme planning, critical path optimization, and risk mitigation."
      ]
    }
  ];

  const methodologySteps = [
    {
      num: "01",
      title: "Client & User Alignment",
      desc: "Extensive client and end-user discussions to analyze project scope and separate essential needs from optional wants."
    },
    {
      num: "02",
      title: "Team Appointment",
      desc: "Careful selection of project team members possessing the specific technical certifications and capacity required."
    },
    {
      num: "03",
      title: "Feasibility Mapping",
      desc: "Active management of early-stage feasibility studies and formulation of scheme options for funding approvals."
    },
    {
      num: "04",
      title: "Master Programme Setup",
      desc: "Establishment of the Project Delivery Plan, design concepts, and baseline cost models with aggressive buffer controls."
    },
    {
      num: "05",
      title: "Discipline Control",
      desc: "Rigorous tracking of scope modifications, procurement systems, contractor risks, and communication flows."
    },
    {
      num: "06",
      title: "Construction Process Audit",
      desc: "Enforcing checks on quality standards, timely safety audits, defects liability, and hand-over documentation."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-24">
      
      {/* Header (Without Icon) */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            What We Do
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Our Fields of Expertise
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            From transit electrification to offshore refinery controls, we support major infrastructure projects with certified engineering skills and project control systems.
          </p>
        </div>
      </RevealOnScroll>

      {/* Services Showcase (Borderless Open Spatial Layout - No Cards) */}
      <section className="flex flex-col gap-16 md:gap-24">
        {serviceCategories.map((cat, idx) => (
          <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
            <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-14 items-center`}>
              
              {/* Image Showcase Box (Borderless Spatial Container) */}
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden relative shadow-2xl group border border-slate-200/80 bg-slate-950 shrink-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-outfit uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  {cat.badge}
                </span>
              </div>

              {/* Content Side (Cardless Spatial Presentation) */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange shadow-xs">
                    {cat.icon}
                  </span>
                  <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest font-outfit">
                    Expertise Field 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight leading-tight">
                  {cat.title}
                </h3>

                <ul className="flex flex-col gap-3.5 mt-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-brand-orange/30">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </RevealOnScroll>
        ))}
      </section>

      {/* Operational Methodology Section (Frequently Used Dark Slate Background) */}
      <RevealOnScroll direction="up" delay={200}>
        <section className="flex flex-col gap-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-brand-orange/15 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange" />
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row justify-between gap-6 items-start border-b border-slate-800 pb-8 relative z-10">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-brand-orange text-xs font-extrabold uppercase tracking-wider font-outfit">
                How We Deliver
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white font-outfit tracking-tight">
                Our Operational Methodology
              </h2>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              We believe projects do not fail at completion; rather, outcomes are compromised by inadequate attention to initial requirements. We combine early coordination, schedule controls, and leadership.
            </p>
          </div>

          {/* Methodology Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-3 relative p-6 bg-slate-900/90 border border-slate-800 rounded-2xl hover:border-brand-orange/50 hover:bg-slate-900 transition-all duration-300 group shadow-md">
                <span className="text-3xl font-black font-outfit text-brand-orange transition-colors">
                  {step.num}
                </span>
                <h4 className="text-white font-extrabold font-outfit text-base md:text-lg tracking-wide -mt-1">
                  {step.title}
                </h4>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}
