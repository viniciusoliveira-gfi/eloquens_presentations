"use client";

import SlideWrapper from "../SlideWrapper";
import Image from "next/image";
import { Brain, Lightbulb, Mic2, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Reads & Understands",
    summary: "160+ languages, intent capture, sentiment analysis",
  },
  {
    icon: Lightbulb,
    title: "Thinks & Decides",
    summary: "Smart filters, knowledge lookup, routing logic",
  },
  {
    icon: Mic2,
    title: "Writes in Your Voice",
    summary: "Brand voice matching, custom personas, tone consistency",
  },
  {
    icon: BarChart3,
    title: "Learns & Improves",
    summary: "Self-learning engine, performance tracking, continuous refinement",
  },
];

export default function SolutionSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-4 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            The Solution
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-2 md:mb-4">
            Meet <span className="gradient-text">Eloquens® AI</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-gray max-w-xl mx-auto">
            The best email assistant in the world
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-3 md:gap-8 items-center">
          {/* Left: Capability cards — 3 of 5 cols */}
          <div className="md:col-span-3 space-y-2 md:space-y-3">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="clean-card overflow-hidden"
              >
                <div className="flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-5 md:py-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-brand-accent md:hidden" />
                    <cap.icon size={20} className="text-brand-accent hidden md:block" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-brand-dark text-xs md:text-sm">
                      {cap.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-gray">
                      {cap.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Product Screenshot — hidden on mobile, 2 of 5 cols on desktop */}
          <div className="hidden md:flex md:col-span-2 justify-center">
            <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              <Image
                src="/meet-eloquens.png"
                alt="Eloquens® AI Product"
                width={520}
                height={380}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
