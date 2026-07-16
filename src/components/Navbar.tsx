import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github, Linkedin, Smartphone, Briefcase, User, Layers, HelpCircle, PhoneCall } from "lucide-react";
import { ThemeConfig } from "./ProjectSimulators";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  themeConfig: ThemeConfig;
  setThemeConfig: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

export default function Navbar({ darkMode, setDarkMode, themeConfig, setThemeConfig }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to style navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <User size={14} /> },
    { name: "About", href: "#about", icon: <Layers size={14} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={14} /> },
    { name: "Services", href: "#services", icon: <Smartphone size={14} /> },
    { name: "Testimonials", href: "#testimonials", icon: <HelpCircle size={14} /> },
    { name: "Contact", href: "#contact", icon: <PhoneCall size={14} /> }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Get active hue accent classes
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

  return (
    <nav 
      id="navbar-root"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5 shadow-lg py-3" 
            : "bg-white/85 backdrop-blur-md border-b border-zinc-200/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 font-display font-bold tracking-tight text-lg cursor-pointer"
          >
            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md ${getAccentBg()}`}>
              S
            </span>
            <span className="text-zinc-900 dark:text-[#F5F5F7] font-semibold">Simar</span>
            <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-transparent ${getAccentText()}`}>
              DEV
            </span>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  darkMode 
                    ? "text-zinc-400 hover:text-white hover:bg-white/5" 
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action buttons (Theme and Contacts) */}
          <div className="hidden md:flex items-center gap-2">
            {/* Dark Mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                darkMode 
                  ? "bg-white/5 border-white/5 text-amber-400 hover:bg-white/10" 
                  : "bg-zinc-100 border-zinc-200 text-indigo-600 hover:bg-zinc-200"
              }`}
              title="Toggle theme mode"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Social handles */}
            <a 
              href="https://github.com/SimarSabharwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                darkMode 
                  ? "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white" 
                  : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              <Github size={15} />
            </a>

            <a 
              href="https://linkedin.com/in/simar-sabharwal-600354405" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                darkMode 
                  ? "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white" 
                  : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              <Linkedin size={15} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={`ml-2 text-xs font-semibold py-2 px-4 rounded-2xl text-white shadow-md cursor-pointer transition-all ${getAccentBg()}`}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-2xl border transition-all ${
                darkMode 
                  ? "bg-white/5 border-white/5 text-amber-400" 
                  : "bg-zinc-100 border-zinc-200 text-indigo-600"
              }`}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-2xl border transition-all ${
                darkMode 
                  ? "bg-white/5 border-white/5 text-zinc-300 hover:text-white" 
                  : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-zinc-900"
              }`}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full p-4 border-t transition-all duration-300 shadow-2xl ${
          darkMode 
            ? "bg-[#050505] border-white/5 text-white" 
            : "bg-white border-zinc-200 text-zinc-900"
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium transition-all ${
                  darkMode 
                    ? "hover:bg-white/5 text-zinc-300 hover:text-white" 
                    : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            
            <div className="flex items-center gap-3 mt-2 pt-4 border-t border-zinc-200 dark:border-white/5 justify-around">
              <a 
                href="https://github.com/SimarSabharwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex-1 text-center flex items-center justify-center gap-2 text-xs font-medium ${
                  darkMode ? "bg-white/5 border-white/5 text-zinc-300" : "bg-zinc-100 border-zinc-200 text-zinc-700"
                }`}
              >
                <Github size={15} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/simar-sabharwal-600354405" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex-1 text-center flex items-center justify-center gap-2 text-xs font-medium ${
                  darkMode ? "bg-white/5 border-white/5 text-zinc-300" : "bg-zinc-100 border-zinc-200 text-zinc-700"
                }`}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={`w-full text-center py-3 rounded-2xl text-xs font-bold text-white shadow-lg mt-2 ${getAccentBg()}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
