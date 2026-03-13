"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({
  current,
  total,
  onPrev,
  onNext,
  onGoTo,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}) {
  return (
    <>
      {current > 0 && (
        <button
          onClick={onPrev}
          className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm text-gray-600"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="md:hidden" />
          <ChevronLeft size={20} className="hidden md:block" />
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={onNext}
          className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm text-gray-600"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="md:hidden" />
          <ChevronRight size={20} className="hidden md:block" />
        </button>
      )}

      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 md:gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-brand-accent scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 text-[10px] md:text-xs text-gray-400 font-mono">
        {current + 1} / {total}
      </div>
    </>
  );
}
