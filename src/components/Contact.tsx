"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Ready to build something extraordinary? Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.a 
            href="mailto:mdsaqibhussain123@gmail.com" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center gap-4 border border-white/10 hover:border-primary/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Email Me At</p>
              <p className="text-lg font-bold text-white">mdsaqibhussain123@gmail.com</p>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+917295886601" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center gap-4 border border-white/10 hover:border-accent/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Call Me</p>
              <p className="text-lg font-bold text-white">+91 7295886601</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/md-saqib-hussain-7411l7295" 
            target="_blank" 
            rel="noreferrer" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center gap-4 border border-white/10 hover:border-blue-500/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <FaLinkedin className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Connect on LinkedIn</p>
              <p className="text-lg font-bold text-white">Md Saqib Hussain</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://github.com/Mdsaqib7411" 
            target="_blank" 
            rel="noreferrer" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center gap-4 border border-white/10 hover:border-white/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaGithub className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Follow on GitHub</p>
              <p className="text-lg font-bold text-white">@Mdsaqib7411</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
