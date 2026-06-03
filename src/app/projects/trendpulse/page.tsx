"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Code, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Gauge, 
  CheckCircle,
  Database,
  Sparkles
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { TrendPulseSimulator } from "@/components/TrendPulseSimulator";
import { PremiumBackground } from "@/components/PremiumBackground";

const stats = [
  { label: "App Screens", value: "40+", icon: Layers, color: "text-purple-400" },
  { label: "Analytics Engine", value: "Real-Time", icon: Gauge, color: "text-cyan-400" },
  { label: "Intelligence Source", value: "Gemini AI", icon: Cpu, color: "text-pink-400" },
  { label: "Aggregators", value: "Multi-Source", icon: Activity, color: "text-green-400" }
];

const features = [
  "Real-Time Trend Tracking",
  "Sentiment Analysis",
  "AI Chat Assistant",
  "Trend Scoring Engine",
  "Keyword Velocity Tracking",
  "News Monitoring",
  "Reddit Analytics",
  "YouTube Trend Analysis",
  "Emerging Trend Detection",
  "Interactive Dashboards"
];

const techStack = [
  { name: "React Native", category: "Frontend" },
  { name: "Expo", category: "Frontend" },
  { name: "React Native Web", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Gemini AI", category: "AI Models" },
  { name: "News API", category: "Data Sources" },
  { name: "GNews API", category: "Data Sources" }
];

export default function TrendPulseShowcase() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050816] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Neural Web & magnet spotlight background */}
      <PremiumBackground />

      {/* Floating accent background shapes */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* BACK NAVIGATION BUTTON */}
      <div className="container mx-auto px-6 pt-8 max-w-7xl relative z-40">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white hover:border-white/20 transition-all hover:-translate-x-1 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-semibold">Back to Portfolio</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-30">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: PREMIUM SMARTPHONE MOCKUP & LIVE PREVIEW
              ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center sticky top-24">
            {/* Guest mode warning note */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(0,198,255,0.05)] text-center text-xs text-cyan-400 font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 animate-pulse" />
              <span>GUEST DEMO ACTIVE: Simulated read-only environments.</span>
            </motion.div>

            {/* Smartphone floating frame wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[50px] p-2 bg-[#050816]/40 border border-white/5 shadow-[0_0_80px_rgba(106,37,244,0.15)] group"
            >
              {/* Backlight glow behind device */}
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-tr from-purple-500/10 via-cyan-500/10 to-transparent blur-xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity" />
              
              <TrendPulseSimulator />
            </motion.div>

            <p className="text-gray-500 text-xs mt-6 text-center italic select-none">
              Scroll and tap inside the phone mockup to experience the actual app!
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN: SAAS PRODUCT METRICS & TECH DETAILS
              ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-10">
            {/* TITLE HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold text-purple-400 tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                AI Trend Analytics Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                Trend<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d8b4fe] to-accent">Pulse</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-6">
                An AI-powered social media trend tracker that analyzes real-time trends from News API, GNews, Reddit, and YouTube using NLP algorithms and Gemini-assisted insights. Recreated directly inside a native-bezel mockup.
              </p>

              {/* Development progress status */}
              <div className="glassmorphism p-5 rounded-2xl border border-white/5 space-y-3.5 max-w-md">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">Development Progress</span>
                  <span className="text-accent font-extrabold">96% Completed</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-[96%]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span>Production Ready · Verified API isolation layers.</span>
                </div>
              </div>
            </motion.div>

            {/* CORE STATISTICS GRID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="glassmorphism p-5 rounded-2xl border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all flex flex-col justify-between h-28">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <div>
                      <p className="text-xl font-black tracking-tight">{stat.value}</p>
                      <p className="text-[11px] text-gray-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* KEY FEATURES LIST */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold tracking-tight border-b border-white/10 pb-2">Key Core Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-gray-300 text-sm hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DETAILED TECH CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold tracking-tight border-b border-white/10 pb-2">Technology Stack</h2>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all text-xs font-semibold flex items-center gap-2"
                  >
                    {tech.category === "Database" && <Database className="w-3.5 h-3.5 text-purple-400" />}
                    {tech.category === "AI Models" && <Cpu className="w-3.5 h-3.5 text-cyan-400" />}
                    {tech.category === "Frontend" && <Layers className="w-3.5 h-3.5 text-pink-400" />}
                    {tech.category === "Backend" && <Code className="w-3.5 h-3.5 text-green-400" />}
                    {tech.category === "Data Sources" && <Activity className="w-3.5 h-3.5 text-yellow-400" />}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ACTION CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="https://github.com/Mdsaqib7411" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-black bg-white rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                <FaGithub className="w-4 h-4" /> GitHub Repository
              </a>

              <button 
                onClick={() => alert("Documentation is server-side and restricted under Demo Mode settings.")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all"
              >
                <BookOpen className="w-4 h-4 text-gray-300 group-hover:text-white" /> Documentation
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </main>
  );
}
