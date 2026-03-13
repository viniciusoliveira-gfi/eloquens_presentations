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

export default function EmailMattersSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full">
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            The Paradox
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            When It Matters, It Happens Over{" "}
            <span className="gradient-text">Email</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-2 md:gap-8 max-w-5xl mx-auto mb-3 md:mb-10">
          {/* Left — positive */}
          <div className="clean-card p-3 md:p-8">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-6">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-accent" />
              <h3 className="text-sm md:text-lg font-bold text-brand-dark">
                The Most Important Business Channel
              </h3>
            </div>
            <div className="space-y-2 md:space-y-4">
              {[
                { icon: Handshake, text: "Sales conversations that close deals" },
                { icon: HeartHandshake, text: "Support that keeps customers loyal" },
                { icon: FileSignature, text: "Contracts and partnerships" },
                { icon: Landmark, text: "Important decisions" },
              ].map((item, i) => (
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
                But It&apos;s Crushing Your Team
              </h3>
            </div>
            <div className="space-y-2 md:space-y-4">
              {[
                { icon: Inbox, text: "Endless inbox, constant context-switching" },
                { icon: Clock, text: "Hours spent reading, sorting, replying" },
                { icon: EyeOff, text: "Important emails buried under noise" },
                { icon: Brain, text: "Your team's best hours, gone" },
              ].map((item, i) => (
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
              of the workday spent on email — and still can&apos;t keep up.
            </span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
