"use client";

import SlideWrapper from "../SlideWrapper";
import {
  Clock,
  Timer,
  TrendingDown,
  Users,
  DollarSign,
} from "lucide-react";

export default function OldPlaybookSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
            The Reality
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight">
            Every Business Must Do More with{" "}
            <span className="gradient-text">Less.</span>
          </h2>
        </div>

        {/* Row 1 — Three stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {/* Customers expect < 10 min */}
          <div className="clean-card p-5 border-blue-100 hover:border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-brand-accent" />
              </div>
              <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                Customers Expect
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">
              &lt; 10 min
            </p>
            <p className="text-sm text-brand-gray leading-relaxed">
              90% rate an immediate response as essential when they reach out.
            </p>
          </div>

          {/* Businesses deliver 12+ hours */}
          <div className="clean-card p-5 border-red-100 hover:border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                <Timer size={18} className="text-red-400" />
              </div>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                Businesses Deliver
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">
              12+ hours
            </p>
            <p className="text-sm text-brand-gray leading-relaxed">
              The average email sits over half a day before anyone replies.
            </p>
          </div>

          {/* 58% churn */}
          <div className="clean-card p-5 border-red-100 hover:border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                <TrendingDown size={18} className="text-red-400" />
              </div>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                The Result
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">
              58%
            </p>
            <p className="text-sm text-brand-gray leading-relaxed">
              of consumers switch brands after poor service. Slow replies cost you customers.
            </p>
          </div>
        </div>

        {/* Row 2 — Two consequence cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Teams maxed out */}
          <div className="clean-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                <Users size={17} className="text-amber-500" />
              </div>
              <span className="text-sm font-bold text-brand-dark">
                Teams Are Maxed Out
              </span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              Email already demands too much time and attention from your team.
              The volume keeps growing — the capacity doesn&apos;t.
            </p>
          </div>

          {/* Can't hire your way out */}
          <div className="clean-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                <DollarSign size={17} className="text-amber-500" />
              </div>
              <span className="text-sm font-bold text-brand-dark">
                You Can&apos;t Hire Your Way Out
              </span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              Additional headcount is expensive and hard to justify.
              Every team is being asked to do more with less.
            </p>
          </div>
        </div>

        {/* Bottom closing statement */}
        <div className="text-center pt-2">
          <div className="inline-block max-w-2xl">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-5 opacity-40" />
            <p className="text-sm md:text-base lg:text-lg text-brand-slate leading-relaxed">
              The old playbook doesn&apos;t work.{" "}
              <span className="font-semibold gradient-text">
                Businesses need something fundamentally different.
              </span>
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
