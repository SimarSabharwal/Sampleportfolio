import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface TestimonialsProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

export default function Testimonials({ themeConfig, darkMode }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      case "cyan": return "bg-cyan-500 text-white hover:bg-cyan-600";
      case "emerald": return "bg-emerald-500 text-white hover:bg-emerald-600";
      case "orange": return "bg-orange-500 text-white hover:bg-orange-600";
      case "rose": return "bg-rose-500 text-white hover:bg-rose-600";
      case "zinc": return "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-950 hover:bg-zinc-700 dark:hover:bg-zinc-100";
      default: return "bg-indigo-600 text-white hover:bg-indigo-700";
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 relative bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 border-t border-zinc-100 dark:border-white/5"
    >
      {/* Mesh patterns */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getAccentText()}`}>
            04 / VERDICT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight mt-1 text-zinc-900 dark:text-[#F5F5F7]">
            Client <span className="font-semibold italic">Testimonials</span>
          </h2>
        </div>

        {/* Dynamic Card Carousel (Desktop-optimized structure) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Frame */}
            <div className="bento-card-light dark:bento-card-dark-solid bg-white/70 dark:bg-[#111111] rounded-3xl border border-zinc-200 dark:border-white/5 p-6 sm:p-10 text-left space-y-6 shadow-md relative overflow-hidden transition-all duration-300">
              {/* Giant backdrop quotes icon */}
              <div className="absolute top-6 right-6 opacity-5 dark:opacity-10 text-zinc-400">
                <Quote size={120} className="transform rotate-180" />
              </div>

              {/* Star review ranking */}
              <div className="flex gap-1">
                {Array(testimonialsData[activeIndex].rating).fill(0).map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-zinc-700 dark:text-zinc-300 font-display font-medium text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
                "{testimonialsData[activeIndex].quote}"
              </p>

              {/* Author and Client Profile details */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  {/* Styled visual Avatar representation */}
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${testimonialsData[activeIndex].avatarGradient} flex items-center justify-center font-display font-bold text-white text-xs shadow-md`}>
                    {testimonialsData[activeIndex].author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-[#F5F5F7]">{testimonialsData[activeIndex].author}</h4>
                    <p className="text-[10px] text-zinc-500 dark:text-gray-400 font-mono">
                      {testimonialsData[activeIndex].role} • {testimonialsData[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Direct buttons selector triggers */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Indicator Dot Markers */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === index
                    ? "w-6 bg-zinc-800 dark:bg-white"
                    : "w-1.5 bg-zinc-300 dark:bg-white/10"
                }`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
