import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeConfig } from "./components/ProjectSimulators";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio-dark-mode");
    return saved ? saved === "true" : true; // Default to dark theme for premium aesthetic
  });

  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem("portfolio-theme-config");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      hue: "purple",
      font: "display",
      glassOpacity: 40,
      gridEnabled: true
    };
  });

  // Sync dark mode class to HTML root
  useEffect(() => {
    localStorage.setItem("portfolio-dark-mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Sync theme configurations to localStorage
  useEffect(() => {
    localStorage.setItem("portfolio-theme-config", JSON.stringify(themeConfig));
  }, [themeConfig]);

  // Compute font family class
  const getFontFamilyClass = () => {
    switch (themeConfig.font) {
      case "display": return "font-display";
      case "mono": return "font-mono";
      default: return "font-sans";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getFontFamilyClass()} ${
      darkMode ? "bg-[#050505] text-[#F5F5F7]" : "bg-zinc-50 text-zinc-900"
    }`}>
      {/* Sticky Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        themeConfig={themeConfig} 
        setThemeConfig={setThemeConfig} 
      />

      {/* Hero Welcome & Stats */}
      <Hero themeConfig={themeConfig} darkMode={darkMode} />

      {/* About narrative & Interactive Skills Panel */}
      <About themeConfig={themeConfig} darkMode={darkMode} />

      {/* Bento Projects & Interactive Simulators */}
      <Projects 
        themeConfig={themeConfig} 
        setThemeConfig={setThemeConfig} 
        darkMode={darkMode} 
      />

      {/* Services Grid */}
      <Services themeConfig={themeConfig} darkMode={darkMode} />

      {/* Client Testimonials Carousel */}
      <Testimonials themeConfig={themeConfig} darkMode={darkMode} />

      {/* Contact Interactive SMTP Form */}
      <Contact themeConfig={themeConfig} darkMode={darkMode} />

      {/* Professional Sitemap Footer */}
      <Footer themeConfig={themeConfig} darkMode={darkMode} />
    </div>
  );
}
