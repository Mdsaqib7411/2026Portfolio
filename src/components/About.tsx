"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Database } from "lucide-react";

export function About() {
  const roles = [
    { icon: <Code2 className="w-6 h-6" />, title: "Full Stack Developer" },
    { icon: <Smartphone className="w-6 h-6" />, title: "React Native Developer" },
    { icon: <Brain className="w-6 h-6" />, title: "AI App Builder" },
    { icon: <Database className="w-6 h-6" />, title: "Backend Enthusiast" },
  ];

  const technologies = [
    "React Native CLI", "Node.js", "Express.js", "MongoDB", 
    "MySQL", "Gemini API", "AI Integration", "Real-Time Data Processing"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent tracking-widest uppercase">
            Introduction
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">About</span> Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors" />
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              Architecting Digital Futures
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a passionate software developer specializing in building scalable web and mobile applications. 
              With a strong foundation in modern JavaScript frameworks and AI integration, I craft solutions that 
              are not just functional, but futuristic and intelligent.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="text-primary">{role.icon}</div>
                  <span className="text-sm font-medium">{role.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Stat Cards */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-primary/50 transition-colors flex flex-col justify-center min-h-[160px] relative overflow-hidden group/stat">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">2+</h4>
              <p className="text-sm text-gray-400 font-medium">Years Experience</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-accent/50 transition-colors flex flex-col justify-center min-h-[160px] lg:translate-y-8 relative overflow-hidden group/stat">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">10+</h4>
              <p className="text-sm text-gray-400 font-medium">Projects Built</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-primary/50 transition-colors flex flex-col justify-center min-h-[160px] relative overflow-hidden group/stat">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">3+</h4>
              <p className="text-sm text-gray-400 font-medium">AI Integrations</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-accent/50 transition-colors flex flex-col justify-center min-h-[160px] lg:translate-y-8 relative overflow-hidden group/stat">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">100%</h4>
              <p className="text-sm text-gray-400 font-medium">Commitment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
