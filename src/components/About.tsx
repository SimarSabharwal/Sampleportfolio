import React, { useState } from "react";
import { BookOpen, Award, Sparkles, Code2, Database, Palette, Wrench } from "lucide-react";
import { developerInfo, skillsData, experiencesData } from "../data";
import { ThemeConfig } from "./ProjectSimulators";

interface AboutProps {
  themeConfig: ThemeConfig;
  darkMode: boolean;
}

export default function About({ themeConfig, darkMode }: AboutProps) {
  const [activeCategory, setActiveCategory] = useState<"Frontend" | "Backend" | "Design" | "Tools">("Frontend");

  const categories = [
    { id: "Frontend", label: "Client Layer", icon: <Code2 size={13} /> },
    { id: "Backend", label: "Server & Data", icon: <Database size={13} /> },
    { id: "Design", label: "Creative & UI", icon: <Palette size={13} /> },
    { id: "Tools", label: "DevOps & Tools", icon: <Wrench size={13} /> }
  ];

  // Filters skills based on selected category
  const filteredSkills = skillsData.filter(s => s.category === activeCategory);

  const getAccentGradient = () => {
    switch (themeConfig.hue) {
      case "cyan": return "from-cyan-400 to-blue-500";
      case "emerald": return "from-emerald-400 to-teal-500";
      case "orange": return "from-orange-400 to-amber-500";
      case "rose": return "from-rose-400 to-pink-500";
      case "zinc": return "from-zinc-500 to-zinc-700 dark:from-zinc-300 dark:to-zinc-500";
      default: return "from-indigo-400 to-purple-500";
    }
  };

  const getAccentBg = () => {
    switch (themeConfig.hue) {
      case "cyan": return "bg-cyan-500 text-white";
      case "emerald": return "bg-emerald-500 text-white";
      case "orange": return "bg-orange-500 text-white";
      case "rose": return "bg-rose-500 text-white";
      case "zinc": return "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-950";
      default: return "bg-indigo-600 text-white";
    }
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

  const getSkillLabel = (level: number) => {
    if (level >= 95) return "Expert";
    if (level >= 90) return "Advanced";
    if (level >= 80) return "Proficient";
    return "Skilled";
  };

  return (
    <section 
      id="about" 
      className="py-20 relative bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 border-t border-zinc-100 dark:border-white/5"
    >
      {/* Decorative floating grids */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getAccentText()}`}>
            01 / WHO I AM
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight mt-1 text-zinc-900 dark:text-[#F5F5F7]">
            Background & <span className="font-semibold italic">Skills Hub</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Narrative / About Column (Left - A sleek Bento Card itself) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4 bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-bold font-display text-zinc-800 dark:text-[#F5F5F7]">
                Crafting Code with Design in Mind
              </h3>
              <p className="text-zinc-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {developerInfo.aboutMe}
              </p>
            </div>

            {/* Timelines of Academic & Freelance Path */}
            <div className="space-y-4 pt-2">
              <h4 className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-gray-500 uppercase font-bold">
                ACADEMICS & CAREER
              </h4>
              
              <div className="space-y-4">
                {experiencesData.map((exp) => (
                  <div 
                    key={exp.id}
                    className="p-6 rounded-[24px] border border-zinc-200 dark:border-white/5 bg-white/70 dark:bg-[#111111] relative hover:border-zinc-300 dark:hover:border-white/10 transition-all shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <div className={`mt-0.5 p-2 rounded-xl bg-zinc-100 dark:bg-white/10 ${getAccentText()}`}>
                          {exp.type === "Education" ? <BookOpen size={14} /> : <Award size={14} />}
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-zinc-800 dark:text-[#F5F5F7]">{exp.role}</h5>
                          <p className="text-[11px] text-zinc-500 dark:text-gray-400 font-medium">{exp.organization}</p>
                          <p className="text-[10px] text-zinc-400 dark:text-gray-500 font-mono mt-1">{exp.period} • {exp.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2 border-l border-zinc-200 dark:border-white/5 pl-4">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-[11px] text-zinc-600 dark:text-gray-400 leading-normal list-none relative">
                          <span className={`absolute left-[-18px] top-1.5 w-1.5 h-1.5 rounded-full ${getAccentBg()}`}></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Skills Selector (Right - A major Bento Grid panel) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between gap-6 backdrop-blur-md">
              
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-gray-500 uppercase font-bold">
                    SKILLS ENGINE
                  </h4>
                  <span className="text-[9px] font-mono text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full bg-blue-500/10">interactive board</span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-gray-400">
                  Select a category block to probe core technologies, relative expertise tiers, and proficiency levels.
                </p>
              </div>

              {/* Toggle Category Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-2 py-3 rounded-2xl border text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? getAccentBg() + " border-transparent shadow-md"
                        : "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-gray-400 hover:bg-zinc-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.id}</span>
                  </button>
                ))}
              </div>

              {/* Skills Bars Display */}
              <div className="space-y-4 py-2 flex-1 flex flex-col justify-center text-left">
                {filteredSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-zinc-800 dark:text-[#F5F5F7]">{skill.name}</span>
                      <span className="font-mono text-[10px] text-zinc-500 dark:text-gray-400">
                        {getSkillLabel(skill.level)} ({skill.level}%)
                      </span>
                    </div>
                    {/* The Bar */}
                    <div className="w-full bg-zinc-100 dark:bg-white/5 h-2 rounded-full overflow-hidden border border-transparent dark:border-white/5">
                      <div 
                        style={{ width: `${skill.level}%` }}
                        className={`bg-gradient-to-r ${getAccentGradient()} h-full rounded-full transition-all duration-500`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom tag line explaining mastery */}
              <div className="bg-zinc-100 dark:bg-white/5 p-4 rounded-2xl border border-zinc-200 dark:border-white/5 flex items-center gap-2.5 text-[10px] font-mono text-zinc-500 dark:text-gray-400 text-left">
                <Sparkles size={12} className="text-yellow-500 shrink-0" />
                <span>Routinely building scalable API gateways, responsive React designs, and fast loading layouts.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
