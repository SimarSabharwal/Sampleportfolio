import React from "react";
import { ChevronUp, Github, Linkedin, Instagram, Code, Heart } from "lucide-react";
import { developerInfo } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface FooterProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

export default function Footer({ themeConfig, darkMode }: FooterProps) {

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      case "zinc": return "bg-zinc-850 dark:bg-zinc-200 hover:bg-zinc-750 dark:hover:bg-zinc-100";
      default: return "bg-indigo-600 hover:bg-indigo-700";
    }
  };

  return (
    <footer className="bg-zinc-100 dark:bg-[#050505] text-zinc-600 dark:text-gray-400 border-t border-zinc-200 dark:border-white/5 py-12 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Splitting Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-200 dark:border-white/5 text-left">
          
          {/* Logo & Brand description (Left) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md ${getAccentBg()}`}>
                S
              </span>
              <span className="text-zinc-900 dark:text-[#F5F5F7] font-display font-semibold text-base tracking-tight">
                Simar Sabharwal
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              Passionate Full Stack Developer and Creative Designer pursuing a Bachelor's in Computer Applications (BCA) at Bharati Vidyapeeth Delhi (BVIMR).
            </p>
          </div>

          {/* Quick Sitemap Links (Middle) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold tracking-wider">NAVIGATE SITE</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: "Home Base", href: "#home" },
                { label: "Narrative & Skills", href: "#about" },
                { label: "Work Sandbox", href: "#projects" },
                { label: "Service Catalog", href: "#services" },
                { label: "Client Verdicts", href: "#testimonials" },
                { label: "SMTP Channel", href: "#contact" }
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Handles Matrix (Right) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono text-zinc-400 dark:text-gray-500 uppercase font-bold tracking-wider">SOCIAL SIGNALS</h4>
              <div className="flex gap-2.5">
                {[
                  { id: "s1", icon: <Github size={15} />, href: developerInfo.github, label: "GitHub" },
                  { id: "s2", icon: <Linkedin size={15} />, href: developerInfo.linkedin, label: "LinkedIn" },
                  { id: "s3", icon: <Instagram size={15} />, href: developerInfo.instagram, label: "Instagram" }
                ].map(social => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/10 transition-all cursor-pointer"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={handleScrollTop}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer group"
              >
                <span>Back to top</span>
                <ChevronUp size={11} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright strip bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <Code size={11} className={getAccentText()} />
            <span>Simar Sabharwal Portfolio v2.4 • Delhi, India</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px]">
            <span>Designed & Engineered with</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React + Tailwind v4</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
