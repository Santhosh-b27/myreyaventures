import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertTriangle, Copy, Check, RotateCw, User, MessageSquare, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Rail Transit & Signaling',
    message: ''
  });

  const [copiedKey, setCopiedKey] = useState(null);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    'Rail Transit & Signaling',
    'Power Substation & E&I',
    'EOT Claims Advisory',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCopyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.'
      });
      setFormState({ name: '', email: '', phone: '', serviceCategory: 'Rail Transit & Signaling', message: '' });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-16">
      
      {/* Header (Without Icon) */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Connect with our headquarters in Kuala Lumpur, our liaison team in Visakhapatnam, or send an enquiry directly to our project consultants.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Dark Slate Contact Info Cards */}
        <RevealOnScroll direction="left" delay={100} className="lg:col-span-5 w-full">
          <div className="flex flex-col gap-6 w-full">
            
            {/* Headquarters Card */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl flex flex-col gap-6">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-orange/15 rounded-full filter blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center relative z-10">
                <span className="px-3.5 py-1 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-extrabold font-outfit rounded-full uppercase tracking-wider">
                  Headquarters
                </span>
                <span className="text-slate-400 font-mono text-xs">Malaysia</span>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-white font-extrabold text-xl font-outfit">
                  Mytreya Ventures Sdn Bhd
                </h3>
                <span className="text-brand-orange font-mono text-xs font-bold">SSM Reg: 1243694-W</span>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium mt-1">
                  Ground Floor, No.122, Jalan Thamby Abdullah, Off Jalan Tun Sambanthan (Brickfield), Kuala Lumpur, Wilayah Persekutuan 50470, Malaysia.
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-slate-800 pt-4 relative z-10 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-bold">
                  <Phone size={14} className="text-brand-orange" />
                  <span>+603-6148 2048 / +603-9970 3197</span>
                </div>
                <div className="flex items-center gap-2 text-brand-orange font-extrabold">
                  <Phone size={14} />
                  <span>Mobile: +60 10 8969776</span>
                </div>
              </div>
            </div>

            {/* India Liaison Office Card */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl flex flex-col gap-4">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-orange/15 rounded-full filter blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center relative z-10">
                <span className="px-3.5 py-1 bg-white/10 border border-white/20 text-slate-200 text-xs font-extrabold font-outfit rounded-full uppercase tracking-wider">
                  India Office
                </span>
                <span className="text-slate-400 font-mono text-xs">AP, India</span>
              </div>

              <div className="flex flex-col gap-1.5 relative z-10">
                <h3 className="text-white font-extrabold text-lg font-outfit">
                  Mytreya Ventures
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  Unit No.211, #4-13/23, Paluri Ville, Opp. Sivaji Nagar, Near Toll Gate, Agnampudi, Visakhapatnam – 530046, Andhra Pradesh, India.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-3 relative z-10 text-xs font-extrabold text-brand-orange flex items-center gap-2">
                <Phone size={14} />
                <span>Mobile: +91 9949502858</span>
              </div>
            </div>

            {/* Perfectly Aligned Email & Official WhatsApp Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch w-full">
              
              {/* Card 1: Official Email */}
              <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-5 rounded-2xl flex items-center justify-between text-white shadow-md h-full relative overflow-hidden group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-orange/20 border border-brand-orange/30 rounded-xl text-brand-orange shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase font-outfit tracking-wider">Official E-Mail</span>
                    <a href="mailto:info@mytreyaventures.com" className="text-brand-orange text-xs font-extrabold hover:underline break-all">
                      info@mytreyaventures.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyText('info@mytreyaventures.com', 'email')}
                  className="p-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-all cursor-pointer shrink-0 ml-2"
                  title="Copy E-Mail"
                >
                  {copiedKey === 'email' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Card 2: Official WhatsApp */}
              <a
                href="https://wa.me/60108969776"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] border border-[#25D366] p-5 rounded-2xl flex items-center justify-between text-white font-outfit shadow-md h-full transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/20 border border-white/30 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white shrink-0">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.141-1.347a9.967 9.967 0 004.871 1.259h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.667-1.039-5.174-2.926-7.062A9.925 9.925 0 0012.012 2zm.004 16.534h-.003a8.28 8.28 0 01-4.223-1.162l-.303-.18-3.134.821.836-3.056-.197-.314A8.272 8.272 0 013.7 11.984c0-4.58 3.727-8.307 8.312-8.307 2.22 0 4.308.866 5.877 2.438a8.27 8.27 0 012.433 5.872c0 4.582-3.728 8.307-8.306 8.307zm4.557-6.222c-.25-.125-1.477-.729-1.706-.812-.229-.083-.396-.125-.563.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.85 6.85 0 01-2.013-1.241 7.55 7.55 0 01-1.393-1.737c-.146-.25-.016-.385.109-.509.113-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429-.146-.008-.312-.008-.479-.008s-.438.063-.667.312c-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.166 1.764 2.695 4.274 3.778.597.257 1.063.41 1.427.526.6.19 1.146.163 1.577.099.48-.071 1.477-.604 1.686-1.187.208-.583.208-1.083.146-1.187-.063-.105-.229-.188-.479-.313z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/80 text-[10px] font-extrabold uppercase tracking-wider">Instant Chat</span>
                    <span className="text-white font-extrabold text-xs">WhatsApp Us Direct</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </a>

            </div>

          </div>
        </RevealOnScroll>

        {/* Right Column: Contact Form */}
        <RevealOnScroll direction="right" delay={200} className="lg:col-span-7 w-full">
          <div className="bg-white border border-slate-200/90 p-8 md:p-10 rounded-3xl relative overflow-hidden w-full shadow-xl">
            <div className="flex flex-col gap-1 mb-6 pb-4 border-b border-slate-100">
              <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest font-outfit">
                Commercial & Technical Inquiries
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-outfit tracking-tight">
                Submit Your Project Request
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Status Alert Banner */}
              {status.type && (
                <div className={`flex items-start gap-3 p-4 rounded-2xl text-xs font-bold ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.type === 'success' ? <CheckCircle size={18} className="shrink-0 text-green-600 mt-0.5" /> : <AlertTriangle size={18} className="shrink-0 text-red-600 mt-0.5" />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Service Category Pills */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-600 font-extrabold uppercase tracking-wider font-outfit">
                  Select Project Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceCategories.map((cat, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormState({ ...formState, serviceCategory: cat })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-extrabold font-outfit transition-all duration-300 cursor-pointer ${
                        formState.serviceCategory === cat
                          ? 'bg-slate-950 text-brand-orange border border-slate-800 shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs text-slate-700 font-extrabold uppercase tracking-wider font-outfit">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-3.5 text-slate-400" />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Ir. Ahmad Razali"
                    className="w-full bg-slate-50/70 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-800 font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-slate-700 font-extrabold uppercase tracking-wider font-outfit">
                    E-Mail Address *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-800 font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs text-slate-700 font-extrabold uppercase tracking-wider font-outfit">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-3.5 text-slate-400" />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+60 10 896 9776"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-800 font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-slate-700 font-extrabold uppercase tracking-wider font-outfit">
                  Project Description & Requirements *
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Provide brief details regarding project timeline, EOT claim requirements, or system engineering specifications..."
                    className="w-full bg-slate-50/70 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-800 font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-4 bg-brand-orange hover:bg-[#e6820c] text-white text-sm font-extrabold uppercase tracking-wider font-outfit rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(246,147,28,0.35)] hover:shadow-[0_15px_40px_rgba(246,147,28,0.5)] disabled:opacity-50 hover:-translate-y-0.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RotateCw size={18} className="animate-spin text-white" />
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Enquiry</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

            </form>
          </div>
        </RevealOnScroll>

      </div>

    </div>
  );
}
