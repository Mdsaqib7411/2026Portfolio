"use client";

import { motion } from "framer-motion";
import { GraduationCap, Smartphone, BrainCircuit, Rocket, Zap } from "lucide-react";

const journey = [
  {
    title: "Learning Web Development",
    description: "Started the journey by mastering HTML, CSS, JavaScript, and modern frontend frameworks like React.",
    icon: <GraduationCap className="w-5 h-5" />,
    year: "Phase 1"
  },
  {
    title: "Mobile App Development",
    description: "Expanded into cross-platform mobile development using React Native CLI, building responsive native applications.",
    icon: <Smartphone className="w-5 h-5" />,
    year: "Phase 2"
  },
  {
    title: "AI Integration",
    description: "Dived into artificial intelligence by integrating the Gemini API to add smart features to existing applications.",
    icon: <BrainCircuit className="w-5 h-5" />,
    year: "Phase 3"
  },
  {
    title: "Building TrendPulse",
    description: "Architected and developed a full-stack AI-powered social media trend tracker with Node.js and MongoDB.",
    icon: <Rocket className="w-5 h-5" />,
    year: "Phase 4"
  },
  {
    title: "Exploring AI & Real-Time Analytics",
    description: "Currently pushing boundaries with real-time data processing, personalized algorithms, and advanced AI systems.",
    icon: <Zap className="w-5 h-5" />,
    year: "Present"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {journey.map((item, idx) => (
              <div key={item.title} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 rounded-full glassmorphism flex items-center justify-center border-2 border-primary group-hover:border-accent group-hover:scale-110 transition-all duration-300 z-10 bg-background">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Left Content (or empty for alternating) */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12 mt-12 md:mt-0"}`}
                >
                  <div className="glassmorphism p-6 rounded-2xl hover-glow">
                    <span className="text-xs font-bold text-accent mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>

                {/* Empty div for spacing on the other side */}
                <div className={`hidden md:block md:w-[45%] ${idx % 2 === 0 ? "order-2" : ""}`} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
