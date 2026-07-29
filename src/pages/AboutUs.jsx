import React, { useState, useEffect } from 'react';
import { History, Target, Eye, ShieldAlert, Award, Compass, Users, X, ChevronRight, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function AboutUs({ setIsModalOpen }) {
  const [activeTab, setActiveTab] = useState('history');
  const [selectedPersonnel, setSelectedPersonnel] = useState(null);

  useEffect(() => {
    if (setIsModalOpen) {
      setIsModalOpen(!!selectedPersonnel);
    }
    return () => {
      if (setIsModalOpen) setIsModalOpen(false);
    };
  }, [selectedPersonnel, setIsModalOpen]);

  const teamMembers = [
    {
      id: 'james',
      name: "James Williams",
      role: "Founder & Managing Director",
      specialty: "Railways & Transit Specialist",
      education: "B.Sc. Construction Management, Honors – Coventry University, UK",
      image: "/images/team_james.jpg",
      experienceYears: "34+ Years",
      desc: [
        "James Williams has 34 years+ of Railways / Transportation project experience gained in Dubai, Hong Kong, Malaysia, Singapore, Korea, Taiwan, Japan, Macao, Thailand, the USA and the UK, having demonstrated the ability to support a diverse range of high profile projects vis-a-vis development of coordinated project management / controls tools.",
        "Proven ability to perform in a management capacity with robust communications, presentation, motivational, computer and analysis skills with a thorough knowledge of industry practices and technologies. With proven project experience in the construction, infrastructure and property sectors, with extensive experience in regard to reclamation, tunnels, civil, infrastructure, building works and transportation systems.",
        "Considerable experience in the use of Project Planning / Controls Tools with respect to: Project Time / Cost Control, Earned Value Management & Analysis, Interface & Claims Management, Risk Assessment & Risk Management, Scope & Change Control, Documentation Control and Contract / Commercial Management.",
        "Founder of the Planning Planet community portal, the largest project controls network on the planet and also co-founder of the Guild of Project Controls which provides a global competency based career path, practitioner role descriptors and competency certifications."
      ]
    },
    {
      id: 'rao',
      name: "Lakshmipathi Rao",
      role: "Project Controls Specialist",
      specialty: "Systems Engineering Lead",
      education: "M.Sc. Strategic Planning & Project Management – Heriot-Watt University, Dubai; B.Tech EEE",
      image: "/images/team_rao.jpg",
      experienceYears: "24+ Years",
      desc: [
        "Lakshmipathi Rao has 24 years+ of expertise in Project Management Strategies development from pre-tendering to close-out the projects. Worked with various national and international organization in Oman, Dubai, Abu Dhabi, Qatar, India, Georgia and Malaysia.",
        "Expertise in Programme/Risk Management, EOT Claim development/analysis, Loss & Expenses strategies development/analyses for both client and contractors. Lead the Site Electrical & Instrumentation team up to 100 people. Having proven leadership skills, including managing and motivating other staff to achieve company objectives.",
        "Specialization in the fields of Systems Engineering (Power Supply & Distribution, Communication, Signalling, Train Control/Centralized/Vehicle Control Systems, Rolling Stock, Depot Equipments, PSD, AFC, EAC, Rolling stock, BMS, IT, Telecom, M&E, Instrumentation, CMMS, DCS, etc.). Specialization in Project Management tools i.e. software Primavera Project Planning (P3, 6, 7, 8.3, 16.2 Ver.), TILOS, PERT Master and ACONEX (Document Systems)."
      ]
    },
    {
      id: 'sateesh',
      name: "Sateesh Kumar",
      role: "General Manager",
      specialty: "Electrical & Instrumentation Operations",
      education: "MBA – Institute for Technology & Management, India; B.Tech EEE – JNTU, India",
      image: "/images/team_sateesh.jpg",
      experienceYears: "32+ Years",
      desc: [
        "Sateesh Kumar has 32 years expertise of handling Electrical & Instrumentation works of EPC nature in Oil and Gas, Petrochemicals, Power Plants, Refineries, Infrastructure Projects, Fertilizers etc., in the capacity of Project Manager/ General Manager / Project Director.",
        "Out of which, he worked as a Sr. General Manager, E&I Operations (HOD) in Tecnimont ICB, Maire Tecnimont Group, Italy for 15 years. Recently worked as a Sr. General Manager in Prime Electrical Contracting LLC, for almost 03 years and handled their entire Electrical construction operations in Dubai and Abu Dhabi operations."
      ]
    },
    {
      id: 'sekhar',
      name: "Chandra Sekhar",
      role: "Senior Electrical Engineer",
      specialty: "Operations Specialist",
      education: "B.Tech. Electrical & Electronics Engineering (President Award Winner)",
      image: "/images/team_sekhar.jpg",
      experienceYears: "25+ Years",
      desc: [
        "Chandra Sekhar is an Electrical & Electronics Engineer with over 25 years of Experience in the Oil, Gas, Petrochemical, Energy Sectors worked nationally and internationally.",
        "Extensive experience in Project design, planning, Control and Management of complex remote projects and client coordination. Also experienced in commercial contracts, vendor management and logistic supplies and in execution of projects.",
        "Experienced in managing large contracts, multi-level working structures management of safety at work, managing work sites. Received the prestigious Indian President Award for achieving the “Lowest injury frequency rate” from the Government of India."
      ]
    }
  ];

  const tabs = [
    {
      id: 'history',
      label: 'The History',
      icon: <History size={16} />,
      title: 'Our History & Establishment',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Mytreya Ventures Sdn Bhd was established in 2017 in Kuala Lumpur, Malaysia, as a specialized professional engineering and project management services firm. The organization was formerly known as Mytreya Holdings Sdn Bhd, which was active from 2010.
          </p>
          <p>
            Our core focus has always been providing dedicated Project Management, Power System Construction, and highly specialized Contract Administration solutions. By backing our undertakings with certified engineers and veteran contract leaders, we have supported massive national projects such as the MRT SBK lines and critical railway infrastructure systems.
          </p>
        </div>
      )
    },
    {
      id: 'strategy',
      label: 'The Strategy',
      icon: <Compass size={16} />,
      title: 'Our Project Strategy',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            The model for most of our projects includes at least one highly experienced and professionally qualified lead engineer or specialist, supported by an additional backup technical team as necessary.
          </p>
          <p>
            This hybrid approach guarantees that client requirements are handled with the highest level of detail. Project professionals are locally or internationally recruited depending on the technical demands and geographical context of each project, allowing us to align specialized talent directly to critical paths.
          </p>
        </div>
      )
    },
    {
      id: 'team',
      label: 'Our Team',
      icon: <Users size={16} />,
      title: 'Our Professional Personnel',
      content: (
        <div className="flex flex-col gap-8">
          <p className="text-slate-600 font-semibold leading-relaxed text-sm md:text-base border-l-4 border-brand-orange pl-4 bg-brand-orange/5 py-2.5 rounded-r-xl">
            Click on any personnel member below to view their detailed professional qualifications, career achievements, and project leadership history.
          </p>

          {/* Interactive Personnel Member Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedPersonnel(member)}
                className="bg-white border border-slate-200 p-5 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Photo & Experience Tag */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%230f172a"/><circle cx="50" cy="40" r="18" fill="%23cbd5e1"/><path d="M20,80 C20,60 80,60 80,80" fill="%23cbd5e1"/></svg>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                    {member.experienceYears}
                  </span>
                </div>

                {/* Name & Designation */}
                <div className="flex flex-col gap-1">
                  <span className="text-brand-orange text-xs font-extrabold uppercase tracking-wider font-outfit">
                    {member.role}
                  </span>
                  <h3 className="text-slate-900 font-extrabold text-lg md:text-xl font-outfit group-hover:text-brand-orange transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium line-clamp-1">
                    {member.specialty}
                  </p>
                </div>

                {/* Click action bar */}
                <div className="flex items-center justify-between text-xs font-extrabold text-brand-orange pt-3 border-t border-slate-100 mt-auto group-hover:translate-x-1 transition-transform">
                  <span className="flex items-center gap-1.5">
                    <UserCheck size={14} />
                    View Detailed Profile
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      label: 'Our Vision',
      icon: <Eye size={16} />,
      title: 'Our Forward Vision',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Our vision is to expand our specialized services into new profitable business areas across both national and international markets.
          </p>
          <p>
            We aim to be a premier partner for major transit, oil & gas, and energy infrastructure developments throughout Southeast Asia and the Middle East, setting benchmark standards for project control and engineering safety.
          </p>
        </div>
      )
    },
    {
      id: 'goal',
      label: 'Our Goal',
      icon: <Target size={16} />,
      title: 'Our Commitment & Goal',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Our goal is to deliver every project matching strict ISO and quality standards, maintaining absolute transparency for the client, and staying strictly within the project schedule and budget limits.
          </p>
          <p>
            We mitigate delay risks through early scope definition, robust program management, and aggressive tracking of project dependencies.
          </p>
        </div>
      )
    },
    {
      id: 'services',
      label: 'Core Services',
      icon: <Award size={16} />,
      title: 'Core Foundations',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Mytreya is built on three central pillars of project execution:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
            <li><strong>Client Focus:</strong> Custom engineering and management solutions designed to align directly with corporate business targets.</li>
            <li><strong>Service Excellence:</strong> Continuous value creation by utilizing seasoned experts and optimized project control strategies.</li>
            <li><strong>Professionalism:</strong> Strict adherence to ethical practices, absolute safety compliance, and total contract integrity.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'mission',
      label: 'Our Mission',
      icon: <ShieldAlert size={16} />,
      title: 'Our Core Mission',
      content: (
        <div className="flex flex-col gap-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Our mission is to support transit authorities and industrial contractors by delivering state-of-the-art systems installations, safety-gated substations, and watertight contract claims recovery.
          </p>
          <p>
            By combining technical expertise with legal-commercial rigor, we remove uncertainty from massive capital works, ensuring reliable assets and protected cash flows for all partners.
          </p>
        </div>
      )
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-12 relative">
      
      {/* Banner / Header */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            About Mytreya Ventures
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Based in Kuala Lumpur, Malaysia, we provide dedicated engineering solutions and specialized project management expertise.
          </p>
        </div>
      </RevealOnScroll>

      {/* Main Container - Sidebar Tabs + Content Box */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Left Side Tabs (Brand Orange Card) */}
        <RevealOnScroll direction="left" delay={100} className="lg:col-span-1 w-full">
          <div className="flex flex-col gap-2.5 bg-gradient-to-br from-brand-orange via-[#f79e2c] to-[#e6820c] border border-brand-orange/30 p-5 rounded-3xl shadow-lg text-white">
            <h3 className="text-xs font-extrabold uppercase text-white tracking-wider px-2 mb-1 font-outfit border-b border-white/20 pb-2">
              Company Info
            </h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 scrollbar-thin pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-semibold font-outfit shrink-0 whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 font-extrabold shadow-md scale-[1.02]'
                      : 'text-white/95 hover:bg-white/20 hover:text-white font-bold'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Side Detail Pane */}
        <RevealOnScroll direction="right" delay={200} className="lg:col-span-3 w-full">
          <div className="min-h-[380px] bg-white/80 border border-slate-200/80 p-8 md:p-12 rounded-3xl relative overflow-hidden glass-panel flex flex-col gap-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide border-b border-slate-200/60 pb-4 font-outfit flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                {currentTab.icon}
              </span>
              {currentTab.title}
            </h2>
            
            <div className="animate-fade-in">
              {currentTab.content}
            </div>

            {/* Decorative radial overlay */}
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-orange/5 rounded-full filter blur-3xl pointer-events-none" />
          </div>
        </RevealOnScroll>

      </div>

      {/* Intro Text Highlight Block */}
      <RevealOnScroll direction="zoom-in" delay={300}>
        <section className="bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center mt-4 shadow-xl">
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <h3 className="text-brand-orange font-bold text-lg font-outfit uppercase tracking-wider">Our Professional Mandate</h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
              "Mytreya Ventures Sdn Bhd operates with experienced, professionally qualified staff. Our core strategy focuses on assigning specialized engineering leads backed by robust program controls, ensuring every project delivery follows safety-gated processes and commercial best practices."
            </p>
          </div>
          <div className="shrink-0 font-bold font-outfit text-white text-sm border-l-2 border-brand-orange pl-4 py-2 bg-white/5 rounded-r-xl">
            Kuala Lumpur,<br /><span className="text-brand-orange">Malaysia</span>
          </div>
        </section>
      </RevealOnScroll>

      {/* Personnel Profile Detail Modal Window */}
      {selectedPersonnel && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-slate-950 border border-slate-800 text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 relative shadow-2xl font-outfit flex flex-col gap-6 scrollbar-thin">
            
            {/* Ambient Orange Glow */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-orange/20 rounded-full filter blur-3xl pointer-events-none" />

            {/* Header & Close Button */}
            <div className="flex justify-between items-start gap-4 relative z-10 border-b border-slate-800 pb-4 shrink-0">
              <div className="flex flex-col gap-1">
                <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest">
                  Executive Personnel Profile
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  {selectedPersonnel.name}
                </h2>
                <span className="text-slate-300 text-xs md:text-sm font-bold">
                  {selectedPersonnel.role} • <span className="text-brand-orange">{selectedPersonnel.specialty}</span>
                </span>
              </div>

              <button
                onClick={() => setSelectedPersonnel(null)}
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Photo & Full Experience */}
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              {/* Photo & Education Left Column */}
              <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
                <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg relative shrink-0">
                  <img
                    src={selectedPersonnel.image}
                    alt={selectedPersonnel.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-1.5 text-xs font-bold text-slate-200">
                  <span className="text-brand-orange text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                    <GraduationCap size={14} />
                    Education & Certification
                  </span>
                  <span className="leading-relaxed text-slate-300 font-medium">{selectedPersonnel.education}</span>
                </div>
              </div>

              {/* Biography Right Column */}
              <div className="flex-1 flex flex-col gap-4 text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Briefcase size={16} className="text-brand-orange" />
                  <span>Professional Background & Key Track Record</span>
                </h4>
                <div className="flex flex-col gap-3.5">
                  {selectedPersonnel.desc.map((para, idx) => (
                    <p key={idx} className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex justify-end border-t border-slate-800 pt-4 relative z-10 shrink-0">
              <button
                onClick={() => setSelectedPersonnel(null)}
                className="px-6 py-2.5 bg-brand-orange hover:bg-[#e6820c] text-white font-extrabold text-xs font-outfit rounded-xl transition-all shadow-md cursor-pointer"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
