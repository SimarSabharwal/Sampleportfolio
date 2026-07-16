import React from "react";
import { ArrowRight, Download, Github, Linkedin, Briefcase, Sparkles, Mail } from "lucide-react";
import { developerInfo } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface HeroProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

export default function Hero({ themeConfig, darkMode }: HeroProps) {
  
  // Dynamic color bindings based on themeConfig.hue
  const getAccentGradient = () => {
    switch (themeConfig.hue) {
      case "cyan": return "from-cyan-400 via-blue-500 to-indigo-500";
      case "emerald": return "from-emerald-400 via-teal-500 to-emerald-600";
      case "orange": return "from-orange-400 via-amber-500 to-red-500";
      case "rose": return "from-rose-400 via-pink-500 to-purple-500";
      case "zinc": return "from-zinc-400 via-zinc-600 to-zinc-800 dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-500";
      default: return "from-indigo-400 via-purple-500 to-pink-500";
    }
  };

  const getAccentBg = () => {
    switch (themeConfig.hue) {
      case "cyan": return "bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/10";
      case "emerald": return "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/10";
      case "orange": return "bg-orange-500 hover:bg-orange-600 shadow-orange-500/10";
      case "rose": return "bg-rose-500 hover:bg-rose-600 shadow-rose-500/10";
      case "zinc": return "bg-zinc-800 dark:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-100 shadow-zinc-800/10";
      default: return "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/10";
    }
  };

  const getAccentRing = () => {
    switch (themeConfig.hue) {
      case "cyan": return "ring-cyan-500/20";
      case "emerald": return "ring-emerald-500/20";
      case "orange": return "ring-orange-500/20";
      case "rose": return "ring-rose-500/20";
      case "zinc": return "ring-zinc-500/20";
      default: return "ring-indigo-500/20";
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-zinc-50 dark:bg-[#050505] transition-colors duration-300"
    >
      {/* Background patterns */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-100 pointer-events-none z-0"></div>
      )}

      {/* Decorative Blur Blobs (Glow) */}
      <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr ${getAccentGradient()} opacity-10 dark:opacity-20 blur-[80px] pointer-events-none z-0`}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Intro Column (A bento hero wrapper) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 bg-gradient-to-br from-white/60 to-white/20 dark:from-white/10 dark:to-transparent border border-zinc-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
            
            {/* Intro Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest font-bold text-zinc-600 dark:text-gray-300 uppercase">
                Available for Custom Contracts
              </span>
            </div>

            {/* Main Catchy Header */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light tracking-tight leading-tight text-zinc-900 dark:text-[#F5F5F7]">
              Designing Digital Products, <br />
              <span className={`bg-gradient-to-r ${getAccentGradient()} bg-clip-text text-transparent font-extrabold italic underline underline-offset-8 decoration-indigo-500/50`}>
                Engineering Scalable Systems.
              </span>
            </h1>

            {/* Paragraph Introduction */}
            <p className="text-zinc-600 dark:text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              {developerInfo.heroIntro}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className={`py-3 px-6 rounded-2xl font-medium text-xs text-white shadow-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${getAccentBg()}`}
              >
                <span>View My Work</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`py-3 px-6 rounded-2xl font-medium text-xs border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  darkMode 
                    ? "bg-white/10 border-white/10 text-gray-300 hover:bg-white/20 hover:text-white" 
                    : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <Mail size={13} />
                <span>Discuss Project</span>
              </a>
            </div>

            {/* Social icons bottom link */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/50 dark:border-white/5 w-full sm:w-auto">
              <span className="text-[10px] font-mono uppercase text-zinc-400 dark:text-gray-500 tracking-wider">CONNECT CHANNELS:</span>
              <a 
                href={developerInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-500 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>
              <a 
                href={developerInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-500 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Hero Right Media Column */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="relative">
              {/* Outer floating border ring */}
              <div className={`absolute -inset-4 rounded-[32px] border border-zinc-200/50 dark:border-white/5 pointer-events-none ring-4 ${getAccentRing()}`}></div>
              
              {/* Profile Wrapper Card */}
              <div className="relative rounded-3xl overflow-hidden p-4 w-72 sm:w-80 shadow-2xl bg-white/70 dark:bg-[#111111] border border-zinc-200 dark:border-white/5 transition-all">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                  <img
                    src={developerInfo.avatarUrl}
                    alt={developerInfo.name}
                    className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Miniature Floating tag inside photo */}
                  <div className="absolute bottom-3 left-3 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
                    <span className="text-[9px] font-mono font-bold text-white tracking-widest uppercase">DELHI, IN</span>
                  </div>
                </div>

                {/* Developer details underneath photo */}
                <div className="mt-4 text-left px-1 space-y-1">
                  <h3 className="text-zinc-900 dark:text-white font-display font-bold text-sm">{developerInfo.name}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[10px] leading-relaxed">
                    BCA Undergrad • BVIMR Delhi
                  </p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-[10px] italic leading-snug">
                    "Crafting functional art with TypeScript & clean architecture."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Statistics Block under Hero (Stylised Bento boxes) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {developerInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="bento-card-light dark:bento-card-dark-solid bg-white/70 dark:bg-[#111111] border border-zinc-200 dark:border-white/5 p-6 rounded-3xl text-left space-y-1.5 shadow-sm hover:translate-y-[-2px] transition-all"
            >
              <div className={`text-2xl sm:text-3xl font-bold font-display bg-gradient-to-r ${getAccentGradient()} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-zinc-500 dark:text-gray-500 text-[10px] font-semibold uppercase font-mono tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
