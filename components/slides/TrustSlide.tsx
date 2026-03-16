"use client";

import SlideWrapper from "../SlideWrapper";
import { SlidersHorizontal, ShieldCheck, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: SlidersHorizontal,
    title: "Full Control",
    desc: "Set rules for what's auto-sent, what needs review, and what escalates. Draft-only, intelligent response, or full automation — you choose.",
    highlight: "You choose the automation level",
  },
  {
    icon: ShieldCheck,
    title: "No Hallucinations. Ever.",
    desc: "Grounded in your real data. Backed by approved information. No guessing, no made-up answers, no brand risk.",
    highlight: "Only real, verified data",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    desc: "When Eloquens® AI hits a knowledge gap, it escalates to a human. Then it learns from the answer. A self-learning engine that gets smarter with every interaction.",
    highlight: "Self-learning, always improving",
  },
];

export default function TrustSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-12">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            Eloquens® AI is Built for
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-1.5 md:mb-4">
            End-to-end{" "}
            <span className="gradient-text">resolution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="clean-card p-3 md:p-8 text-center">
              <div className="icon-box !w-8 !h-8 md:!w-14 md:!h-14 !rounded-lg md:!rounded-2xl mx-auto mb-1.5 md:mb-5">
                <pillar.icon size={16} className="text-brand-accent md:hidden" />
                <pillar.icon size={24} className="text-brand-accent hidden md:block" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-brand-dark mb-1 md:mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-gray leading-snug md:leading-relaxed mb-2 md:mb-4">
                {pillar.desc}
              </p>
              <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-50 text-[10px] md:text-xs font-semibold text-brand-accent">
                {pillar.highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-3 md:mt-10">
          <div className="inline-block max-w-2xl">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-2 md:mb-5 opacity-40" />
            <p className="text-xs md:text-lg font-semibold text-brand-dark tracking-tight">
              Eloquens® AI doesn&apos;t just draft&thinsp;—&thinsp;
              <span className="gradient-text">it sends.</span>
            </p>
            <p className="text-[10px] md:text-sm text-brand-gray mt-1 md:mt-2 leading-snug md:leading-relaxed">
              With{" "}
              <span className="font-medium text-brand-slate">HITL controls</span>
              {" "}and{" "}
              <span className="font-medium text-brand-slate">knowledge-grounded responses</span>
              , it was built for{" "}
              <span className="font-semibold gradient-text">autonomous execution</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
