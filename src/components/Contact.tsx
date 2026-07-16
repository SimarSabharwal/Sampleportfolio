import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { developerInfo } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface ContactProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact({ themeConfig, darkMode }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sendState, setSendState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const getAccentText = () => {
    switch (themeConfig.hue) {
      case "cyan": return "text-cyan-500 dark:text-cyan-400";
      case "emerald": return "text-emerald-500 dark:text-emerald-400";
      case "orange": return "text-orange-500 dark:text-orange-400";
      case "rose": return "text-rose-500 dark:text-rose-400";
      case "zinc": return "text-zinc-600 dark:text-zinc-300";
      default: return "text-indigo-600 dark:text-indigo-400";
    }
  };

  const getAccentBg = () => {
    switch (themeConfig.hue) {
      case "cyan": return "bg-cyan-500 hover:bg-cyan-600";
      case "emerald": return "bg-emerald-500 hover:bg-emerald-600";
      case "orange": return "bg-orange-500 hover:bg-orange-600";
      case "rose": return "bg-rose-500 hover:bg-rose-600";
      case "zinc": return "bg-zinc-800 dark:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-100";
      default: return "bg-indigo-600 hover:bg-indigo-700";
    }
  };

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject line is required.";
    if (!formData.message.trim()) tempErrors.message = "Message details are required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSendState("sending");
    // Simulate SMTP network pipeline dispatch
    setTimeout(() => {
      // Simulate successful dispatch
      setSendState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setSendState("idle");
      }, 5000);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 border-t border-zinc-100 dark:border-white/5"
    >
      {/* Mesh patterns */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getAccentText()}`}>
            05 / PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight mt-1 text-zinc-900 dark:text-[#F5F5F7]">
            Initiate <span className="font-semibold italic">Contact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct channels info info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3 bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-bold font-display text-zinc-800 dark:text-[#F5F5F7]">
                Let's Formulate Ideas
              </h3>
              <p className="text-zinc-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
                Have an inquiry or custom SaaS specification? Send over details and we'll draft a concept and wireframe proposal.
              </p>
            </div>

            {/* Structured Channels Panel */}
            <div className="space-y-4 pt-2">
              {[
                { 
                  id: "c1", 
                  label: "Inbox Email Channel", 
                  value: developerInfo.email, 
                  href: `mailto:${developerInfo.email}`,
                  icon: <Mail size={16} /> 
                },
                { 
                  id: "c2", 
                  label: "Direct Dial / WhatsApp", 
                  value: developerInfo.phone, 
                  href: `tel:${developerInfo.phone}`,
                  icon: <Phone size={16} /> 
                },
                { 
                  id: "c3", 
                  label: "Studio Location Coordinates", 
                  value: developerInfo.location, 
                  href: "https://maps.google.com/?q=New+Delhi",
                  icon: <MapPin size={16} /> 
                }
              ].map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-[24px] border border-zinc-200 dark:border-white/5 bg-white/70 dark:bg-[#111111] hover:border-zinc-300 dark:hover:border-white/10 flex items-center gap-4 transition-all group cursor-pointer shadow-sm"
                >
                  <div className={`p-2.5 rounded-xl bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-transparent ${getAccentText()}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 dark:text-gray-500 uppercase block font-bold leading-none mb-1.5">{item.label}</span>
                    <span className="text-xs font-bold text-zinc-800 dark:text-[#F5F5F7] group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact SMTP Form */}
          <div className="lg:col-span-7">
            <div className="bento-card-light dark:bento-card-dark-solid bg-white/70 dark:bg-[#111111] rounded-3xl border border-zinc-200 dark:border-white/5 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Inputs Name and Email Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Simar Sabharwal"
                      disabled={sendState === "sending"}
                      className={`w-full text-xs p-3.5 rounded-2xl border bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-[#F5F5F7] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.name 
                          ? "border-red-500/50 focus:ring-red-500/20" 
                          : "border-zinc-200 dark:border-white/5 focus:ring-indigo-500/20 dark:focus:border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@gmail.com"
                      disabled={sendState === "sending"}
                      className={`w-full text-xs p-3.5 rounded-2xl border bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-[#F5F5F7] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? "border-red-500/50 focus:ring-red-500/20" 
                          : "border-zinc-200 dark:border-white/5 focus:ring-indigo-500/20 dark:focus:border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold">Subject Line</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="SaaS Development / Contract Inquiry"
                    disabled={sendState === "sending"}
                    className={`w-full text-xs p-3.5 rounded-2xl border bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-[#F5F5F7] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject 
                        ? "border-red-500/50 focus:ring-red-500/20" 
                        : "border-zinc-200 dark:border-white/5 focus:ring-indigo-500/20 dark:focus:border-white/10"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold">Message Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Simar, I'd like to collaborate on building a low-latency AI platform..."
                    disabled={sendState === "sending"}
                    className={`w-full text-xs p-3.5 rounded-2xl border bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-[#F5F5F7] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message 
                        ? "border-red-500/50 focus:ring-red-500/20" 
                        : "border-zinc-200 dark:border-white/5 focus:ring-indigo-500/20 dark:focus:border-white/10"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button controls */}
                <div className="pt-2">
                  {sendState === "idle" && (
                    <button
                      type="submit"
                      className={`w-full text-white font-semibold py-3 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all ${getAccentBg()}`}
                    >
                      <Send size={13} />
                      <span>Transmit Message</span>
                    </button>
                  )}

                  {sendState === "sending" && (
                    <button
                      type="button"
                      disabled
                      className="w-full bg-zinc-800 border border-zinc-750 text-zinc-400 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 font-semibold"
                    >
                      <RefreshCw size={13} className="animate-spin text-indigo-400" />
                      <span>Transmitting package via SMTP...</span>
                    </button>
                  )}

                  {sendState === "success" && (
                    <div className="p-3 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 rounded-2xl flex items-center gap-2.5 text-xs font-mono">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <div>
                        <p className="font-bold">Transmission complete!</p>
                        <p className="text-[10px] opacity-70">Simar will evaluate details and dispatch a reply shortly.</p>
                      </div>
                    </div>
                  )}
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
