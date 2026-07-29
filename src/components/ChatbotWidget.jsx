import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, RotateCcw, Phone, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome to Mytreya Ventures AI Support! 👋\nI am your virtual engineering & consultancy assistant. Ask me anything about our railway systems, power installations, or EOT commercial claims.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actionButtons: [
        { label: "Our Services", query: "What services do you offer?" },
        { label: "EOT & Claims", query: "Tell me about EOT & Claims" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "What services do you offer?",
    "Tell me about EOT & Claims",
    "Where are your offices?",
    "Project track record?",
    "How to request a quote?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTooltip(false);
    }
  }, [messages, isOpen]);

  // Hide initial tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const resetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Conversation reset. How can I assist you with Mytreya's project consultancy or engineering services?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Comprehensive Knowledge Base Lookup
  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('service') || q.includes('what we do') || q.includes('expert') || q.includes('offer')) {
      return {
        text: "Mytreya Ventures offers specialized infrastructure services:\n\n1. 🚆 Railway Track & Systems (OCS, Signalling, Comms, Depot)\n2. ⚡ Power Sector Installations & Substation E&I\n3. 🛢️ Oil & Gas Industrial Instrumentation\n4. ⚖️ EOT Delay Analysis & Commercial Loss/Expense Claims.",
        actionButtons: [
          { label: "Chat on WhatsApp", link: "https://wa.me/60108969776" }
        ]
      };
    }

    if (q.includes('claim') || q.includes('eot') || q.includes('delay') || q.includes('contract') || q.includes('dispute')) {
      return {
        text: "We specialize in Project Management Consultancy, Extension of Time (EOT) delay analysis, prolongation cost assessments, disruption claims, and commercial loss/expense claim settlements for major transit networks and refinery plants.",
        actionButtons: [
          { label: "Talk to Claims Expert", link: "https://wa.me/60108969776" }
        ]
      };
    }

    if (q.includes('office') || q.includes('location') || q.includes('address') || q.includes('where') || q.includes('malaysia') || q.includes('india')) {
      return {
        text: "Our International Offices:\n\n📍 Headquarters (Malaysia):\nGround Floor, No.122, Jalan Thamby Abdullah, Brickfield, 50470 Kuala Lumpur.\n\n📍 Liaison Office (India):\nUnit No.211, Paluri Ville, Agnampudi, Visakhapatnam, Andhra Pradesh – 530046.",
        actionButtons: [
          { label: "Call KL Office", tel: "tel:+60361482048" },
          { label: "Call India Office", tel: "tel:+919949502858" }
        ]
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('call') || q.includes('number')) {
      return {
        text: "Contact Mytreya Ventures:\n\n📞 Malaysia Mobile: +60 10 8969776\n📞 Office Phone: +603-6148 2048 / +603-9970 3197\n📞 India Mobile: +91 9949502858\n✉️ Email: info@mytreyaventures.com",
        actionButtons: [
          { label: "Direct WhatsApp", link: "https://wa.me/60108969776" }
        ]
      };
    }

    if (q.includes('project') || q.includes('track') || q.includes('siemens') || q.includes('motorola') || q.includes('experience')) {
      return {
        text: "Our Premier Executed & Active Track Record:\n\n• RTS Link Project, Malaysia (Siemens Malaysia)\n• KVDT Nationwide TETRA Network (Motorola Solutions)\n• Metro Manila Subway Project (Colas Rail Asia)\n• Package S7 & S8 MRT SBK Claims (MRT Corp)\n• HPCL SRU/SFU EPCC-07 Infrastructure (Petrofac)",
        actionButtons: []
      };
    }

    if (q.includes('quote') || q.includes('cost') || q.includes('pricing') || q.includes('hire') || q.includes('enquiry')) {
      return {
        text: "To receive an official commercial proposal or technical feasibility assessment for your project, send us brief scope details via WhatsApp or email info@mytreyaventures.com.",
        actionButtons: [
          { label: "Request Proposal on WhatsApp", link: "https://wa.me/60108969776" }
        ]
      };
    }

    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('greetings')) {
      return {
        text: "Hello! Welcome to Mytreya Ventures. How can I assist you with your railway, power system, or claims consultancy inquiry?",
        actionButtons: []
      };
    }

    return {
      text: "Thank you for asking! For custom technical specifications or formal project tenders, feel free to chat with our engineering consultants on WhatsApp or email info@mytreyaventures.com.",
      actionButtons: [
        { label: "Connect on WhatsApp", link: "https://wa.me/60108969776" }
      ]
    };
  };

  const handleSend = (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg = {
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseObj = generateBotResponse(messageText);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: responseObj.text,
          actionButtons: responseObj.actionButtons || [],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <>
      {/* Floating Action Button (Positioned on LEFT SIDE) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        
        {/* Tooltip Badge */}
        {showTooltip && !isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-950 text-white border border-slate-800 px-3.5 py-2 rounded-2xl shadow-xl text-xs font-bold font-outfit animate-in fade-in slide-in-from-left-3 duration-300">
            <Sparkles size={14} className="text-brand-orange" />
            <span>AI Assistant Online</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:bg-slate-900 border border-slate-700 text-white p-4 rounded-full shadow-[0_10px_35px_rgba(15,23,42,0.6)] hover:shadow-[0_15px_45px_rgba(246,147,28,0.45)] transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105"
          aria-label="Open AI Assistant Chat"
          title="AI Assistant Chatbot"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <>
              <Bot size={26} className="text-brand-orange group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full border-2 border-slate-950 animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Chatbot Window Modal (Positioned on LEFT SIDE) */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-8 w-[92vw] sm:w-[400px] h-[560px] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 font-outfit">
          
          {/* Header Gradient Top Line */}
          <div className="h-1 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange w-full" />

          {/* Header */}
          <div className="bg-slate-950 border-b border-slate-800 p-4 flex items-center justify-between text-white relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange shadow-xs">
                <Bot size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm flex items-center gap-1.5 text-white">
                  Mytreya AI Assistant
                  <Sparkles size={13} className="text-brand-orange" />
                </span>
                <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live Knowledge Base • Instant Support
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                title="Reset Chat"
              >
                <RotateCcw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                title="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-slate-950/95 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 max-w-[88%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 shadow-xs">
                    <Bot size={15} />
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line font-medium shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-orange to-[#e6820c] text-white font-extrabold rounded-br-none'
                        : 'bg-slate-900 border border-slate-800 border-l-2 border-l-brand-orange text-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Interactive Bot Action Buttons */}
                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {msg.actionButtons.map((btn, bIdx) => (
                        btn.link ? (
                          <a
                            key={bIdx}
                            href={btn.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-extrabold text-[11px] rounded-xl flex items-center gap-1 hover:bg-brand-orange hover:text-white transition-all shadow-xs"
                          >
                            <span>{btn.label}</span>
                            <ArrowRight size={12} />
                          </a>
                        ) : btn.tel ? (
                          <a
                            key={bIdx}
                            href={btn.tel}
                            className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-200 font-extrabold text-[11px] rounded-xl flex items-center gap-1 hover:border-brand-orange hover:text-brand-orange transition-all shadow-xs"
                          >
                            <Phone size={12} className="text-brand-orange" />
                            <span>{btn.label}</span>
                          </a>
                        ) : (
                          <button
                            key={bIdx}
                            onClick={() => handleSend(btn.query)}
                            className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 font-bold text-[11px] rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all shadow-xs cursor-pointer"
                          >
                            {btn.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}

                  <span className={`text-[10px] text-slate-500 px-1 font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-900 border border-slate-800 p-3 rounded-2xl w-fit">
                <Bot size={15} className="text-brand-orange animate-bounce" />
                <span>Mytreya AI is querying Knowledge Base...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompt Chips */}
          <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 bg-slate-950 hover:bg-brand-orange/20 border border-slate-800 hover:border-brand-orange/40 text-slate-300 hover:text-brand-orange text-[11px] font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about railway, power or claims..."
              className="flex-1 bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-brand-orange hover:bg-[#e6820c] text-white rounded-xl disabled:opacity-40 transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <Send size={15} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
