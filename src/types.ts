export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  category: "AI" | "Full Stack" | "UI/UX" | "Other";
  tags: string[];
  github: string;
  liveUrl: string;
  imageGradient: string;
  icon: string; // Lucide icon name
  features: string[];
  stats: { label: string; value: string }[];
  simulatorKey: "ai-call-bot" | "omni-platform" | "fitness-creme" | "jc-music" | "portfolio" | "ai-dashboard";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarGradient: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "Frontend" | "Backend" | "Design" | "Tools";
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  type: "Education" | "Work";
}
