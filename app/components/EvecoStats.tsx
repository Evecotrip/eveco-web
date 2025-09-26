"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Utility function for class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Enhanced Counter with gradient ring
function Counter({
  targetValue,
  suffix = "",
  duration = 2000,
  percentage = 0,
}: {
  targetValue: number;
  suffix?: string;
  duration?: number;
  percentage?: number;
}) {
  const [count, setCount] = useState(0);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * targetValue));
      setAnimatedPercentage(progress * percentage);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, duration, percentage, isInView]);

  return (
    <div ref={ref} className="relative">
      {percentage > 0 && (
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - animatedPercentage / 100)}`}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff88" />
              <stop offset="100%" stopColor="#0088ff" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <span className="relative z-10">
        {count}
        {suffix}
      </span>
    </div>
  );
}

// Enhanced Bento Card with glass morphism and neon effects
function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20",
        className
      )}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
      {children}
    </motion.div>
  );
}

// Individual feature components - Updated for startup
function ElectricCommitment() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-500 to-green-700 text-white">
      <div>
        <div className="text-4xl mb-2">🔋</div>
        <h3 className="text-lg font-bold">Electric Commitment</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={100} suffix="%" />
        </div>
        <p className="text-sm opacity-90">Zero Emissions Goal</p>
      </div>
    </BentoCard>
  );
}

function TeamReady() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:col-span-2">
      <div>
        <div className="text-4xl mb-2">👥</div>
        <h3 className="text-xl font-bold">Dedicated Team</h3>
        <p className="text-sm opacity-90 mt-1">
          Expert founders & advisors ready to revolutionize mobility
        </p>
      </div>
      <div className="mt-auto flex justify-end">
        {/*
        <div className="text-4xl font-black">
          <Counter targetValue={12} suffix="+" />
        </div>
        */}
      </div>
    </BentoCard>
  );
}

function PartnerNetwork() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white">
      <div>
        <div className="text-4xl mb-2">📈</div>
        <h3 className="text-lg font-bold">Market Size</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={50} suffix="K Cr" />
        </div>
        <p className="text-sm opacity-90">India Mobility</p>
      </div>
    </BentoCard>
  );
}

function SafetyFirst() {
  return (
    <BentoCard className="flex flex-col justify-center items-center bg-gradient-to-br from-slate-600 to-slate-800 text-white sm:col-span-2">
      <div className="text-center">
        <div className="text-6xl mb-4">🛡️</div>
        <h3 className="text-2xl font-black">SAFETY</h3>
        <p className="text-lg font-semibold opacity-90">
          Built Into Every Feature
        </p>
      </div>
    </BentoCard>
  );
}

function FemaleSafety() {
  return (
    <BentoCard className="flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-blue-600 text-white sm:col-span-2">
      <div className="text-center">
        <div className="text-6xl mb-4">👩‍💼</div>
        <h3 className="text-2xl font-black">FEMALE SAFETY</h3>
        <p className="text-lg font-semibold opacity-90">
          Priority Feature in Development
        </p>
      </div>
    </BentoCard>
  );
}

function LaunchCities() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div>
        <div className="text-4xl mb-2">🚀</div>
        <h3 className="text-lg font-bold">Launch Cities</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={3} suffix="" />
        </div>
        <p className="text-sm opacity-90">Planned Q2 2025</p>
      </div>
    </BentoCard>
  );
}

function DevelopmentProgress() {
  return (
    <BentoCard className="flex flex-col justify-center bg-gradient-to-br from-purple-600 to-blue-800 text-white">
      <div className="text-center">
        <div className="text-4xl mb-2">⚡</div>
        <div className="text-2xl font-black">
          <Counter targetValue={85} suffix="%" />
        </div>
        <p className="text-sm font-semibold">App Development</p>
      </div>
    </BentoCard>
  );
}

function FundingTarget() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-500 to-emerald-600 text-white">
      <div>
        <div className="text-4xl mb-2">🎯</div>
        <h3 className="text-lg font-bold">Funding Goal</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={15} suffix=" Cr" />
        </div>
        <p className="text-sm opacity-90">Pre-Seed Round</p>
      </div>
    </BentoCard>
  );
}

function TechStack() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <div>
        <div className="text-4xl mb-2">🔧</div>
        <h3 className="text-lg font-bold">Tech Stack</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">AI</div>
        <p className="text-sm opacity-90">Powered Platform</p>
      </div>
    </BentoCard>
  );
}

// Main Eveco Stats component
export default function EvecoStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-green-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Urban Mobility
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From concept to launch, see how we're preparing to transform
            transportation with{" "}
            <span className="text-green-400 font-semibold">innovation</span> and{" "}
            <span className="text-blue-400 font-semibold">sustainability</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3">
          <ElectricCommitment />
          <TeamReady />
          <PartnerNetwork />
          <SafetyFirst />
          <LaunchCities />
          <DevelopmentProgress />
          <FundingTarget />
          <TechStack />
          <FemaleSafety />
        </div>
      </div>
    </section>
  );
}