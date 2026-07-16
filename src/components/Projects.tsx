import React, { useState } from "react";
import { 
  PhoneCall, Cpu, Activity, Music, User, Layers, Github, 
  ExternalLink, Sparkles, Play, CheckCircle2, X, ChevronRight,
  TrendingUp, Star, Filter, Code2
} from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";
import ProjectSimulator, { ThemeConfig } from "./ProjectSimulators";

interface ProjectsProps {
  themeConfig: ThemeConfig;
  setThemeConfig: React.Dispatch<React.SetStateAction<ThemeConfig>>;
  darkMode: boolean;
}

export default function Projects({ themeConfig, setThemeConfig, darkMode }: ProjectsProps) {
  const [filter, setFilter] = useState<"All" | "AI" | "Full Stack" | "UI/UX" | "Other">("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter projects based on tags
  const filteredProjects = projectsData.filter(p => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  // Dynamic style selectors
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

  // Map icon strings to Lucide icon tags
  const renderProjectIcon = (iconName: string) => {
    const classStyle = "w-5 h-5 text-white";
    switch (iconName) {
      case "PhoneCall": return <PhoneCall className={classStyle} />;
      case "Cpu": return <Cpu className={classStyle} />;
      case "Activity": return <Activity className={classStyle} />;
      case "Music": return <Music className={classStyle} />;
      case "User": return <User className={classStyle} />;
      case "Layers": return <Layers className={classStyle} />;
      default: return <Sparkles className={classStyle} />;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 relative bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 border-t border-zinc-100 dark:border-white/5"
    >
      {/* Mesh patterns */}
      {themeConfig.gridEnabled && (
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getAccentText()}`}>
              02 / SELECTED WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight mt-1 text-zinc-900 dark:text-[#F5F5F7]">
              Bento <span className="font-semibold italic">Project Showcase</span>
            </h2>
          </div>

          {/* Filtering Toggles */}
          <div className="flex flex-wrap items-center gap-2 bg-white/60 dark:bg-white/5 p-1.5 rounded-2xl border border-zinc-200 dark:border-white/5 backdrop-blur-sm self-start md:self-auto">
            {(["All", "AI", "Full Stack", "UI/UX", "Other"] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? getAccentBg() + " shadow-sm font-semibold text-white"
                    : "text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bento-card-light dark:bento-card-dark-solid rounded-3xl border border-zinc-200 dark:border-white/5 overflow-hidden bg-white/70 dark:bg-[#111111] hover:border-zinc-300 dark:hover:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card visual header */}
              <div className={`p-5 bg-gradient-to-br ${project.imageGradient} h-24 relative flex items-center justify-between overflow-hidden`}>
                {/* Visual patterns overlay */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-xl"></div>
                
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 relative z-10">
                  {renderProjectIcon(project.icon)}
                </div>

                <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-widest text-zinc-100 uppercase font-bold relative z-10">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left">
                <div className="space-y-2">
                  <h3 className="text-zinc-900 dark:text-[#F5F5F7] font-display font-extrabold text-base tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-medium text-zinc-500 dark:text-gray-400 font-mono italic leading-snug">
                    {project.tagline}
                  </p>
                  <p className="text-zinc-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags array */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[9px] font-mono px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-gray-500 font-bold">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Interactive metrics bar */}
                <div className="grid grid-cols-3 gap-2 border-t border-zinc-100 dark:border-white/5 pt-4 text-center">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-[9px] font-mono text-zinc-400 dark:text-gray-500 uppercase leading-none">{stat.label}</div>
                      <div className="text-[11px] font-bold font-display text-zinc-800 dark:text-[#F5F5F7]">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Project launch actions */}
                <div className="flex gap-2 pt-2 border-t border-zinc-100 dark:border-white/5">
                  <button
                    onClick={() => setActiveProject(project)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${getAccentBg()}`}
                  >
                    <Play size={11} className="fill-white" />
                    <span>Launch Sandbox</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
                    title="Code repository"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* IMMERSIVE FULL-SCREEN WORKSPACE MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div className="relative w-full max-w-5xl bg-[#111111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-2xl bg-gradient-to-br ${activeProject.imageGradient}`}>
                  {renderProjectIcon(activeProject.icon)}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-white font-display">{activeProject.title}</h3>
                  <p className="text-[10px] font-mono text-gray-500">DEVELOPER PLAYGROUND SANDBOX v2.0</p>
                </div>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Split Screen Panel */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
              
              {/* Left Column: Project Documentation */}
              <div className="md:col-span-5 p-6 border-b md:border-b-0 md:border-r border-white/5 space-y-6 text-left">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold tracking-wider">PROJECT DEEP-DIVE</span>
                  <h4 className="text-lg font-extrabold text-white font-display">{activeProject.title}</h4>
                  <p className="text-[11px] font-mono text-gray-400 leading-normal italic">{activeProject.tagline}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold tracking-wider">Functional Summary</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{activeProject.fullDetails}</p>
                </div>

                {/* Highlight Features */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold tracking-wider">Features Checklist</span>
                  <ul className="space-y-2">
                    {activeProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Stack Tags */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold tracking-wider">Stack Architecture</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#050505] border border-white/5 text-gray-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project source links */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 rounded-2xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Github size={13} />
                    <span>Browse Repository</span>
                  </a>

                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white`}
                  >
                    <span>Live App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>

              {/* Right Column: Sandbox Simulator Panel */}
              <div className="md:col-span-7 p-6 bg-[#050505]/40 overflow-y-auto flex flex-col justify-center min-h-[300px]">
                <ProjectSimulator 
                  simulatorKey={activeProject.simulatorKey} 
                  themeConfig={themeConfig} 
                  setThemeConfig={setThemeConfig} 
                />
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/5 bg-[#050505] text-right text-[10px] font-mono text-gray-500">
              Interactive workspace runs completely client-side in standard sandbox. Press ESC or click Close to exit.
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
