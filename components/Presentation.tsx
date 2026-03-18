"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { LanguageProvider } from "../lib/LanguageContext";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";
import LanguageToggle from "./LanguageToggle";
import HeroSlide from "./slides/HeroSlide";
import EmailMattersSlide from "./slides/EmailMattersSlide";
import OldPlaybookSlide from "./slides/OldPlaybookSlide";
import SolutionSlide from "./slides/SolutionSlide";
import ThreeLevelsSlide from "./slides/ThreeLevelsSlide";
import VoiceSlide from "./slides/VoiceSlide";
import TrustSlide from "./slides/TrustSlide";
import HowItWorksSlide from "./slides/HowItWorksSlide";
import ProcessSlide from "./slides/ProcessSlide";
import ProofSlide from "./slides/ProofSlide";
import CTASlide from "./slides/CTASlide";

const TOTAL_SLIDES = 11;

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      if (index < 0 || index >= TOTAL_SLIDES) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 650);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX < 0) next();
        else prev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    let wheelTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 30) next();
        else if (e.deltaY < -30) prev();
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [next, prev]);

  return (
    <LanguageProvider>
      <div className="w-screen overflow-hidden bg-white" style={{ height: '100dvh' }}>
        <LanguageToggle />
        <ProgressBar current={current} total={TOTAL_SLIDES} />
        <Navigation
          current={current}
          total={TOTAL_SLIDES}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
        />

        <div
          className="slide-container"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          <HeroSlide isActive={current === 0} onNext={next} />
          <EmailMattersSlide isActive={current === 1} />
          <OldPlaybookSlide isActive={current === 2} />
          <ThreeLevelsSlide isActive={current === 3} />
          <SolutionSlide isActive={current === 4} />
          <TrustSlide isActive={current === 5} />
          <VoiceSlide isActive={current === 6} />
          <HowItWorksSlide isActive={current === 7} />
          <ProcessSlide isActive={current === 8} />
          <ProofSlide isActive={current === 9} />
          <CTASlide isActive={current === 10} />
        </div>
      </div>
    </LanguageProvider>
  );
}
