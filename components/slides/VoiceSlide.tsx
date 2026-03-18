"use client";

import { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { Headphones, TrendingUp, Briefcase, Scale } from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function VoiceSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const [activePersona, setActivePersona] = useState(0);
  const { tr, t } = useTr();

  const personas = [
    {
      id: "support",
      label: "Support",
      labelFull: tr(t.voice.supportLabel),
      icon: Headphones,
      tone: tr(t.voice.supportTone),
      example: tr(t.voice.supportExample),
    },
    {
      id: "sales",
      label: tr(t.voice.salesLabel),
      labelFull: tr(t.voice.salesLabel),
      icon: TrendingUp,
      tone: tr(t.voice.salesTone),
      example: tr(t.voice.salesExample),
    },
    {
      id: "assistant",
      label: "Assistant",
      labelFull: tr(t.voice.assistantLabel),
      icon: Briefcase,
      tone: tr(t.voice.assistantTone),
      example: tr(t.voice.assistantExample),
    },
    {
      id: "legal",
      label: tr(t.voice.legalLabel),
      labelFull: tr(t.voice.legalLabel),
      icon: Scale,
      tone: tr(t.voice.legalTone),
      example: tr(t.voice.legalExample),
    },
  ];

  const current = personas[activePersona];

  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.voice.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-1.5 md:mb-4">
            {tr(t.voice.titleStart)}{" "}
            <span className="gradient-text">{tr(t.voice.titleHighlight)}</span>
          </h2>
          <p className="text-xs md:text-lg text-brand-gray">
            {tr(t.voice.subtitle)}
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
              {p.labelFull}
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
              {tr(t.voice.tone)}:{" "}
            </span>
            <span className="text-[10px] md:text-xs text-brand-accent font-medium">
              {current.tone}
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-5 border border-gray-100">
            <p className="text-xs md:text-sm text-brand-slate leading-relaxed">
              {current.example}
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] md:text-sm text-brand-gray mt-3 md:mt-8">
          {tr(t.voice.bottomStart)}{" "}
          <span className="font-semibold text-brand-dark">
            {tr(t.voice.bottomBold)}
          </span>
        </p>
      </div>
    </SlideWrapper>
  );
}
