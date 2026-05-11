"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  // For the React Spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // For the Canvas Neural Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let localMouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Made dots brighter and added glow
        ctx.fillStyle = "rgba(168, 85, 247, 0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for other drawings
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const trackMouse = (e: MouseEvent) => {
      localMouse.x = e.clientX;
      localMouse.y = e.clientY;
    };
    window.addEventListener("mousemove", trackMouse);
    window.addEventListener("mouseleave", () => {
      localMouse.x = -1000;
      localMouse.y = -1000;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles to each other (The Neural Web)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            // Made connecting lines brighter
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 - distance / 350})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect particles to Mouse (Interactive Magnet)
        const mouseDx = particles[i].x - localMouse.x;
        const mouseDy = particles[i].y - localMouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < 220) {
            ctx.beginPath();
            // Made cursor connecting lines brighter
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.7 - mouseDistance / 300})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(localMouse.x, localMouse.y);
            ctx.stroke();
            
            // Stronger magnetic pull towards mouse
            particles[i].x -= mouseDx * 0.015;
            particles[i].y -= mouseDy * 0.015;
          }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", trackMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050816]">
      {/* 1. Base Premium Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)"
        }}
      />

      {/* 2. Interactive Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 opacity-100"
      />

      {/* 3. Mouse Spotlight Glow */}
      <motion.div
        className="absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.08), transparent 50%)`,
        }}
      />
    </div>
  );
}
