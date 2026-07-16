import React from "react";
import { Globe, Smartphone, Figma, Link2, Sparkles, Zap, Check } from "lucide-react";
import { servicesData } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface ServicesProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

export default function Services({ themeConfig, darkMode }: ServicesProps) {
  
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
      case "cyan": return "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-950/30 dark:text-cyan-400 border-cyan-500/20";
      case "emerald": return "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-500/20";
      case "orange": return "bg-orange-500/10 text-orange-500 dark:bg-orange-950/30 dark:text-orange-400 border-orange-500/20";
      case "rose": return "bg-rose-500/10 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400 border-rose-500/20";
      case "zinc": return "bg-zinc-500/10 text-zinc-600 dark:bg-zinc-800/30 dark:text-zinc-300 border-zinc-500/20";
      default: return "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-950/30 dark:text-indigo-400 border-indigo-500/20";
    }
  };

  const getAccentGradient = () => {
    switch (themeConfig.hue) {
      case "cyan": return "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/5";
      case "emerald": return "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/5";
      case "orange": return "group-hover:border-orange-500/50 group-hover:shadow-orange-500/5";
      case "rose": return "group-hover:border-rose-500/50 group-hover:shadow-rose-500/5";
      case "zinc": return "group-hover:border-zinc-500/50 group-hover:shadow-zinc-500/5";
      default: return "group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/5";
    }
  };

  // Map service icon name strings to actual Lucide icon nodes
  const renderServiceIcon = (iconName: string) => {
    const style = "w-5 h-5";
    switch (iconName) {
      case "Globe": return <Globe className={style} />;
      case "Smartphone": return <Smartphone className={style} />;
      case "Figma": return <Figma className={style} />;
      case "Link2": return <Link2 className={style} />;
      case "Sparkles": return <Sparkles className={style} />;
      case "Zap": return <Zap className={style} />;
      default: return <Sparkles className={style} />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 relative bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 border-t border-zinc-100 dark:border-white/5"
    >
      {/* Mesh patterns */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getAccentText()}`}>
            03 / CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight mt-1 text-zinc-900 dark:text-[#F5F5F7]">
            Professional <span className="font-semibold italic">Services</span>
          </h2>
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group bento-card-light dark:bento-card-dark-solid bg-white/70 dark:bg-[#111111] p-6 rounded-3xl border border-zinc-200 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left ${getAccentGradient()}`}
            >
              <div className="space-y-4">
                {/* Icon Wrapper block */}
                <div className={`p-3 rounded-2xl border inline-block ${getAccentBg()}`}>
                  {renderServiceIcon(service.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-zinc-900 dark:text-[#F5F5F7] font-display font-bold text-base tracking-tight group-hover:text-zinc-800 dark:group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-gray-400 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service details listing checklist */}
              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/5 space-y-2">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2 text-[11px] text-zinc-600 dark:text-gray-400 font-medium">
                    <Check size={12} className={`shrink-0 mt-0.5 ${getAccentText()}`} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
