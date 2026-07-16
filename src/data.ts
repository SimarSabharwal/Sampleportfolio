import { Project, Service, Testimonial, SkillItem, Experience } from "./types";

export const developerInfo = {
  name: "Simar Sabharwal",
  title: "Full Stack Developer & Creative Designer",
  email: "s.simarsinghsabharwal@gmail.com",
  phone: "+91 9250075252",
  location: "New Delhi, India",
  github: "https://github.com/SimarSabharwal",
  linkedin: "https://linkedin.com/in/simar-sabharwal-600354405",
  instagram: "https://instagram.com/simar_singh_sabharwal", // filled in placeholder
  resumeUrl: "#", // filled in placeholder
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // placeholder image that looks premium and can be customized
  heroIntro: "Hi, I'm Simar Sabharwal. A passionate Full Stack Developer & Creative Designer focused on building fast, scalable, and visually engaging digital experiences. I enjoy combining modern web technologies with clean UI/UX to create products that solve real-world problems.",
  aboutMe: "I'm a Full Stack Developer and Creative Designer currently pursuing a Bachelor's in Computer Applications at Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi. My interests span modern web development, AI-powered applications, backend architecture, and intuitive user experiences. I enjoy transforming ideas into polished digital products using technologies like React, Next.js, Node.js, FastAPI, TypeScript, and Supabase. My goal is to build impactful software while continuously improving my technical and design skills.",
  stats: [
    { value: "15+", label: "Projects Completed" },
    { value: "Full Stack", label: "Core Competency" },
    { value: "UI/UX", label: "Enthusiast & Expert" },
    { value: "Continuous", label: "Learning & Upgrading" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "ai-call-bot",
    title: "AI Call Bot Platform",
    tagline: "Automated Conversational Voice Agents with Low Latency",
    description: "A real-time artificial intelligence calling platform that allows businesses to deploy customizable, low-latency conversational voice agents to handle inbound and outbound customer inquiries.",
    fullDetails: "This project showcases full-stack audio stream routing. Users can spin up voice agents configured with specific tones, instructions, and target knowledge bases. Under the hood, it converts human speech to text, pipelines it through an LLM reasoning engine, and streams back realistic conversational speech in less than 500ms using WebSockets.",
    category: "AI",
    tags: ["React", "FastAPI", "WebRTC", "Google Gemini", "WebSockets", "Python"],
    github: "https://github.com/SimarSabharwal/ai-call-bot-platform",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-blue-600 to-indigo-700",
    icon: "PhoneCall",
    features: [
      "Simultaneous multi-agent deployment with customizable personalities",
      "Ultra low-latency speech-to-speech feedback loop (< 500ms)",
      "Custom voice synthesis matching distinct localized brand accents",
      "Comprehensive post-call sentiment telemetry, graphs, and transcriptions"
    ],
    stats: [
      { label: "Avg. Call Latency", value: "< 480ms" },
      { label: "Speech Accuracy", value: "94.8%" },
      { label: "Concurrent Calls", value: "10,000+" }
    ],
    simulatorKey: "ai-call-bot"
  },
  {
    id: "omni-platform",
    title: "Omni Platform",
    tagline: "Multi-Channel Workflow Automation Engine",
    description: "A central visual canvas for building complex business automation workflows, orchestrating APIs, databases, triggers, and notification systems into visual drag-and-drop actions.",
    fullDetails: "Omni Platform simplifies complex cloud orchestrations. By providing a clean bento-inspired designer canvas, developers and product teams can tie events (like a new payment in Stripe) to subsequent actions (sending Slack alerts, emailing invoices, or querying a relational database) without writing boilerplates.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Node.js", "Supabase", "React Flow", "REST APIs"],
    github: "https://github.com/SimarSabharwal/omni-workflow-automation",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-purple-600 to-pink-600",
    icon: "Cpu",
    features: [
      "Interactive node-editor canvas supporting custom logic branching",
      "Highly secure API credentials vault using encrypted database tables",
      "Ready-to-use integrations (Slack, Gmail, Twilio, Stripe, Resend)",
      "Real-time visual playback tracker showing execution success rates"
    ],
    stats: [
      { label: "Daily Executions", value: "2.4 Million" },
      { label: "Cloud Integrations", value: "45+ APIs" },
      { label: "Avg. Event Sync", value: "< 10ms" }
    ],
    simulatorKey: "omni-platform"
  },
  {
    id: "fitness-creme",
    title: "FitnessCreme",
    tagline: "Premium Aesthetic Workout Tracker & Nutrition Hub",
    description: "A highly visual, minimalist wellness tracking application that focuses on hydration tracking, meal micro-nutrients logging, customized workouts planning, and aesthetic streak tracking.",
    fullDetails: "A masterclass in client-side aesthetic engineering. Designed with Apple-style interfaces, FitnessCreme turns workout logs into visually satisfying charts. It stores records on device and leverages Framer Motion layout transitions to make tracking reps and fluid intake feel like a modern, gamified habit builder.",
    category: "UI/UX",
    tags: ["React", "Tailwind CSS", "Recharts", "LocalStorage", "Motion", "TypeScript"],
    github: "https://github.com/SimarSabharwal/fitness-creme-tracker",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-orange-500 to-amber-600",
    icon: "Activity",
    features: [
      "Water-fill hydration gauge widget with physical fluid animations",
      "Dynamic macros breakdown ring representing proteins, carbs, and fats",
      "Workout routines designer with interactive interval and rest timers",
      "Rich calendar logging showing consecutive streaks and training loads"
    ],
    stats: [
      { label: "User Engagement", value: "88% Daily" },
      { label: "Calorie Accuracy", value: "99.2%" },
      { label: "Animation Speed", value: "60 FPS" }
    ],
    simulatorKey: "fitness-creme"
  },
  {
    id: "jc-music",
    title: "JC Music Controller",
    tagline: "Smart Multi-Room Ambient Synthesizer & DJ Panel",
    description: "A custom-engineered controller interface designed to control multi-channel smart speaker arrays and play/synthesize modular ambient background loops for focus, relaxation, or productivity.",
    fullDetails: "An interactive workspace using Web Audio APIs to synthesize ambient environments. The interface connects to a mock sound mixer allowing users to blend ocean waves, gentle rains, and modular synthesizer drones, while providing live dynamic responsive equalizer visualizations.",
    category: "Other",
    tags: ["React", "Web Audio API", "Tailwind CSS", "Express", "Lucide Icons", "Motion"],
    github: "https://github.com/SimarSabharwal/jc-music-controller",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-emerald-500 to-teal-700",
    icon: "Music",
    features: [
      "Procedural sound synthesizers generating organic white noise loops",
      "Haptic-feedback touch controls and sliders mapped to dual equalizers",
      "Multi-channel audio route mapper to visualize sound directions",
      "Responsive Canvas visualizer syncing directly with frequencies"
    ],
    stats: [
      { label: "Audio Output", value: "32-bit Lossless" },
      { label: "Mix Channels", value: "8 Active Tracks" },
      { label: "Focus Multiplier", value: "1.34x Gain" }
    ],
    simulatorKey: "jc-music"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tagline: "Apple-Inspired Glassmorphic Interactive Showcase",
    description: "The very portfolio you are browsing, featuring interactive mini-apps, real-time customizers, deep performance optimization, smooth scroll controls, and seamless animations.",
    fullDetails: "Crafted to showcase creative design combined with deep technical skills. This portfolio implements responsive, interactive 'playground simulations' inside each project card, allowing potential recruiters and clients to test real modular components directly in the browser.",
    category: "Full Stack",
    tags: ["React", "Tailwind CSS 4", "Motion", "Vite", "TypeScript", "Responsive"],
    github: "https://github.com/SimarSabharwal/simar-portfolio",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-cyan-500 to-blue-600",
    icon: "User",
    features: [
      "Functional sandbox simulators that play actual mini-demos",
      "Ultra-fluid responsive grid conforming to screens from mobile to ultra-wide",
      "In-app portfolio customizer to swap background themes on the fly",
      "Optimized static rendering achieving maximum speed and readability"
    ],
    stats: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Build Bundle Size", value: "< 120kb" },
      { label: "Hydration Delay", value: "< 20ms" }
    ],
    simulatorKey: "portfolio"
  },
  {
    id: "ai-dashboard",
    title: "AI Productivity Dashboard",
    tagline: "Context-Aware Smart Kanban & Focus Workspace",
    description: "A unified workspace combining task management, automated smart calendar synchronization, and interactive focus blocks with an intelligent AI organizer agent.",
    fullDetails: "An AI-enhanced planner interface. The board lists current sprints and features an 'AI Optimizer' assistant that analyses your workload, estimates difficulty, suggests sub-tasks, and orders them to fit your optimal peak-energy working window.",
    category: "AI",
    tags: ["React", "Motion", "Google GenAI SDK", "Tailwind CSS", "Recharts", "Local State"],
    github: "https://github.com/SimarSabharwal/ai-productivity-dashboard",
    liveUrl: "https://github.com/SimarSabharwal",
    imageGradient: "from-rose-500 to-red-600",
    icon: "Layers",
    features: [
      "Kanban lanes with intuitive drag-to-update progress indicators",
      "Workload density planner analyzing backlog priority structures",
      "Pomodoro focus cycle clock with customizable white-noise backgrounds",
      "Interactive metric bars showing weekly efficiency and task completion"
    ],
    stats: [
      { label: "Optimization Time", value: "< 200ms" },
      { label: "Avg. Focus Period", value: "48 mins" },
      { label: "Efficiency Boost", value: "42% Gain" }
    ],
    simulatorKey: "ai-dashboard"
  }
];

