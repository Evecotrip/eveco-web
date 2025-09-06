"use client";

import { useCallback, useRef } from "react";
import { CheckCircle2, Zap, Car, Shield } from "lucide-react";
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

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

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
    <div
      ref={containerRef}
      className={cn(
        `group relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br ${gradientFrom} ${gradientTo} p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl`,
        className
      )}
    >
      <div
        ref={overlayRef}
        className="-z-1 absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {getIcon()}
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-inner">
          {steps.map((step, index) => (
            <div className="flex w-full items-center gap-3" key={index}>
              <CheckCircle2 className="flex-shrink-0 w-5 h-5 fill-green-400 text-white" />
              <strong className="text-sm flex-1">{step.title}</strong>
              <span className="text-xs opacity-75 flex-shrink-0">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
