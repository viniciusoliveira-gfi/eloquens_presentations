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
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
            Eloquens® AI is Built for
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            End-to-End{" "}
            <span className="gradient-text">Resolution.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="clean-card p-8 text-center">
              <div className="icon-box !w-14 !h-14 !rounded-2xl mx-auto mb-5">
                <pillar.icon size={24} className="text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed mb-4">
                {pillar.desc}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-sm font-semibold text-brand-accent">
                {pillar.highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-block max-w-2xl">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-5 opacity-40" />
            <p className="text-base md:text-lg font-semibold text-brand-dark tracking-tight">
              Eloquens® AI doesn&apos;t just draft&thinsp;—&thinsp;
              <span className="gradient-text">it sends.</span>
            </p>
            <p className="text-sm text-brand-gray mt-2 leading-relaxed">
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
