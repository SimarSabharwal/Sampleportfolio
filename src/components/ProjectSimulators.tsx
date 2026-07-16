import React, { useState, useEffect, useRef } from "react";
import { 
  PhoneCall, PhoneOff, Play, Pause, Plus, Minus, RefreshCw, 
  Sliders, Volume2, Trash2, CheckCircle2, Sparkles, Layers, 
  Settings, Database, Slack, Mail, Droplet, Flame, Music, 
  FastForward, Rewind, Grid, Type, Check, AlertCircle, ArrowRight
} from "lucide-react";

// Types for customizable portfolio options
export interface ThemeConfig {
  hue: "purple" | "cyan" | "emerald" | "orange" | "rose" | "zinc";
  font: "sans" | "display" | "mono";
  glassOpacity: number; // 0 to 100
  gridEnabled: boolean;
}

interface SimulatorProps {
  themeConfig?: ThemeConfig;
  setThemeConfig?: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

export default function ProjectSimulator({ 
  simulatorKey, 
  themeConfig, 
  setThemeConfig 
}: { 
  simulatorKey: string; 
  themeConfig: ThemeConfig;
  setThemeConfig: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}) {
  switch (simulatorKey) {
    case "ai-call-bot":
      return <AICallBotSimulator />;
    case "omni-platform":
      return <OmniPlatformSimulator />;
    case "fitness-creme":
      return <FitnessCremeSimulator />;
    case "jc-music":
      return <JCMusicSimulator />;
    case "portfolio":
      return <PortfolioCustomizer themeConfig={themeConfig} setThemeConfig={setThemeConfig} />;
    case "ai-dashboard":
      return <AIDashboardSimulator />;
    default:
      return (
        <div className="flex items-center justify-center h-64 text-zinc-400 dark:text-zinc-500 font-mono text-xs">
          Simulator not found for key: {simulatorKey}
        </div>
      );
  }
}

/* ==========================================
   1. AI CALL BOT PLATFORM SIMULATOR
   ========================================== */
function AICallBotSimulator() {
  const [callState, setCallState] = useState<"idle" | "connecting" | "active" | "ended">("idle");
  const [personality, setPersonality] = useState<"support" | "sales" | "tutor">("support");
  const [logs, setLogs] = useState<{ sender: "ai" | "user"; text: string; time: string }[]>([]);
  const [mute, setMute] = useState(false);
  const [soundBars, setSoundBars] = useState<number[]>(Array(15).fill(10));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const script = {
    support: [
      { sender: "ai", text: "Hello! Welcome to Simar's tech support bot. I'm here to help you deploy systems." },
      { sender: "user", text: "Hi, I'm having trouble connecting my PostgreSQL DB to Express." },
      { sender: "ai", text: "No worries! Usually this is caused by an incorrect connection string, SSL configurations, or missing environment secrets." },
      { sender: "user", text: "Oh, I see. I forgot to define the DATABASE_URL secret." },
      { sender: "ai", text: "Spot on! Once added, your pool should spin up flawlessly. Anything else I can assist with?" }
    ],
    sales: [
      { sender: "ai", text: "Hey! Simar here (well, his AI representative). Interested in building custom web experiences?" },
      { sender: "user", text: "Yes, I need a high-performance landing page with interactive visualizers." },
      { sender: "ai", text: "Perfect. We specialize in building responsive, client-side modules that capture user attention." },
      { sender: "user", text: "How fast can you deliver?" },
      { sender: "ai", text: "For responsive, modular structures, we can deliver a fully functional, pixel-perfect build within a week." }
    ],
    tutor: [
      { sender: "ai", text: "Welcome to the JS Code Coach. Ready to dive into async-await loops?" },
      { sender: "user", text: "What is the difference between Promise.all and Promise.allSettled?" },
      { sender: "ai", text: "Promise.all rejects instantly if any promise fails. Promise.allSettled waits for all to complete regardless of errors." },
      { sender: "user", text: "Makes sense! So allSettled is safer when some operations can fail." },
      { sender: "ai", text: "Precisely! It gives you a complete report of each operation's success or failure status." }
    ]
  };

  const handleStartCall = () => {
    setCallState("connecting");
    setLogs([]);
    setTimeout(() => {
      setCallState("active");
      // Load initial message
      const activeScript = script[personality];
      setLogs([{ ...activeScript[0], time: getFormattedTime() }]);
      triggerScriptProgression(1, activeScript);
    }, 1500);
  };

  const triggerScriptProgression = (index: number, activeScript: typeof script.support) => {
    if (index >= activeScript.length) return;
    
    // Simulate user response in 2.5s
    setTimeout(() => {
      if (callState === "ended") return;
      setLogs(prev => [...prev, { ...activeScript[index], time: getFormattedTime() }]);
      
      // Simulate AI response in 4.5s
      setTimeout(() => {
        if (callState === "ended") return;
        setLogs(prev => [...prev, { ...activeScript[index + 1], time: getFormattedTime() }]);
        triggerScriptProgression(index + 2, activeScript);
      }, 2000);
    }, 2000);
  };

  const handleEndCall = () => {
    setCallState("ended");
    setLogs(prev => [...prev, { sender: "ai", text: "Call disconnected by user.", time: getFormattedTime() }]);
    setTimeout(() => {
      setCallState("idle");
    }, 2000);
  };

  const getFormattedTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Animate sound wave bars when active
  useEffect(() => {
    if (callState === "active" && !mute) {
      intervalRef.current = setInterval(() => {
        setSoundBars(Array(15).fill(0).map(() => Math.floor(Math.random() * 45) + 5));
      }, 100);
    } else {
      setSoundBars(Array(15).fill(10));
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callState, mute]);

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">AI CALL PLATFORM SIMULATOR</span>
        <div className="w-14"></div>
      </div>

      {/* Main Content Splitter */}
      <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
        {/* Call Panel Controls */}
        <div className="w-full md:w-2/5 p-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/40">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-300 font-display">Configure Calling Agent</h4>
            <div>
              <label className="text-[11px] font-mono text-zinc-400 block mb-1.5 uppercase">Choose Personality</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: "support", label: "🛠️ Tech Support Bot" },
                  { id: "sales", label: "💼 Sales Representative" },
                  { id: "tutor", label: "🎓 JavaScript Code Coach" }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => personality !== p.id && callState === "idle" && setPersonality(p.id as any)}
                    disabled={callState !== "idle"}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                      personality === p.id 
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" 
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-50"
                    }`}
                  >
                    <span>{p.label}</span>
                    {personality === p.id && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">CALL LATENCY PROJECTION</span>
              <div className="bg-zinc-800 p-2.5 rounded-lg border border-zinc-700/50 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500">WebRTC Ping:</span>
                <span className="text-xs font-mono font-bold text-green-400">420ms (Optimal)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-2">
            {callState === "idle" && (
              <button
                onClick={handleStartCall}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2.5 rounded-lg text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-900/10"
              >
                <PhoneCall size={14} />
                <span>Establish Voice Session</span>
              </button>
            )}

            {callState === "connecting" && (
              <button disabled className="w-full bg-yellow-600/30 text-yellow-300 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 font-medium">
                <RefreshCw size={14} className="animate-spin" />
                <span>Connecting Audio Channel...</span>
              </button>
            )}

            {callState === "active" && (
              <div className="flex gap-2">
                <button
                  onClick={() => setMute(!mute)}
                  className={`flex-1 py-2 rounded-lg text-xs transition-all font-medium ${
                    mute ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {mute ? "Unmute Mic" : "Mute Mic"}
                </button>
                <button
                  onClick={handleEndCall}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <PhoneOff size={14} />
                  <span>Hang Up</span>
                </button>
              </div>
            )}

            {callState === "ended" && (
              <button disabled className="w-full bg-zinc-800 text-zinc-500 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2">
                <PhoneOff size={14} />
                <span>Session Terminated</span>
              </button>
            )}
          </div>
        </div>

        {/* Call Feed Logs */}
        <div className="flex-1 p-4 flex flex-col min-h-[220px] md:h-[350px]">
          <span className="text-[11px] font-mono text-zinc-400 block mb-2 uppercase">Audio Feed Monitor</span>
          
          <div className="flex-1 bg-zinc-950 rounded-xl border border-zinc-800 p-3 overflow-y-auto space-y-3 font-mono text-[11px] max-h-[280px]">
            {logs.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 text-center py-6">
                <PhoneCall size={24} className="mb-2 opacity-30 text-zinc-400" />
                <p>Voice channel offline.</p>
                <p className="text-[10px] opacity-60">Click "Establish Voice Session" to call.</p>
              </div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className={`flex flex-col ${log.sender === "user" ? "items-end" : "items-start"}`}>
                  <div className="flex items-center gap-1.5 mb-1 opacity-50 text-[9px]">
                    <span>{log.sender === "user" ? "Simar Sabharwal" : "AI Agent"}</span>
                    <span>•</span>
                    <span>{log.time}</span>
                  </div>
                  <div className={`px-2.5 py-1.5 rounded-lg max-w-[85%] leading-relaxed ${
                    log.sender === "user" 
                      ? "bg-zinc-800 text-white rounded-tr-none" 
                      : "bg-indigo-950/40 text-indigo-200 border border-indigo-900/50 rounded-tl-none"
                  }`}>
                    {log.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sound wave visualizer at the bottom */}
          {callState === "active" && (
            <div className="mt-4 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 flex flex-col items-center justify-center gap-2">
              <div className="flex items-end justify-center gap-1 h-12 w-full max-w-[200px]">
                {soundBars.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 bg-gradient-to-t from-indigo-500 to-pink-500 rounded-full transition-all duration-75"
                  ></div>
                ))}
              </div>
              <span className="text-[9px] font-mono tracking-widest text-indigo-300 animate-pulse">STREAMING LIVE AUDIO</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   2. OMNI WORKFLOW ENGINE SIMULATOR
   ========================================== */
function OmniPlatformSimulator() {
  const [trigger, setTrigger] = useState<string>("stripe");
  const [action, setAction] = useState<string>("slack");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSteps, setSimSteps] = useState<{ id: number; msg: string; type: "info" | "success" | "pending" }[]>([]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimSteps([]);
    const steps = [
      { id: 1, msg: `Trigger registered: ${trigger === "stripe" ? "Stripe Payment Recieved" : trigger === "form" ? "Contact Form Submission" : "Inbound Email Received"}`, type: "info" },
      { id: 2, msg: `Decrypting trigger credentials and verifying signatures...`, type: "pending" },
      { id: 3, msg: `Parsing context: { payload: { customer: "Simar Sabharwal", status: "complete" } }`, type: "info" },
      { id: 4, msg: `Executing workflow schema: Route (Status === 'complete') -> SUCCESS`, type: "success" },
      { id: 5, msg: `Dispatching action: ${action === "slack" ? "Sending Slack Hook to channel #alerts" : action === "email" ? "Compiling template and mailing client via Resend" : "Writing query row to Supabase Database"}`, type: "pending" },
      { id: 6, msg: `Workflow execution succeeded in 8.4ms. Status Code 200 OK.`, type: "success" }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        const nextStep = steps[current];
        setSimSteps(prev => [...prev, { id: nextStep.id, msg: nextStep.msg, type: nextStep.type as any }]);
        current++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">OMNI WORKFLOW SIMULATOR</span>
        <div className="w-14"></div>
      </div>

      <div className="p-4 flex flex-col md:flex-row gap-4 flex-1 min-h-0 overflow-hidden">
        {/* Canvas Config (Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-zinc-300 font-mono tracking-wider uppercase">1. Edit Pipeline Nodes</h4>
            
            {/* Trigger selection */}
            <div>
              <label className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase">Trigger Event</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "stripe", label: "💳 Stripe Pay", icon: <Database size={12} className="text-purple-400" /> },
                  { id: "form", label: "📝 Web Form", icon: <Layers size={12} className="text-cyan-400" /> },
                  { id: "email", label: "📧 Gmail Recv", icon: <Mail size={12} className="text-red-400" /> }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => !isSimulating && setTrigger(t.id)}
                    className={`p-2.5 rounded-xl border text-[11px] font-medium flex flex-col items-center justify-center gap-1 transition-all ${
                      trigger === t.id 
                        ? "bg-indigo-950/40 border-indigo-500/80 text-white shadow-lg shadow-indigo-950/50" 
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                    }`}
                    disabled={isSimulating}
                  >
                    {t.icon}
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Arrow */}
            <div className="flex justify-center my-1">
              <div className="w-0.5 h-6 bg-dashed bg-indigo-500/30"></div>
            </div>

            {/* Action Selection */}
            <div>
              <label className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase">Target Action</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "slack", label: "💬 Slack Alert", icon: <Slack size={12} className="text-green-400" /> },
                  { id: "email", label: "📨 Resend Mail", icon: <Mail size={12} className="text-blue-400" /> },
                  { id: "db", label: "💾 Supabase Row", icon: <Database size={12} className="text-emerald-400" /> }
                ].map(a => (
                  <button
                    key={a.id}
                    onClick={() => !isSimulating && setAction(a.id)}
                    className={`p-2.5 rounded-xl border text-[11px] font-medium flex flex-col items-center justify-center gap-1 transition-all ${
                      action === a.id 
                        ? "bg-pink-950/40 border-pink-500/80 text-white shadow-lg shadow-pink-950/50" 
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                    }`}
                    disabled={isSimulating}
                  >
                    {a.icon}
                    <span>{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Sparkles size={14} className={isSimulating ? "animate-pulse" : ""} />
            <span>{isSimulating ? "Processing Pipeline..." : "Execute Flow Simulation"}</span>
          </button>
        </div>

        {/* Live Logs Panel (Right) */}
        <div className="flex-1 bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col h-[280px] md:h-[320px] justify-between">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 block mb-2 uppercase">Execution Engine Logs</span>
            <div className="space-y-2 max-h-[220px] overflow-y-auto font-mono text-[10px] leading-relaxed">
              {simSteps.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-44 text-zinc-600">
                  <Play size={20} className="mb-1 opacity-40" />
                  <p>Simulation idle.</p>
                  <p className="text-[9px] opacity-60">Click execute to trace package routing.</p>
                </div>
              ) : (
                simSteps.map(step => (
                  <div key={step.id} className="flex items-start gap-2 border-l border-zinc-800 pl-3">
                    {step.type === "success" ? (
                      <span className="text-green-400">✔</span>
                    ) : step.type === "pending" ? (
                      <span className="text-amber-400 animate-pulse">●</span>
                    ) : (
                      <span className="text-indigo-400">ℹ</span>
                    )}
                    <span className={step.type === "success" ? "text-green-300 font-semibold" : step.type === "pending" ? "text-amber-200" : "text-zinc-400"}>
                      {step.msg}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Progress bar tracking simulated data packet flow */}
          {isSimulating && (
            <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-full animate-[progress_6s_linear_infinite]" style={{ width: "100%" }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   3. FITNESS CREME TRACKER SIMULATOR
   ========================================== */
function FitnessCremeSimulator() {
  const [hydration, setHydration] = useState(45); // percentage
  const [calories, setCalories] = useState(1240); // kcal
  const [streak, setStreak] = useState(12); // days
  const [showStatus, setShowStatus] = useState<string | null>(null);

  const adjustHydration = (amount: number) => {
    setHydration(prev => Math.max(0, Math.min(100, prev + amount)));
    flashStatus(amount > 0 ? `+${amount * 2.5}ml Hydration Registered!` : `${amount * 2.5}ml Removed`);
  };

  const addCalories = (amount: number, foodName: string) => {
    setCalories(prev => prev + amount);
    flashStatus(`Logged: ${foodName} (+${amount} kcal)`);
  };

  const burnCalories = (amount: number, workoutName: string) => {
    setCalories(prev => Math.max(0, prev - amount));
    setStreak(prev => prev + 1);
    flashStatus(`Burned: ${workoutName} (-${amount} kcal)! Streak +1`);
  };

  const flashStatus = (msg: string) => {
    setShowStatus(msg);
    setTimeout(() => {
      setShowStatus(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">FITNESSCREME PORTABLE HUB</span>
        <div className="w-14"></div>
      </div>

      {/* Main Grid split */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 overflow-y-auto max-h-[360px] md:max-h-none">
        {/* Hydration Circular Progress (Left) */}
        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4 flex flex-col items-center justify-between gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-xs font-semibold text-zinc-300 font-mono">HYDRATION RING</span>
            <span className="text-[10px] font-mono text-zinc-500">{Math.round(hydration * 25)} / 2500 ml</span>
          </div>

          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Circle track */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="46"
                className="stroke-zinc-800 fill-transparent"
                strokeWidth="8"
              />
              <circle
                cx="56"
                cy="56"
                r="46"
                className="stroke-blue-500 fill-transparent transition-all duration-300"
                strokeWidth="8"
                strokeDasharray="289"
                strokeDashoffset={289 - (289 * hydration) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="flex flex-col items-center">
              <Droplet className="text-blue-400 w-5 h-5 animate-pulse mb-0.5" />
              <span className="text-lg font-bold font-display">{hydration}%</span>
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <button
              onClick={() => adjustHydration(-10)}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center justify-center"
            >
              <Minus size={12} /> 250ml
            </button>
            <button
              onClick={() => adjustHydration(10)}
              className="flex-1 bg-blue-600 hover:bg-blue-500 py-1.5 rounded-lg text-xs font-mono font-medium text-white flex items-center justify-center"
            >
              <Plus size={12} /> 250ml
            </button>
          </div>
        </div>

        {/* Nutritional Calorie logs and stats (Right) */}
        <div className="flex flex-col gap-3 justify-between">
          <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-zinc-300 font-mono">ENERGY METRICS</span>
              <div className="flex items-center gap-1.5 bg-orange-950/40 px-2 py-0.5 rounded-full border border-orange-900/40 text-[10px] text-orange-400 font-mono">
                <Flame size={10} />
                <span>STREAK: {streak} DAYS</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Logged Net Calories:</span>
                <span className="font-bold text-orange-400">{calories} kcal</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div 
                  style={{ width: `${Math.min(100, (calories / 2000) * 100)}%` }} 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 h-full transition-all duration-300"
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>0</span>
                <span>Target: 2000 kcal</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-3 flex flex-col gap-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Quick Actions</span>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => addCalories(380, "Avocado Toast")}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg text-[11px] text-left transition-all"
              >
                🥑 +380 kcal <span className="block text-[9px] opacity-50 font-mono">Toast</span>
              </button>
              <button
                onClick={() => addCalories(140, "Protein Shake")}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg text-[11px] text-left transition-all"
              >
                🥛 +140 kcal <span className="block text-[9px] opacity-50 font-mono">Shake</span>
              </button>
              <button
                onClick={() => burnCalories(450, "5K Outdoor Run")}
                className="bg-orange-950/40 hover:bg-orange-950/60 border border-orange-900/40 p-2 rounded-lg text-[11px] text-left text-orange-300 transition-all"
              >
                🏃‍♂️ -450 kcal <span className="block text-[9px] opacity-70 font-mono">Run</span>
              </button>
              <button
                onClick={() => burnCalories(250, "Full-Body Strength")}
                className="bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-900/40 p-2 rounded-lg text-[11px] text-left text-emerald-300 transition-all"
              >
                🏋️‍♂️ -250 kcal <span className="block text-[9px] opacity-70 font-mono">Lifting</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating dynamic status notifier */}
      <div className="h-10 bg-zinc-900 px-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono">
        {showStatus ? (
          <span className="text-indigo-400 animate-pulse flex items-center gap-1">
            <Sparkles size={11} /> {showStatus}
          </span>
        ) : (
          <span className="text-zinc-500">Log workout loads and hydration ratios...</span>
        )}
        <span className="text-zinc-500 text-[10px]">v1.4 Client DB</span>
      </div>
    </div>
  );
}

/* ==========================================
   4. JC MUSIC CONTROLLER SIMULATOR
   ========================================== */
function JCMusicSimulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(60);
  const [tempo, setTempo] = useState(50);
  const [analyzerBars, setAnalyzerBars] = useState<number[]>(Array(24).fill(4));
  const requestRef = useRef<number | null>(null);

  const playlist = [
    { title: "Deep Focus Ambient Core", artist: "Mindsynth", duration: "3:40" },
    { title: "Neo-Classical Sleep Drone", artist: "Modular Lofi", duration: "4:15" },
    { title: "Synaptic Coding Pulses", artist: "Subharmonic", duration: "5:02" }
  ];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack(prev => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrack(prev => (prev - 1 + playlist.length) % playlist.length);
  };

  // Run wave simulation loop when playing
  useEffect(() => {
    const updateWaves = () => {
      if (isPlaying) {
        setAnalyzerBars(Array(24).fill(0).map(() => {
          const multiplier = (volume / 100) * 40;
          return Math.floor(Math.random() * multiplier) + 3;
        }));
        requestRef.current = requestAnimationFrame(updateWaves);
      } else {
        setAnalyzerBars(Array(24).fill(4));
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      }
    };

    if (isPlaying) {
      requestRef.current = requestAnimationFrame(updateWaves);
    } else {
      setAnalyzerBars(Array(24).fill(4));
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, volume]);

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">JC MUSIC CONTROLLER</span>
        <div className="w-14"></div>
      </div>

      <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between flex-1 min-h-0">
        {/* Dynamic CD/Vinyl Disc Visual (Left) */}
        <div className="flex flex-col items-center justify-center gap-3 w-full md:w-1/2">
          <div className="relative flex items-center justify-center">
            {/* Spinning Disc Frame */}
            <div 
              style={{ animationDuration: isPlaying ? `${6 - (tempo / 20)}s` : '0s' }}
              className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center shadow-lg shadow-black/60 relative overflow-hidden animate-[spin_8s_linear_infinite]"
            >
              {/* Grooves on disc */}
              <div className="absolute inset-2 border border-zinc-700/30 rounded-full"></div>
              <div className="absolute inset-4 border border-zinc-700/30 rounded-full"></div>
              <div className="absolute inset-6 border border-zinc-700/30 rounded-full"></div>
              
              {/* Vinyl center gradient sticker */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-zinc-950"></div>
              </div>
            </div>

            {/* Arm needles styling */}
            <div className={`absolute top-0 right-[-8px] origin-top-left w-10 h-1.5 bg-zinc-600 rounded-full transform transition-all duration-500 ${
              isPlaying ? "rotate-[15deg]" : "rotate-0"
            }`}></div>
          </div>

          <div className="text-center mt-1">
            <h4 className="text-xs font-bold text-zinc-200 line-clamp-1">{playlist[currentTrack].title}</h4>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{playlist[currentTrack].artist}</p>
          </div>
        </div>

        {/* Sliders and Play Panels (Right) */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Wave Synthesizer Analyzer */}
          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 flex flex-col gap-2">
            <span className="text-[9px] font-mono text-zinc-500 tracking-wider">SPECTRUM ANALYSIS (32-BIT)</span>
            <div className="flex items-end justify-between h-14 w-full px-1">
              {analyzerBars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-[3px] bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full transition-all duration-75"
                ></div>
              ))}
            </div>
          </div>

          {/* Controls Sliders */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <Volume2 size={13} className="text-zinc-500" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="flex-1 accent-emerald-500 bg-zinc-800 h-1 rounded-full cursor-pointer"
              />
              <span className="text-[10px] font-mono text-zinc-400 w-6 text-right">{volume}%</span>
            </div>

            <div className="flex items-center gap-3">
              <Sliders size={13} className="text-zinc-500" />
              <input
                type="range"
                min="10"
                max="100"
                value={tempo}
                onChange={e => setTempo(Number(e.target.value))}
                className="flex-1 accent-emerald-500 bg-zinc-800 h-1 rounded-full cursor-pointer"
              />
              <span className="text-[10px] font-mono text-zinc-400 w-6 text-right">{tempo}%</span>
            </div>
          </div>

          {/* Button array */}
          <div className="flex justify-center items-center gap-4 pt-1">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800/80 cursor-pointer"
            >
              <Rewind size={14} />
            </button>
            <button 
              onClick={handleTogglePlay}
              className={`p-3.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                isPlaying 
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20" 
                  : "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500"
              }`}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800/80 cursor-pointer"
            >
              <FastForward size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   5. PORTFOLIO WEBSITE CUSTOMIZER
   ========================================== */
function PortfolioCustomizer({ themeConfig, setThemeConfig }: SimulatorProps) {
  const [copied, setCopied] = useState(false);

  const hues: { id: typeof themeConfig.hue; name: string; bg: string; color: string }[] = [
    { id: "purple", name: "Purple Twilight", bg: "bg-purple-600", color: "text-purple-400" },
    { id: "cyan", name: "Cyan Neo", bg: "bg-cyan-500", color: "text-cyan-400" },
    { id: "emerald", name: "Emerald Mint", bg: "bg-emerald-500", color: "text-emerald-400" },
    { id: "orange", name: "Sunset Gold", bg: "bg-orange-500", color: "text-orange-400" },
    { id: "rose", name: "Pixel Coral", bg: "bg-rose-500", color: "text-rose-400" },
    { id: "zinc", name: "Apple Minimal", bg: "bg-zinc-400", color: "text-zinc-400" }
  ];

  const handleCopyPreset = () => {
    navigator.clipboard.writeText(JSON.stringify(themeConfig, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">PORTFOLIO THEME CONFIG</span>
        <div className="w-14"></div>
      </div>

      <div className="p-4 flex flex-col md:flex-row gap-4 flex-1 min-h-0 overflow-y-auto">
        {/* Swaps and controls (Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-mono text-zinc-500 block mb-1.5 uppercase flex items-center gap-1">
                <Sparkles size={11} /> Primary Color Hue
              </label>
              <div className="grid grid-cols-3 gap-2">
                {hues.map(h => (
                  <button
                    key={h.id}
                    onClick={() => setThemeConfig && setThemeConfig(prev => ({ ...prev, hue: h.id }))}
                    className={`p-2 rounded-xl border text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      themeConfig?.hue === h.id 
                        ? "bg-zinc-800 border-zinc-600 text-white" 
                        : "bg-zinc-900 border-zinc-900 text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${h.bg}`}></span>
                    <span className="text-[9px] font-mono">{h.id}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Fonts */}
              <div>
                <label className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase flex items-center gap-1">
                  <Type size={11} /> Typography
                </label>
                <div className="flex flex-col gap-1">
                  {[
                    { id: "sans", label: "Inter Sans" },
                    { id: "display", label: "Outfit Display" },
                    { id: "mono", label: "JetBrains Mono" }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setThemeConfig && setThemeConfig(prev => ({ ...prev, font: f.id as any }))}
                      className={`px-2.5 py-1.5 text-left rounded-lg text-[10px] transition-all cursor-pointer ${
                        themeConfig?.font === f.id 
                          ? "bg-zinc-800 text-white font-semibold" 
                          : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Layout Toggle */}
              <div>
                <label className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase flex items-center gap-1">
                  <Grid size={11} /> Backgrounds
                </label>
                <button
                  onClick={() => setThemeConfig && setThemeConfig(prev => ({ ...prev, gridEnabled: !prev.gridEnabled }))}
                  className={`w-full p-2.5 rounded-xl border text-left text-[11px] font-medium transition-all flex justify-between items-center cursor-pointer ${
                    themeConfig?.gridEnabled 
                      ? "bg-indigo-950/30 border-indigo-900/50 text-indigo-300" 
                      : "bg-zinc-900 border-zinc-900 text-zinc-500 hover:bg-zinc-800"
                  }`}
                >
                  <span className="text-[10px]">Matrix Grid</span>
                  <span className={`text-[10px] font-mono font-bold ${themeConfig?.gridEnabled ? "text-indigo-400" : "text-zinc-600"}`}>
                    {themeConfig?.gridEnabled ? "ACTIVE" : "OFF"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyPreset}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            {copied ? <Check size={14} className="text-green-300 animate-pulse" /> : <Layers size={14} />}
            <span>{copied ? "Copied Settings Config!" : "Export JSON Config"}</span>
          </button>
        </div>

        {/* Live Config JSON File (Right) */}
        <div className="flex-1 bg-zinc-950 rounded-xl border border-zinc-800 p-4 h-[240px] md:h-auto flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[9px] font-mono text-zinc-500 uppercase">applet_theme_loader.json</span>
              <span className="text-[9px] font-mono text-green-400">ACTIVE ENV</span>
            </div>
            <pre className="font-mono text-[10px] text-zinc-400 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-900 leading-relaxed overflow-x-auto select-all">
              {`{
  "theme": "${themeConfig?.hue}",
  "typography": "${themeConfig?.font}",
  "glass_opacity": ${themeConfig?.glassOpacity}%,
  "grid_pattern": ${themeConfig?.gridEnabled ? "true" : "false"},
  "owner": "Simar Sabharwal",
  "rendered_time": "2026-07-16"
}`}
            </pre>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-mono">
            <AlertCircle size={10} className="text-indigo-400" />
            <span>Theme parameters update the entire screen immediately.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   6. AI PRODUCTIVITY DASHBOARD SIMULATOR
   ========================================== */
interface Task {
  id: string;
  title: string;
  diff: "Easy" | "Medium" | "Hard";
  estHours: string | null;
  priority: number;
}

function AIDashboardSimulator() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Refactor PostgreSQL database pool queries", diff: "Hard", estHours: null, priority: 3 },
    { id: "2", title: "Design sleek landing page graphics in Figma", diff: "Medium", estHours: null, priority: 2 },
    { id: "3", title: "Integrate Google GenAI streaming hooks", diff: "Hard", estHours: null, priority: 1 },
    { id: "4", title: "Resolve responsive padding bugs in mobile views", diff: "Easy", estHours: null, priority: 4 }
  ]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optStatus, setOptStatus] = useState<string>("");

  const handleAIOptimize = () => {
    setIsOptimizing(true);
    setOptStatus("Reading task titles metadata...");
    
    setTimeout(() => {
      setOptStatus("Computing workload weights & priorities...");
      
      setTimeout(() => {
        setOptStatus("Synthesizing optimal estimated durations...");
        
        setTimeout(() => {
          // Perform heuristic updates
          const optimized = [...tasks].map(t => {
            let hours = "1.0 hr";
            if (t.diff === "Hard") hours = "4.5 hrs";
            else if (t.diff === "Medium") hours = "2.5 hrs";
            else hours = "1.2 hrs";
            
            return {
              ...t,
              estHours: hours
            };
          });
          
          // Sort by priority weight
          optimized.sort((a, b) => a.priority - b.priority);
          
          setTasks(optimized);
          setIsOptimizing(false);
          setOptStatus("");
        }, 1200);
      }, 1200);
    }, 1200);
  };

  const handleResetTasks = () => {
    setTasks([
      { id: "1", title: "Refactor PostgreSQL database pool queries", diff: "Hard", estHours: null, priority: 3 },
      { id: "2", title: "Design sleek landing page graphics in Figma", diff: "Medium", estHours: null, priority: 2 },
      { id: "3", title: "Integrate Google GenAI streaming hooks", diff: "Hard", estHours: null, priority: 1 },
      { id: "4", title: "Resolve responsive padding bugs in mobile views", diff: "Easy", estHours: null, priority: 4 }
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-800 shadow-xl font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-500">AI PRODUCTIVITY BOARD</span>
        <div className="w-14"></div>
      </div>

      <div className="p-4 flex flex-col md:flex-row gap-4 flex-1 min-h-0 overflow-y-auto">
        {/* Task Board (Left) */}
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-zinc-300 font-mono flex items-center gap-1">
              <Layers size={12} className="text-rose-400" /> SPRINTS WORKLOAD
            </span>
            {tasks.some(t => t.estHours !== null) && (
              <button 
                onClick={handleResetTasks}
                className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-all cursor-pointer flex items-center gap-1"
              >
                <RefreshCw size={10} /> Reset
              </button>
            )}
          </div>

          <div className="space-y-2">
            {tasks.map(t => (
              <div 
                key={t.id} 
                className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between gap-3 transition-all hover:border-zinc-700/60"
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5">
                    {t.estHours ? (
                      <CheckCircle2 size={13} className="text-green-400 fill-green-950/20" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-zinc-700 block mt-0.5"></span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs ${t.estHours ? "text-zinc-400 line-through decoration-zinc-700/60" : "text-zinc-200"}`}>{t.title}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full border ${
                        t.diff === "Hard" 
                          ? "bg-red-950/40 text-red-400 border-red-900/40" 
                          : t.diff === "Medium"
                          ? "bg-amber-950/40 text-amber-400 border-amber-900/40"
                          : "bg-blue-950/40 text-blue-400 border-blue-900/40"
                      }`}>
                        {t.diff}
                      </span>
                      {t.estHours && (
                        <span className="text-[8px] font-mono text-green-400 bg-green-950/40 border border-green-900/40 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                          Est: {t.estHours}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 font-bold whitespace-nowrap bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                  P-{t.priority}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Action Optimizer Hub (Right) */}
        <div className="w-full md:w-2/5 flex flex-col justify-between bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 h-[240px] md:h-auto gap-4">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-zinc-500 block uppercase">AI Planning Co-Pilot</span>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
              Optimize sprint backlogs. The automated agent reads task parameters, estimates hour complexity, and orders items in a highly optimal high-impact sequence.
            </p>

            {isOptimizing && (
              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <RefreshCw size={11} className="animate-spin text-rose-400" />
                  <span className="text-[10px] font-mono text-rose-300">Co-Pilot Processing:</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 italic">
                  {optStatus}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleAIOptimize}
            disabled={isOptimizing}
            className="w-full bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-rose-900/10"
          >
            <Sparkles size={14} className={isOptimizing ? "animate-pulse" : ""} />
            <span>{isOptimizing ? "Optimizing Backlog..." : "Run AI Sprints Optimizer"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
