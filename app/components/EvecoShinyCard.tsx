"use client";

import { useCallback, useRef, useState } from "react";
import { CheckCircle2, Zap, Car, Shield, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

// Utility function for class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface EvecoShinyCardProps {
  className?: string;
  title: string;
  subtitle: string;
  icon: "zap" | "car" | "shield";
  steps: Array<{
    title: string;
    time: string;
  }>;
  gradientFrom: string;
  gradientTo: string;
}

export default function EvecoShinyCard({
  className,
  title,
  subtitle,
  icon,
  steps,
  gradientFrom,
  gradientTo,
}: EvecoShinyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Enhanced mouse tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));
  const scale = useSpring(1);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = x - centerX;
    const offsetY = y - centerY;
    
    mouseX.set(offsetX);
    mouseY.set(offsetY);

    const { width, height } = overlayRef.current.getBoundingClientRect();
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current.style.setProperty("--y", `${yOffset}px`);
  }, [mouseX, mouseY]);

  useMousePosition(containerRef, update);

  const getIcon = () => {
    switch (icon) {
      case "zap":
        return <Zap className="w-6 h-6" />;
      case "car":
        return <Car className="w-6 h-6" />;
      case "shield":
        return <Shield className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        `group relative w-full max-w-sm overflow-hidden rounded-2xl glass-morphism-dark neon-border p-6 text-white transition-all duration-500 cursor-pointer`,
        className
      )}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onHoverStart={() => {
        setIsHovered(true);
        scale.set(1.05);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        scale.set(1);
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{
        boxShadow: "0 25px 50px rgba(0, 255, 136, 0.25)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Effects */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-80`} />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 animate-energy-flow" />
      
      {/* Shimmering Overlay */}
      <div
        ref={overlayRef}
        className="absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        {/* Enhanced Header */}
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {getIcon()}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-400/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              />
            )}
          </motion.div>
          <div>
            <motion.h3 
              className="font-bold text-lg mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-sm opacity-90 flex items-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Sparkles className="w-3 h-3" />
              {subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Steps Container */}
        <motion.div 
          className="flex w-full flex-col gap-3 rounded-xl bg-black/20 backdrop-blur-sm p-4 border border-white/10 shadow-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              className="flex w-full items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300 group/step" 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 fill-green-400 text-white group-hover/step:fill-blue-400 transition-colors duration-300" />
              </motion.div>
              <strong className="text-sm flex-1 group-hover/step:text-green-400 transition-colors duration-300">
                {step.title}
              </strong>
              <span className="text-xs opacity-75 flex-shrink-0 px-2 py-1 rounded-full bg-white/10 group-hover/step:bg-green-400/20 transition-colors duration-300">
                {step.time}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