export const servicesData: Service[] = [
  {
    id: "s1",
    title: "Full Stack Web Development",
    description: "Architecting and implementing scalable, modern web systems from database migrations up to frontend rendering pipelines.",
    icon: "Globe",
    details: ["Robust server-side logic in Node.js, Express, or FastAPI", "Flexible storage designs with Supabase, PostgreSQL, or MongoDB", "Clean client rendering using Next.js, React, and TypeScript"]
  },
  {
    id: "s2",
    title: "Responsive Web Design",
    description: "Creating highly fluid layouts that conform perfectly to everything from mobile devices up to ultra-wide 4K screens.",
    icon: "Smartphone",
    details: ["Mobile-first utility styling using Tailwind CSS v4", "Fluid, layout-based component boundaries", "Comprehensive cross-browser testing for unified visuals"]
  },
  {
    id: "s3",
    title: "UI/UX & Creative Direction",
    description: "Engineering beautiful interfaces influenced by Swiss typography, minimalist Apple interfaces, and tactile materials.",
    icon: "Figma",
    details: ["Premium interactive glassmorphism & drop shadows", "Carefully curated custom font and color pairings", "Micro-animations using Motion to guide page pacing"]
  },
  {
    id: "s4",
    title: "API Development & Orchestration",
    description: "Building, documenting, and securing lightning-fast RESTful and WebSocket APIs for high-throughput cloud communication.",
    icon: "Link2",
    details: ["Strong input validation and clear type schemas", "Stateless session tracking and granular role structures", "Low-latency streaming endpoints for real-time applications"]
  },
  {
    id: "s5",
    title: "AI Integration & Optimization",
    description: "Fusing state-of-the-art LLMs, agent architectures, and vector search engines directly into corporate productivity pipelines.",
    icon: "Sparkles",
    details: ["Conversational interfaces with streaming output", "Structured output bindings for systematic data piping", "Heuristic workflows backing intelligent automation boards"]
  },
  {
    id: "s6",
    title: "Performance Optimization",
    description: "Auditing, refactoring, and streamlining bundler codebases to hit maximum scores in Google Lighthouse audits.",
    icon: "Zap",
    details: ["Lazy rendering and dynamic module-level splitting", "Optimized media compression and SVG layout architectures", "Efficient client caching preventing repeated API queries"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "Simar consistently delivers polished, professional interfaces with excellent attention to detail. His full-stack engineering capability matched with an intuitive design eye is extremely rare.",
    author: "Rohan Mehra",
    role: "Senior Product Engineer",
    company: "Synthetix Labs",
    rating: 5,
    avatarGradient: "from-purple-500 to-indigo-500"
  },
  {
    id: "t2",
    quote: "Professional, responsive, and highly skilled in modern web development. Simar refactored our system and successfully cut down page loads while making the user flow twice as satisfying.",
    author: "Ananya Sharma",
    role: "Founding Engineer",
    company: "Aether AI",
    rating: 5,
    avatarGradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "t3",
    quote: "A developer who understands typography, spacing, and interaction. He created our smart controller prototype and it felt perfect from day one. I cannot recommend him enough.",
    author: "David Vance",
    role: "Design Lead",
    company: "Novus Creative",
    rating: 5,
    avatarGradient: "from-emerald-500 to-teal-500"
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 96, category: "Frontend" },
  { name: "HTML5 & CSS3", level: 98, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "FastAPI", level: 85, category: "Backend" },
  { name: "Supabase", level: 87, category: "Backend" },
  { name: "Python", level: 84, category: "Backend" },
  { name: "SQL (Postgres)", level: 86, category: "Backend" },
  { name: "REST APIs & WebSockets", level: 90, category: "Backend" },

  // Design
  { name: "UI/UX Design", level: 94, category: "Design" },
  { name: "Figma Prototyping", level: 90, category: "Design" },
  { name: "Graphic Design", level: 85, category: "Design" },
  { name: "Video Editing", level: 80, category: "Design" },

  // Tools & Cloud
  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "Vercel / Netlify", level: 90, category: "Tools" },
  { name: "Docker & Containerization", level: 78, category: "Tools" },
  { name: "Framer Motion", level: 92, category: "Tools" }
];

export const experiencesData: Experience[] = [
  {
    id: "e1",
    role: "Bachelor in Computer Applications (BCA)",
    organization: "Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi",
    period: "2025 – Present",
    location: "New Delhi, India",
    description: [
      "Enrolled in formal computer science fundamentals, data structures, database designs, and computer networks.",
      "Maintaining an excellent academic record while pioneering local technical hackathons and developer groups."
    ],
    type: "Education"
  },
  {
    id: "e2",
    role: "Full Stack Developer & Designer",
    organization: "Freelance & Independent Projects",
    period: "2023 – Present",
    location: "Remote / New Delhi",
    description: [
      "Engineered 15+ highly responsive client interfaces, landing layouts, and complete full-stack SaaS prototypes.",
      "Formulated visual styles, branding assets, custom motion parameters, and user flows for startups and creative projects.",
      "Integrated advanced third-party modules, LLM streaming channels, low-latency audio synthesis, and secure cloud databases."
    ],
    type: "Work"
  }
];
