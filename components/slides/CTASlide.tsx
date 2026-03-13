"use client";

import SlideWrapper from "../SlideWrapper";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <Image
            src="/eloquens-logo.png"
            alt="Eloquens® AI"
            width={140}
            height={36}
            className="mx-auto opacity-60"
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">
          Email, Finally{" "}
          <span className="gradient-text">Handled.</span>
        </h2>

        <p className="text-xl text-brand-gray mb-10 max-w-xl">
          Start your free trial today. No credit card required.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <a
            href="https://eloquens.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full font-semibold text-lg hover:bg-brand-deep transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
          >
            Get Started Free
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="https://eloquens.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-semibold text-lg border border-gray-200 hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            <Calendar size={20} />
            Book a Demo
          </a>
        </div>

        <div className="text-sm text-brand-gray">
          <span className="font-medium text-brand-dark">eloquens.ai</span>
          <span className="mx-2">·</span>
          Your Inbox. Handled.
        </div>
      </div>
    </SlideWrapper>
  );
}
