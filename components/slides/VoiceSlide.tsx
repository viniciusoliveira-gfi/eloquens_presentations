"use client";

import { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { Headphones, TrendingUp, Briefcase, Scale } from "lucide-react";

const personas = [
  {
    id: "support",
    label: "Customer Support",
    icon: Headphones,
    tone: "Warm, empathetic, solution-focused",
    example:
      "Hi Sarah, thank you for reaching out! I completely understand the frustration. I've already looked into your order (#4821) and issued a full refund. You should see it within 2-3 business days. Is there anything else I can help with?",
  },
  {
    id: "sales",
    label: "Sales",
    icon: TrendingUp,
    tone: "Confident, value-driven, action-oriented",
    example:
      "Hi Mark, great speaking with you yesterday. Based on your team's needs, I've put together a custom proposal. The Enterprise plan would give your 50-person team full coverage at $12/seat \u2014 a 40% saving vs. your current setup. Want to hop on a quick call this Thursday?",
  },
  {
    id: "assistant",
    label: "Personal Assistant",
    icon: Briefcase,
    tone: "Professional, concise, proactive",
    example:
      "Hi David, confirming your meeting with Acme Corp is set for Thursday at 2 PM EST. I've attached the prep materials and added the agenda to your calendar. Let me know if you'd like me to reschedule anything else this week.",
  },
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    tone: "Precise, formal, detail-oriented",
    example:
      "Dear Ms. Chen, please find attached the revised NDA reflecting the amendments discussed. Specifically, Section 4.2 has been updated to extend the confidentiality period to 36 months. Kindly review and confirm your acceptance at your earliest convenience.",
  },
];

export default function VoiceSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const [activePersona, setActivePersona] = useState(0);
  const current = personas[activePersona];

  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            Voice Matching
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-2 md:mb-4">
            It Sounds Like You.{" "}
            <span className="gradient-text">Because You Trained It.</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-gray">
            Eloquens® AI adapts to how you actually communicate.
          </p>
        </div>

        {/* Persona tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-3 md:mb-8">
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(i)}
              className={`flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full text-[10px] md:text-sm font-medium transition-all ${
                i === activePersona
                  ? "bg-brand-accent text-white shadow-md shadow-blue-200"
                  : "bg-white text-brand-slate border border-gray-200 hover:border-blue-200 hover:text-brand-accent"
              }`}
            >
              <p.icon size={12} className="md:hidden" />
              <p.icon size={16} className="hidden md:block" />
              {p.label}
            </button>
          ))}
        </div>

        {/* Email example */}
        <div className="clean-card p-3 md:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400" />
            <span className="ml-2 md:ml-3 text-[10px] md:text-sm text-brand-gray font-mono">
              Eloquens® AI — {current.label}
            </span>
          </div>
          <div className="mb-2 md:mb-4">
            <span className="text-[10px] md:text-xs text-brand-gray uppercase tracking-wide">
              Tone:{" "}
            </span>
            <span className="text-[10px] md:text-xs text-brand-accent font-medium">
              {current.tone}
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-5 border border-gray-100">
            <p className="text-xs md:text-sm text-brand-slate leading-snug md:leading-relaxed">
              {current.example}
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] md:text-sm text-brand-gray mt-3 md:mt-8">
          Not generic AI filler.{" "}
          <span className="font-semibold text-brand-dark">
            Your voice, your knowledge, your rules.
          </span>
        </p>
      </div>
    </SlideWrapper>
  );
}
