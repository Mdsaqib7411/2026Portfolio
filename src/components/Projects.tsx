"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, TrendingUp, BarChart3 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

const projects = [
  {
    title: "TrendPulse – AI Trend Tracker",
    description: "An AI-powered social media trend tracking platform that analyzes viral content, engagement patterns, personalized recommendations, and real-time social media trends.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Gemini API"],
    features: [
      "AI trend analysis", "Real-time tracking", "Personalized recommendations", 
      "Viral trend prediction", "Smart analytics dashboard"
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Travel & Tour Management",
    description: "A comprehensive tour management system featuring user authentication, seamless booking experience, and an intuitive admin dashboard for managing travel packages.",
    tech: ["React", "Node.js", "Express", "MySQL", "TailwindCSS"],
    features: [
      "Booking system", "Wishlist", "Authentication", 
      "Tour management", "Admin dashboard"
    ],
    github: "#",
    live: "#",
    featured: false,
    image: "/travel-app.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent tracking-widest uppercase">
            Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-[1px] overflow-hidden group ${
                project.featured ? "bg-gradient-to-b from-primary/50 via-accent/20 to-transparent" : "bg-gradient-to-b from-white/10 to-transparent"
              }`}
            >
              <div className="bg-[#050816]/90 backdrop-blur-3xl rounded-[23px] h-full p-8 md:p-10 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Project Info */}
                <div className="order-2 lg:order-1">
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                      <Activity className="w-3 h-3 animate-pulse" />
                      Featured AI Project
                    </div>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <p className="text-sm font-semibold text-white mb-3">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map(feature => (
                        <li key={feature} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.live} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all">
                      <FaGithub className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>

                {/* Project Visuals (Mockup / Analytics) */}
                <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 bg-[#0a0e27]">
                  {project.featured ? (
                    <div className="absolute inset-0 p-6 flex flex-col">
                      {/* Dashboard Mockup */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Live Tracker</p>
                            <p className="text-sm font-bold">TrendPulse Analytics</p>
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20">
                          +24.5%
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="glassmorphism rounded-xl p-4 flex flex-col justify-between">
                          <BarChart3 className="w-5 h-5 text-accent mb-2" />
                          <div>
                            <p className="text-xs text-gray-400">Engagement Score</p>
                            <p className="text-xl font-bold">9,420</p>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded mt-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-accent rounded"
                            />
                          </div>
                        </div>
                        
                        <div className="glassmorphism rounded-xl p-4 flex flex-col justify-between">
                          <Activity className="w-5 h-5 text-primary mb-2" />
                          <div>
                            <p className="text-xs text-gray-400">Viral Probability</p>
                            <p className="text-xl font-bold">92%</p>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded mt-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "92%" }}
                              transition={{ duration: 1.5, delay: 0.7 }}
                              className="h-full bg-primary rounded"
                            />
                          </div>
                        </div>
                        
                        <div className="col-span-2 glassmorphism rounded-xl p-4 mt-2">
                          <p className="text-xs text-gray-400 mb-2">Trend Graph</p>
                          <div className="h-16 flex items-end gap-2">
                            {[40, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : project.image ? (
                    <div className="absolute inset-0">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 backdrop-blur-md shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 backdrop-blur-md shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 backdrop-blur-md shadow-sm" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <p className="text-gray-500 font-medium">Project Interface Preview</p>
                      {/* Decorative elements for standard projects */}
                      <div className="absolute top-4 left-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                    </div>
                  )}
                  
                  {/* Glass Reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
