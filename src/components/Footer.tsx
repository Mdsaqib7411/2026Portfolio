"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-24 bg-[#050816] overflow-hidden">
      {/* Glowing Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                <span className="text-white text-[10px] font-black">SH</span>
              </div>
              <span>Saqib<span className="text-primary">.</span></span>
            </Link>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Md Saqib Hussain. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Mdsaqib7411" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/md-saqib-hussain-7411l7295" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="mailto:mdsaqibhussain123@gmail.com" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
