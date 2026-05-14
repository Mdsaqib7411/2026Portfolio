"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for New Opportunities</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1] flex flex-col gap-2">
            <motion.span 
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white block"
            >
              Md Saqib
            </motion.span>
            <motion.span 
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d8b4fe] to-accent bg-[length:200%_auto] block pb-2"
              >
                Hussain.
              </motion.span>
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            AI & Full Stack Developer building premium, high-performance web and mobile experiences. Turning complex ideas into futuristic digital realities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#projects" className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="/Saqib26Resume.pdf" target="_blank" rel="noreferrer" className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" /> Download CV
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-14">
            <SocialLink href="https://github.com/Mdsaqib7411" icon={<FaGithub size={22} />} />
            <SocialLink href="https://linkedin.com/in/md-saqib-hussain-7411l7295" icon={<FaLinkedin size={22} />} />
            <SocialLink href="mailto:mdsaqibhussain123@gmail.com" icon={<Mail size={22} />} />
          </div>
        </motion.div>

        {/* Right Column: Image & Holograms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Holographic rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-20px] md:inset-[-40px] rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
            
            {/* Main Image */}
            <div className="absolute inset-0 md:inset-4 rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0e27] shadow-[0_0_80px_rgba(168,85,247,0.15)]">
              <Image
                src="/profile.png"
                alt="Md Saqib Hussain"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating UI Element 1 */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-12 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-blue-600/40 flex items-center justify-center border border-white/5">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Gemini AI</p>
                  <p className="text-sm font-bold text-white">Integrated</p>
                </div>
              </div>
            </motion.div>

            {/* Floating UI Element 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-6 md:-right-12 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center w-40">
                  <p className="text-xs text-gray-400 font-medium">System Status</p>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    >
      {icon}
    </a>
  );
}
