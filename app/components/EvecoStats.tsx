"use client";

import { useState, useEffect } from "react";

// Utility function for class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Counter component for animated numbers
function Counter({
  targetValue,
  suffix = "",
  duration = 2000,
}: {
  targetValue: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * targetValue));

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
  }, [targetValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Bento Card wrapper component
function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

// Individual feature components
function ElectricFleet() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-500 to-green-700 text-white">
      <div>
        <div className="text-4xl mb-2">🔋</div>
        <h3 className="text-lg font-bold">100% Electric Fleet</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={100} suffix="%" />
        </div>
        <p className="text-sm opacity-90">Zero Emissions</p>
      </div>
    </BentoCard>
  );
}

function HappyCustomers() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:col-span-2">
      <div>
        <div className="text-4xl mb-2">😊</div>
        <h3 className="text-xl font-bold">Happy Customers</h3>
        <p className="text-sm opacity-90 mt-1">
          Trusted by thousands across India
        </p>
      </div>
      <div className="mt-auto flex justify-end">
        <div className="text-4xl font-black">
          <Counter targetValue={50} suffix="K+" />
        </div>
      </div>
    </BentoCard>
  );
}

function ChargingStations() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white">
      <div>
        <div className="text-4xl mb-2">⚡</div>
        <h3 className="text-lg font-bold">Charging Network</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={500} suffix="+" />
        </div>
        <p className="text-sm opacity-90">Stations</p>
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
          Always First Priority
        </p>
      </div>
    </BentoCard>
  );
}

function FemaleSafety() {
  return (
    <BentoCard className="flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-blue-600 text-white sm:col-span-2">
      <div className="text-center">
        <div className="text-6xl mb-4">�‍💼</div>
        <h3 className="text-2xl font-black">FEMALE SAFETY</h3>
        <p className="text-lg font-semibold opacity-90">
          Female Riders for Female
        </p>
      </div>
    </BentoCard>
  );
}

function CitiesCovered() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div>
        <div className="text-4xl mb-2">🏙️</div>
        <h3 className="text-lg font-bold">Cities</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={25} suffix="+" />
        </div>
        <p className="text-sm opacity-90">Locations</p>
      </div>
    </BentoCard>
  );
}

function TwentyFourSeven() {
  return (
    <BentoCard className="flex flex-col justify-center bg-gradient-to-br from-gray-600 to-gray-800 text-white">
      <div className="text-center">
        <div className="text-4xl mb-2">🕐</div>
        <div className="text-2xl font-black">24/7</div>
        <p className="text-sm font-semibold">Service</p>
      </div>
    </BentoCard>
  );
}

function CarbonSaved() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-green-500 to-emerald-600 text-white">
      <div>
        <div className="text-4xl mb-2">🌱</div>
        <h3 className="text-lg font-bold">CO₂ Saved</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">
          <Counter targetValue={2} suffix="M+" />
        </div>
        <p className="text-sm opacity-90">kg CO₂</p>
      </div>
    </BentoCard>
  );
}

function AppRating() {
  return (
    <BentoCard className="flex flex-col justify-between bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <div>
        <div className="text-4xl mb-2">⭐</div>
        <h3 className="text-lg font-bold">App Rating</h3>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-black">4.8</div>
        <p className="text-sm opacity-90">★★★★★</p>
      </div>
    </BentoCard>
  );
}

// Main Eveco Stats component
export default function EvecoStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we're transforming urban mobility and making a positive
            impact on the environment
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 animate-fade-up animation-delay-200">
          <ElectricFleet />
          <HappyCustomers />
          <ChargingStations />
          <SafetyFirst />
          <CitiesCovered />
          <TwentyFourSeven />
          <CarbonSaved />
          <AppRating />
          <FemaleSafety />
        </div>
      </div>
    </section>
  );
}
