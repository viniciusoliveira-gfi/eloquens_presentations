"use client";

import SlideWrapper from "../SlideWrapper";
import { Link2, Settings, Database, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect Your Inbox",
    desc: "Works with Gmail, Outlook, or KerioConnect. Setup takes seconds.",
  },
  {
    icon: Settings,
    title: "Set Rules & Tone",
    desc: "Define how Eloquens® AI should respond, escalate, or close emails.",
  },
  {
    icon: Database,
    title: "Add Your Knowledge",
    desc: "Upload documents, FAQs, or connect approved content sources.",
  },
  {
    icon: Rocket,
    title: "Let Eloquens® AI Run",
    desc: "Approve replies or enable auto-send. Start saving hours immediately.",
  },
];

export default function HowItWorksSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
            Getting Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-brand-gray">
            Create your email assistant in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="clean-card p-6 text-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[13px] w-[26px] h-[2px] bg-gray-300 rounded-full" />
              )}
              <div className="number-badge mx-auto mb-4">{i + 1}</div>
              <div className="icon-box !w-12 !h-12 !rounded-xl mx-auto mb-4">
                <step.icon size={22} className="text-brand-accent" />
              </div>
              <h3 className="font-bold text-brand-dark text-base mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-blue-200 text-brand-accent font-semibold text-sm shadow-sm">
            <Link2 size={16} />
            Connect Your Inbox →
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
