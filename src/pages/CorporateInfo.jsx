import React, { useState } from 'react';
import { Copy, Check, Building2, FileText, MapPin, Phone, Mail, Globe, Calendar, Zap, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function CorporateInfo() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-16">
      
      {/* Header */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col gap-3">
          <span className="text-brand-orange uppercase text-xs font-bold tracking-widest font-outfit">
            Legal Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Corporate Information
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Official registration credentials and company contact details for Mytreya Ventures Sdn Bhd.
          </p>
        </div>
      </RevealOnScroll>

      {/* Primary Company Identity Banner (Cardless Spatial Layout) */}
      <RevealOnScroll direction="zoom-in">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-10 border-b-2 border-slate-200/80">
          
          <div className="flex items-center gap-5">
            <div className="p-4 bg-brand-orange/15 border border-brand-orange/30 rounded-2xl text-brand-orange shrink-0 shadow-xs">
              <Building2 size={36} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase font-extrabold text-brand-orange tracking-widest font-outfit">
                Name of the Firm
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit tracking-tight text-slate-900">
                Mytreya Ventures Sdn Bhd
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="px-5 py-2.5 bg-brand-orange/10 border border-brand-orange/25 rounded-2xl flex items-center gap-2 text-xs md:text-sm font-extrabold font-outfit text-slate-900 shadow-xs">
              <FileText size={16} className="text-brand-orange" />
              <span>SSM No: <strong className="font-mono text-brand-orange text-sm md:text-base">1243694-W</strong></span>
            </div>

            <div className="px-5 py-2.5 bg-slate-100 border border-slate-200/80 rounded-2xl flex items-center gap-2 text-xs md:text-sm font-extrabold font-outfit text-slate-800 shadow-xs">
              <Calendar size={16} className="text-brand-orange" />
              <span>Est. <strong className="text-slate-900 font-outfit">2017</strong></span>
            </div>
          </div>

        </div>
      </RevealOnScroll>

      {/* Main Corporate Details Grid (Cardless Spatial Showcase) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
        
        {/* Item 1: Registered Headquarters Address */}
        <RevealOnScroll direction="left" delay={100} className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-brand-orange pl-6 py-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-2xl text-brand-orange shrink-0 mt-0.5 shadow-xs">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase font-extrabold text-brand-orange tracking-widest font-outfit">
                  Registered Headquarters Address
                </span>
                <p className="text-slate-900 font-extrabold text-base md:text-lg leading-relaxed max-w-4xl font-outfit">
                  Ground Floor, No.122, Jalan Thamby Abdullah, Off Jalan Tun Sambanthan (Brickfield), Kuala Lumpur, Wilayah Persekutuan 50470, Malaysia.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopy("Ground Floor, No.122, Jalan Thamby Abdullah, Off Jalan Tun Sambanthan (Brickfield), Kuala Lumpur, Wilayah Persekutuan 50470, Malaysia.", 'address')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-brand-orange text-white font-extrabold text-xs font-outfit rounded-xl transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer shadow-sm hover:scale-105"
              title="Copy address"
            >
              {copiedKey === 'address' ? (
                <>
                  <Check size={15} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </RevealOnScroll>

        {/* Item 2: Telephone & Mobile Lines */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="flex flex-col gap-4 border-l-2 border-slate-200 hover:border-brand-orange pl-6 py-2 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange shrink-0 shadow-xs">
                <Phone size={20} />
              </div>
              <span className="text-xs uppercase font-extrabold text-brand-orange tracking-widest font-outfit">
                Telephone & Mobile Lines
              </span>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase font-outfit">Office Lines</span>
                <a href="tel:+60361482048" className="text-slate-900 font-extrabold text-base md:text-lg hover:text-brand-orange transition-colors font-outfit">
                  +603-6148 2048 / +603-9970 3197
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase font-outfit">Direct Mobile Lines</span>
                <p className="text-brand-orange font-extrabold text-base md:text-lg font-outfit">
                  +60 10 8969776 / +91 9949502858
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Item 3: E-Mail & Digital Portal */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="flex flex-col gap-4 border-l-2 border-slate-200 hover:border-brand-orange pl-6 py-2 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange shrink-0 shadow-xs">
                <Mail size={20} />
              </div>
              <span className="text-xs uppercase font-extrabold text-brand-orange tracking-widest font-outfit">
                E-Mail & Digital Portal
              </span>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase font-outfit">Official E-Mail</span>
                <a 
                  href="mailto:info@mytreyaventures.com" 
                  className="text-brand-orange font-extrabold text-base md:text-lg hover:underline break-words font-outfit"
                >
                  info@mytreyaventures.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase font-outfit flex items-center gap-1">
                  <Globe size={13} className="text-brand-orange" />
                  Website
                </span>
                <a 
                  href="https://www.mytreyaventures.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-extrabold text-base md:text-lg hover:text-brand-orange transition-colors break-words font-outfit"
                >
                  www.mytreyaventures.com
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Item 4: Primary Fields of Activities */}
        <RevealOnScroll direction="up" delay={250} className="lg:col-span-3">
          <div className="flex flex-col gap-5 border-l-4 border-brand-orange pl-6 py-4 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange shrink-0 shadow-xs">
                <Zap size={20} />
              </div>
              <span className="text-xs uppercase font-extrabold text-brand-orange tracking-widest font-outfit">
                Primary Fields of Activities
              </span>
            </div>

            <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base max-w-5xl">
              Railway Track & System Works (Signalling, Comms & Depot), General Civil Construction, Power System Substation E&I, and Project Management Consultancy (EOT delay analysis, loss/expense claims administration).
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <span className="px-4 py-2 bg-slate-100 text-slate-900 text-xs font-extrabold font-outfit rounded-full border border-slate-200 shadow-xs">
                • Railway Track & Signaling Works
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-900 text-xs font-extrabold font-outfit rounded-full border border-slate-200 shadow-xs">
                • Power Substation & E&I Construction
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-900 text-xs font-extrabold font-outfit rounded-full border border-slate-200 shadow-xs">
                • Extension of Time (EOT) Delay Analysis
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-900 text-xs font-extrabold font-outfit rounded-full border border-slate-200 shadow-xs">
                • Loss & Expense Claims Administration
              </span>
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* Verification Footer Banner */}
      <RevealOnScroll direction="up" delay={300}>
        <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold font-outfit shadow-xl">
          <span className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-brand-orange" />
            <span>Registered under the Companies Act of Malaysia</span>
          </span>
          <span className="text-brand-orange font-mono text-sm">Registration Code: SSM 1243694-W</span>
        </div>
      </RevealOnScroll>

    </div>
  );
}
