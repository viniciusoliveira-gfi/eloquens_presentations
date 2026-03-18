"use client";

import SlideWrapper from "../SlideWrapper";
import {
  Handshake,
  HeartHandshake,
  FileSignature,
  Landmark,
  Inbox,
  Brain,
  EyeOff,
  Clock,
} from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function EmailMattersSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const { tr, t } = useTr();

  const positiveItems = [
    { icon: Handshake, text: tr(t.emailMatters.salesConversations) },
    { icon: HeartHandshake, text: tr(t.emailMatters.supportLoyal) },
    { icon: FileSignature, text: tr(t.emailMatters.contracts) },
    { icon: Landmark, text: tr(t.emailMatters.decisions) },
  ];

  const negativeItems = [
    { icon: Inbox, text: tr(t.emailMatters.endlessInbox) },
    { icon: Clock, text: tr(t.emailMatters.hoursSpent) },
    { icon: EyeOff, text: tr(t.emailMatters.buriedEmails) },
    { icon: Brain, text: tr(t.emailMatters.bestHours) },
  ];

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full">
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.emailMatters.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            {tr(t.emailMatters.titleStart)}{" "}
            <span className="gradient-text">{tr(t.emailMatters.titleHighlight)}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-2 md:gap-8 max-w-5xl mx-auto mb-3 md:mb-10">
          {/* Left — positive */}
          <div className="clean-card p-3 md:p-8">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-6">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-accent" />
              <h3 className="text-sm md:text-lg font-bold text-brand-dark">
                {tr(t.emailMatters.importantChannel)}
              </h3>
            </div>
            <div className="space-y-2 md:space-y-4">
              {positiveItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="icon-box !w-7 !h-7 md:!w-10 md:!h-10 !rounded-lg">
                    <item.icon size={13} className="text-brand-accent md:hidden" />
                    <item.icon size={18} className="text-brand-accent hidden md:block" />
                  </div>
                  <p className="text-brand-slate text-xs md:text-sm leading-snug md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — negative */}
          <div className="clean-card p-3 md:p-8 border-red-100 hover:border-red-200">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-6">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
              <h3 className="text-sm md:text-lg font-bold text-brand-dark">
                {tr(t.emailMatters.crushing)}
              </h3>
            </div>
            <div className="space-y-2 md:space-y-4">
              {negativeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <item.icon size={13} className="text-red-400 md:hidden" />
                    <item.icon size={18} className="text-red-400 hidden md:block" />
                  </div>
                  <p className="text-brand-slate text-xs md:text-sm leading-snug md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stat */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-3 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="text-lg md:text-2xl font-bold gradient-text">28%</span>
            <span className="text-xs md:text-sm text-brand-gray">
              {tr(t.emailMatters.bottomStat)}
            </span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
