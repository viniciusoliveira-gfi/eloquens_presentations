"use client";

import SlideWrapper from "../SlideWrapper";
import { Link2, Settings, Database, Rocket } from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function HowItWorksSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const { tr, t } = useTr();

  const steps = [
    { icon: Link2, title: tr(t.howItWorks.step1Title), desc: tr(t.howItWorks.step1Desc) },
    { icon: Settings, title: tr(t.howItWorks.step2Title), desc: tr(t.howItWorks.step2Desc) },
    { icon: Database, title: tr(t.howItWorks.step3Title), desc: tr(t.howItWorks.step3Desc) },
    { icon: Rocket, title: tr(t.howItWorks.step4Title), desc: tr(t.howItWorks.step4Desc) },
  ];

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-3 md:mb-12">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.howItWorks.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-1 md:mb-4">
            {tr(t.howItWorks.titleStart)} <span className="gradient-text">{tr(t.howItWorks.titleHighlight)}</span>
          </h2>
          <p className="text-xs md:text-lg text-brand-gray">
            {tr(t.howItWorks.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="clean-card p-3 md:p-6 text-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[13px] w-[26px] h-[2px] bg-gray-300 rounded-full" />
              )}
              <div className="number-badge mx-auto mb-2 md:mb-4">{i + 1}</div>
              <div className="icon-box !w-9 !h-9 md:!w-12 md:!h-12 !rounded-lg md:!rounded-xl mx-auto mb-2 md:mb-4">
                <step.icon size={14} className="text-brand-accent md:hidden" />
                <step.icon size={22} className="text-brand-accent hidden md:block" />
              </div>
              <h3 className="font-bold text-brand-dark text-xs md:text-base mb-1 md:mb-2">
                {step.title}
              </h3>
              <p className="text-[10px] md:text-sm text-brand-gray leading-snug md:leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-3 md:mt-10">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-3 rounded-full bg-white border border-blue-200 text-brand-accent font-semibold text-xs md:text-sm shadow-sm">
            <Link2 size={14} className="md:hidden" />
            <Link2 size={16} className="hidden md:block" />
            {tr(t.howItWorks.connectCta)}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
