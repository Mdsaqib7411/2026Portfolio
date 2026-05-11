"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 w-full z-50 transition-all duration-500 px-4`}
    >
      <div 
        className={`max-w-4xl mx-auto rounded-full border border-white/5 transition-all duration-500 flex items-center justify-between px-6 py-3 ${
          scrolled 
            ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-primary/10" 
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-accent to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <span className="text-white text-xs font-black">SH</span>
          </div>
          <span className="hidden sm:block">Saqib</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 py-1.5 transition-all relative"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/portfolioresume26.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition-all hover:scale-105 inline-block shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-4 right-4 bg-[#0a0e27]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-50"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/portfolioresume26.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 p-3 text-center text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
