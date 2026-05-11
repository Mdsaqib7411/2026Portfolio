"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React Native", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "PHP", level: 70 },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ]
  },
  {
    title: "AI & APIs",
    skills: [
      { name: "Gemini API", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Trend Analysis", level: 85 },
      { name: "Personalization", level: 80 },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 80 },
    ]
  }
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative bg-[#050816]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent tracking-widest uppercase">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative group/grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="relative p-0.5 rounded-3xl"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  className="absolute inset-0 bg-white/5 rounded-3xl -z-10"
                />
              )}
              
              <div className="h-full rounded-[23px] bg-black/40 backdrop-blur-md border border-white/10 p-8 flex flex-col hover:border-white/20 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {category.title}
                </h3>
                
                <div className="space-y-6 flex-1">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
