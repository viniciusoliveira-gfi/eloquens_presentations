"use client";

import SlideWrapper from "../SlideWrapper";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function CTASlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const { tr, t } = useTr();

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <div className="mb-3 md:mb-8">
          <Image
            src="/eloquens-logo.png"
            alt="Eloquens® AI"
            width={140}
            height={36}
            className="mx-auto opacity-60 w-[80px] md:w-[140px] h-auto"
          />
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-2 md:mb-6">
          {tr(t.cta.title)}{" "}
          <span className="gradient-text">{tr(t.cta.titleHighlight)}</span>
        </h2>

        <p className="text-sm md:text-xl text-brand-gray mb-4 md:mb-10 max-w-xl">
          {tr(t.cta.subtitle)}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-5 md:mb-12">
          <a
            href="https://eloquens.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-brand-accent text-white rounded-full font-semibold text-sm md:text-lg hover:bg-brand-deep transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
          >
            {tr(t.cta.getStarted)}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform md:hidden"
            />
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform hidden md:block"
            />
          </a>
          <a
            href="https://eloquens.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-white text-brand-dark rounded-full font-semibold text-sm md:text-lg border border-gray-200 hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            <Calendar size={16} className="md:hidden" />
            <Calendar size={20} className="hidden md:block" />
            {tr(t.cta.bookDemo)}
          </a>
        </div>

        <div className="text-xs md:text-sm text-brand-gray">
          <span className="font-medium text-brand-dark">eloquens.ai</span>
          <span className="mx-2">·</span>
          {tr(t.cta.tagline)}
        </div>
      </div>
    </SlideWrapper>
  );
}
