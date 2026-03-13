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

const securityBadges = [
  { icon: ShieldCheck, label: "CASA Verified" },
  { icon: Server, label: "EU & US Data Residency" },
  { icon: Scale, label: "GDPR · CCPA · HIPAA" },
];

const metrics = [
  {
    value: "99%",
    label: "Faster Response",
    desc: "From hours to under 5 minutes",
    icon: Zap,
  },
  {
    value: "28%",
    label: "Time Freed",
    desc: "Your team focuses on what actually matters",
    icon: Clock,
  },
];

export default function ProofSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-xs md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2 md:mb-3">
            Trust & Results
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Trusted by Teams.{" "}
            <span className="gradient-text">Secured by Design.</span>
          </h2>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10">
          {securityBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-green-50 border border-green-100"
            >
              <badge.icon size={14} className="text-green-600 md:hidden" />
              <badge.icon size={16} className="text-green-600 hidden md:block" />
              <span className="text-xs md:text-sm font-medium text-green-800">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-6 md:mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="clean-card p-4 md:p-8 text-center">
              <div className="icon-box !w-10 !h-10 md:!w-12 md:!h-12 !rounded-xl mx-auto mb-3 md:mb-4">
                <m.icon size={18} className="text-brand-accent md:hidden" />
                <m.icon size={22} className="text-brand-accent hidden md:block" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {m.value}
              </div>
              <h3 className="font-bold text-brand-dark text-base md:text-lg mb-1">
                {m.label}
              </h3>
              <p className="text-xs md:text-sm text-brand-gray">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto clean-card p-4 md:p-6 flex items-start gap-3 md:gap-4">
          <div className="flex-shrink-0">
            <Quote size={20} className="text-brand-accent opacity-40 md:hidden" />
            <Quote size={24} className="text-brand-accent opacity-40 hidden md:block" />
          </div>
          <div>
            <p className="text-brand-slate text-sm md:text-base leading-relaxed italic mb-2 md:mb-3">
              &ldquo;Eloquens feels like hiring a full-time assistant without the
              overhead. Our response times dropped from hours to minutes.&rdquo;
            </p>
            <p className="text-sm text-brand-gray font-medium">
              — Head of Customer Success, SaaS Platform (50K+ users)
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
