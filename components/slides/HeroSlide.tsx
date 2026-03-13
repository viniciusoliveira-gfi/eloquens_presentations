"use client";

import SlideWrapper from "../SlideWrapper";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSlide({
  isActive,
  onNext,
}: {
  isActive: boolean;
  onNext: () => void;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="white">
      {/* Floating envelopes background — hidden on mobile */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 hidden md:block ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        key={isActive ? "active" : "inactive"}
      >
        <div className="absolute top-[15%] left-[10%] animate-float-1">
          <Mail size={48} className="text-brand-accent" strokeWidth={1} />
        </div>
        <div className="absolute top-[60%] right-[12%] animate-float-2">
          <Mail size={36} className="text-brand-accent" strokeWidth={1} />
        </div>
        <div className="absolute bottom-[20%] left-[25%] animate-float-3">
          <Mail size={28} className="text-brand-accent" strokeWidth={1} />
        </div>
        <div className="absolute top-[30%] right-[30%] animate-float-2" style={{ animationDelay: "3s" }}>
          <Mail size={22} className="text-brand-accent" strokeWidth={1} />
        </div>
        <div className="absolute bottom-[35%] right-[8%] animate-float-1" style={{ animationDelay: "6s" }}>
          <Mail size={40} className="text-brand-accent" strokeWidth={1} />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <div className="mb-2 md:mb-8">
          <Image
            src="/eloquens-logo.png"
            alt="Eloquens® AI"
            width={180}
            height={48}
            className="mx-auto w-[100px] md:w-[180px] h-auto"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark mb-2 md:mb-6">
          Your Inbox.{" "}
          <span className="gradient-text">Handled.</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-brand-gray max-w-2xl leading-relaxed mb-4 md:mb-10">
          Stop wasting your best hours reading, sorting, and replying to email.
        </p>

        {/* Animated stats row */}
        <div className="flex items-center gap-3 md:gap-8 mb-5 md:mb-12">
          <div className="flex flex-col items-center">
            <span className="text-base md:text-2xl font-bold gradient-text">&lt; 5 min</span>
            <span className="text-[10px] md:text-xs text-brand-gray mt-0.5">Response Time</span>
          </div>
          <div className="w-px h-6 md:h-10 bg-gray-200" />
          <div className="flex flex-col items-center">
            <span className="text-base md:text-2xl font-bold gradient-text">160+</span>
            <span className="text-[10px] md:text-xs text-brand-gray mt-0.5">Languages</span>
          </div>
          <div className="w-px h-6 md:h-10 bg-gray-200" />
          <div className="flex flex-col items-center">
            <span className="text-base md:text-2xl font-bold gradient-text">24/7</span>
            <span className="text-[10px] md:text-xs text-brand-gray mt-0.5">Always On</span>
          </div>
        </div>

        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-accent text-white rounded-full font-semibold text-base md:text-lg hover:bg-brand-deep transition-all animate-glow"
        >
          See How It Works
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:hidden" />
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform hidden md:block" />
        </button>
      </div>
    </SlideWrapper>
  );
}
