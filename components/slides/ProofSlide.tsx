"use client";

import SlideWrapper from "../SlideWrapper";
import {
  ShieldCheck,
  Server,
  Scale,
  Zap,
  Clock,
  Quote,
} from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function ProofSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const { tr, t } = useTr();

  const securityBadges = [
    { icon: ShieldCheck, label: tr(t.proof.casaVerified) },
    { icon: Server, label: tr(t.proof.dataResidency) },
    { icon: Scale, label: tr(t.proof.compliance) },
  ];

  const metrics = [
    {
      value: "99%",
      label: tr(t.proof.fasterResponse),
      desc: tr(t.proof.fasterResponseDesc),
      icon: Zap,
    },
    {
      value: "28%",
      label: tr(t.proof.timeFreed),
      desc: tr(t.proof.timeFreedDesc),
      icon: Clock,
    },
  ];

  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.proof.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            {tr(t.proof.titleStart)}{" "}
            <span className="gradient-text">{tr(t.proof.titleHighlight)}</span>
          </h2>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-4 mb-3 md:mb-10">
          {securityBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full bg-green-50 border border-green-100"
            >
              <badge.icon size={12} className="text-green-600 md:hidden" />
              <badge.icon size={16} className="text-green-600 hidden md:block" />
              <span className="text-[10px] md:text-sm font-medium text-green-800">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 max-w-3xl mx-auto mb-3 md:mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="clean-card p-3 md:p-8 text-center">
              <div className="icon-box !w-8 !h-8 md:!w-12 md:!h-12 !rounded-lg md:!rounded-xl mx-auto mb-2 md:mb-4">
                <m.icon size={14} className="text-brand-accent md:hidden" />
                <m.icon size={22} className="text-brand-accent hidden md:block" />
              </div>
              <div className="text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                {m.value}
              </div>
              <h3 className="font-bold text-brand-dark text-sm md:text-lg mb-0.5 md:mb-1">
                {m.label}
              </h3>
              <p className="text-[10px] md:text-sm text-brand-gray">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto clean-card p-3 md:p-6 flex items-start gap-2 md:gap-4">
          <div className="flex-shrink-0">
            <Quote size={16} className="text-brand-accent opacity-40 md:hidden" />
            <Quote size={24} className="text-brand-accent opacity-40 hidden md:block" />
          </div>
          <div>
            <p className="text-brand-slate text-xs md:text-base leading-snug md:leading-relaxed italic mb-1.5 md:mb-3">
              &ldquo;{tr(t.proof.testimonial)}&rdquo;
            </p>
            <p className="text-[10px] md:text-sm text-brand-gray font-medium">
              {tr(t.proof.testimonialAuthor)}
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
