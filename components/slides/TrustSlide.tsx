"use client";

import SlideWrapper from "../SlideWrapper";
import { SlidersHorizontal, ShieldCheck, UserCheck } from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function TrustSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const { tr, t } = useTr();

  const pillars = [
    {
      icon: SlidersHorizontal,
      title: tr(t.trust.pillar1Title),
      desc: tr(t.trust.pillar1Desc),
      highlight: tr(t.trust.pillar1Highlight),
    },
    {
      icon: ShieldCheck,
      title: tr(t.trust.pillar2Title),
      desc: tr(t.trust.pillar2Desc),
      highlight: tr(t.trust.pillar2Highlight),
    },
    {
      icon: UserCheck,
      title: tr(t.trust.pillar3Title),
      desc: tr(t.trust.pillar3Desc),
      highlight: tr(t.trust.pillar3Highlight),
    },
  ];

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-12">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.trust.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-1.5 md:mb-4">
            {tr(t.trust.titleStart)}{" "}
            <span className="gradient-text">{tr(t.trust.titleHighlight)}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="clean-card p-3 md:p-8 text-center">
              <div className="icon-box !w-8 !h-8 md:!w-14 md:!h-14 !rounded-lg md:!rounded-2xl mx-auto mb-2 md:mb-5">
                <pillar.icon size={16} className="text-brand-accent md:hidden" />
                <pillar.icon size={24} className="text-brand-accent hidden md:block" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-brand-dark mb-1 md:mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-gray leading-relaxed mb-2 md:mb-4">
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
              {tr(t.trust.bottomBold)}
              <span className="gradient-text">{tr(t.trust.bottomHighlight)}</span>
            </p>
            <p className="text-[10px] md:text-sm text-brand-gray mt-1 md:mt-2 leading-snug md:leading-relaxed">
              {tr(t.trust.bottomDesc)}
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
