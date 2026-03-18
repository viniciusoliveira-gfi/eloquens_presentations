"use client";

import { useState, useCallback, useEffect } from "react";
import SlideWrapper from "../SlideWrapper";
import {
  Mail,
  Filter,
  BookOpen,
  GitBranch,
  PenTool,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Clock,
  TrendingUp,
  SmilePlus,
  Database,
  Search,
  ArrowUpRight,
  Send as SendIcon,
  XCircle,
  UserCheck,
  Sparkles,
} from "lucide-react";
import { useTr } from "../../lib/LanguageContext";
import type { Lang } from "../../lib/translations";

/* ──────────────────── Step 1 ──────────────────── */
function EmailReceivedPanel({ tr, t }: { tr: (e: Record<Lang, string>) => string; t: any }) {
  return (
    <div className="w-full max-w-lg mx-auto px-1 md:px-0">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        {/* email header bar */}
        <div className="flex items-center justify-between px-3 py-2 md:px-5 md:py-3 border-b border-gray-100 bg-gray-50/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-xs md:text-sm font-bold text-brand-accent">
              BC
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-brand-dark">Brett Coleman</p>
              <p className="text-xs md:text-sm text-brand-gray">Exinda · Account Manager</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] md:text-sm font-bold uppercase tracking-wide">
            {tr(t.process.newBadge)}
          </span>
        </div>
        {/* subject */}
        <div className="px-3 py-2 md:px-5 md:py-3 border-b border-gray-50">
          <p className="text-xs md:text-sm font-semibold text-brand-dark leading-snug">
            RE: Exinda — Renewal Status for 2024-2025 Support Contract
          </p>
        </div>
        {/* body */}
        <div className="px-3 py-3 md:px-5 md:py-4 text-xs md:text-sm text-brand-slate leading-snug md:leading-relaxed space-y-2">
          <p>Hi Team,</p>
          <p>
            Following up on our last conversation regarding the 2024-2025 renewal.
            We&apos;d like to move forward with the Enterprise tier, but need
            clarification on the updated pricing for 150+ seats.
          </p>
          <p>
            Could we schedule a call this Thursday or Friday to finalize?
          </p>
          <p className="text-brand-gray">Best regards,<br />Brett Coleman</p>
        </div>
        {/* bottom bar */}
        <div className="px-3 py-2 md:px-5 md:py-3 border-t border-gray-100 bg-gray-50/40 flex items-center gap-3 text-xs md:text-sm text-brand-gray">
          <Clock size={12} /> <span>{tr(t.process.received)}</span>
          <span className="w-px h-3 bg-gray-200" />
          <Mail size={12} /> <span>brett@exinda.com</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Step 2 ──────────────────── */
function SmartFiltersPanel({ tr, t }: { tr: (e: Record<Lang, string>) => string; t: any }) {
  return (
    <div className="w-full max-w-lg mx-auto px-1 md:px-0">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="px-3 py-2.5 md:px-5 md:py-4 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs md:text-sm font-semibold text-brand-dark flex items-center gap-2">
            <Sparkles size={16} className="text-brand-accent" />
            {tr(t.process.emailAnalysis)}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-sm font-bold uppercase tracking-wide">
            {tr(t.process.approvedForResponse)}
          </span>
        </div>
        <div className="px-3 py-2.5 md:px-5 md:py-5 space-y-4">
          {[
            {
              label: tr(t.process.intent),
              value: tr(t.process.followUpScheduling),
              icon: TrendingUp,
              color: "text-brand-accent",
              bg: "bg-blue-50",
            },
            {
              label: tr(t.process.urgency),
              value: tr(t.process.medium),
              icon: Clock,
              color: "text-yellow-600",
              bg: "bg-yellow-50",
            },
            {
              label: tr(t.process.sentiment),
              value: tr(t.process.positive),
              icon: SmilePlus,
              color: "text-green-600",
              bg: "bg-green-50",
            },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-[10px] md:text-sm text-brand-gray uppercase tracking-wide font-medium">
                {row.label}
              </span>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${row.bg}`}>
                <row.icon size={13} className={row.color} />
                <span className={`text-xs md:text-sm font-semibold ${row.color}`}>{row.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 py-2 md:px-5 md:py-3 border-t border-gray-100 bg-gray-50/40">
          <p className="text-xs md:text-sm text-brand-gray italic">
            &ldquo;{tr(t.process.analysisQuote)}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Step 3 ──────────────────── */
function KnowledgeBasePanel({ tr, t }: { tr: (e: Record<Lang, string>) => string; t: any }) {
  const sources = [
    { name: "Renewal Pricing 2024-2025", match: 96 },
    { name: "Contract Terms & SLA", match: 89 },
    { name: "Account History: Exinda", match: 84 },
  ];
  return (
    <div className="w-full max-w-lg mx-auto px-1 md:px-0">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="px-3 py-2.5 md:px-5 md:py-4 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs md:text-sm font-semibold text-brand-dark flex items-center gap-2">
            <Database size={16} className="text-brand-accent" />
            {tr(t.process.knowledgeSearch)}
          </span>
          <Search size={16} className="text-brand-gray" />
        </div>
        {/* summary stats */}
        <div className="px-3 py-2.5 md:px-5 md:py-4 flex gap-6 border-b border-gray-100">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold gradient-text">9</p>
            <p className="text-xs md:text-sm text-brand-gray uppercase tracking-wide">
              {tr(t.process.sourcesSearched)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold gradient-text">8</p>
            <p className="text-xs md:text-sm text-brand-gray uppercase tracking-wide">
              {tr(t.process.matchesFound)}
            </p>
          </div>
        </div>
        {/* top matches */}
        <div className="px-3 py-2.5 md:px-5 md:py-4 space-y-3">
          <p className="text-[10px] md:text-sm text-brand-gray uppercase tracking-wide font-medium mb-1">
            {tr(t.process.topMatches)}
          </p>
          {sources.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-brand-accent" />
                <span className="text-xs md:text-sm text-brand-dark font-medium">
                  {s.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-16 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-accent"
                    style={{ width: `${s.match}%` }}
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-brand-accent">
                  {s.match}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Step 4 ──────────────────── */
function RoutingPanel({ tr, t }: { tr: (e: Record<Lang, string>) => string; t: any }) {
  const options = [
    {
      label: tr(t.process.escalate),
      icon: ArrowUpRight,
      selected: false,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
    {
      label: tr(t.process.handover),
      icon: UserCheck,
      selected: false,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      label: tr(t.process.reply),
      icon: SendIcon,
      selected: true,
      color: "text-brand-accent",
      bg: "bg-blue-50",
      border: "border-brand-accent",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-1 md:px-0">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="px-3 py-2.5 md:px-5 md:py-4 border-b border-gray-100">
          <span className="text-xs md:text-sm font-semibold text-brand-dark flex items-center gap-2">
            <GitBranch size={16} className="text-brand-accent" />
            {tr(t.process.routingDecision)}
          </span>
        </div>
        {/* options */}
        <div className="px-3 py-2.5 md:px-5 md:py-5 flex gap-3">
          {options.map((opt, i) => (
            <button
              key={i}
              className={`flex-1 flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-4 rounded-lg md:rounded-xl border-2 transition-all ${
                opt.selected
                  ? `${opt.bg} ${opt.border} shadow-md`
                  : "bg-white border-gray-100 opacity-60"
              }`}
            >
              <opt.icon
                size={22}
                className={opt.selected ? opt.color : "text-gray-400"}
              />
              <span
                className={`text-xs md:text-sm font-semibold ${
                  opt.selected ? opt.color : "text-gray-400"
                }`}
              >
                {opt.label}
              </span>
              {opt.selected && (
                <CheckCircle2 size={14} className="text-brand-accent" />
              )}
            </button>
          ))}
        </div>
        {/* details */}
        <div className="px-3 py-2.5 md:px-5 md:py-4 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] md:text-sm text-brand-gray uppercase tracking-wide font-medium">
              CC
            </span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-brand-dark">
              <UserCheck size={13} className="text-brand-accent" />
              Sales Team — Brett&apos;s Account Manager
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] md:text-sm text-brand-gray uppercase tracking-wide font-medium">
              {tr(t.process.confidence)}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full rounded-full bg-green-500 w-[94%]" />
              </div>
              <span className="text-xs md:text-sm font-bold text-green-600">94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Step 5 ──────────────────── */
function ResponsePanel({ tr, t }: { tr: (e: Record<Lang, string>) => string; t: any }) {
  return (
    <div className="w-full max-w-lg mx-auto px-1 md:px-0">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="px-3 py-2 md:px-5 md:py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/40">
          <span className="text-xs md:text-sm font-semibold text-brand-dark flex items-center gap-2">
            <PenTool size={16} className="text-brand-accent" />
            {tr(t.process.draftReply)}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] md:text-sm font-bold uppercase tracking-wide flex items-center gap-1">
            <Sparkles size={10} />
            MyVoice®
          </span>
        </div>
        {/* meta */}
        <div className="px-3 py-2 md:px-5 md:py-3 border-b border-gray-50 space-y-1.5 text-xs md:text-sm text-brand-gray">
          <p>
            <span className="font-medium text-brand-slate text-xs md:text-sm">{tr(t.process.to)}</span> Brett
            Coleman &lt;brett@exinda.com&gt;
          </p>
          <p>
            <span className="font-medium text-brand-slate text-xs md:text-sm">{tr(t.process.subject)}</span> RE:
            Exinda — Renewal Status for 2024-2025 Support Contract
          </p>
        </div>
        {/* body */}
        <div className="px-3 py-3 md:px-5 md:py-4 text-xs md:text-sm text-brand-slate leading-snug md:leading-relaxed space-y-2">
          <p>Hi Brett,</p>
          <p>
            Thank you for getting back to us — great to hear you&apos;d like to move
            forward with the Enterprise tier!
          </p>
          <p>
            I&apos;ve attached the updated pricing sheet for 150+ seats. You&apos;ll see
            we&apos;ve included volume discounts that should align well with your
            team&apos;s growth plan.
          </p>
          <p>
            Thursday at 2 PM EST works perfectly. I&apos;ll send a calendar invite
            shortly. If Friday is better, just let me know and I&apos;ll adjust.
          </p>
          <p>
            Looking forward to finalizing this together.
          </p>
          <p className="text-brand-gray">Best,<br />The Exinda Sales Team</p>
        </div>
        {/* footer */}
        <div className="px-3 py-2 md:px-5 md:py-3 border-t border-gray-100 bg-gray-50/40 flex items-center justify-between">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-xs md:text-sm font-medium text-brand-accent">
            {tr(t.process.toneLabel)}
          </span>
          <button className="flex items-center gap-1 md:gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-accent text-white text-xs md:text-sm font-semibold shadow-sm">
            <SendIcon size={12} />
            {tr(t.process.send)}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════ */
export default function ProcessSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const { tr, t } = useTr();

  const steps = [
    { id: 1, label: tr(t.process.step1), icon: Mail },
    { id: 2, label: tr(t.process.step2), icon: Filter },
    { id: 3, label: tr(t.process.step3), icon: BookOpen },
    { id: 4, label: tr(t.process.step4), icon: GitBranch },
    { id: 5, label: tr(t.process.step5), icon: PenTool },
  ];

  const panels = [
    () => <EmailReceivedPanel tr={tr} t={t} />,
    () => <SmartFiltersPanel tr={tr} t={t} />,
    () => <KnowledgeBasePanel tr={tr} t={t} />,
    () => <RoutingPanel tr={tr} t={t} />,
    () => <ResponsePanel tr={tr} t={t} />,
  ];

  // Reset to step 0 every time slide becomes active
  useEffect(() => {
    if (isActive) setActiveStep(0);
  }, [isActive]);

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeStep < steps.length - 1) setActiveStep((s) => s + 1);
    },
    [activeStep, steps.length]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeStep > 0) setActiveStep((s) => s - 1);
    },
    [activeStep]
  );

  return (
    <SlideWrapper isActive={isActive} variant="white">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-full justify-center py-4 md:py-10">
        {/* Header */}
        <div className="text-center mb-2 md:mb-6">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1">
            {tr(t.process.tag)}
          </p>
          <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-brand-dark">
            {tr(t.process.titleStart)}{" "}
            <span className="gradient-text">{tr(t.process.titleHighlight)}</span>
          </h2>
        </div>

        {/* ─── Step progress bar ─── */}
        <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-2 md:mb-8">
          {steps.map((step, i) => {
            const isCompleted = i < activeStep;
            const isCurrent = i === activeStep;
            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStep(i);
                  }}
                  className={`flex items-center gap-1 md:gap-1.5 px-2 py-1.5 md:px-3 md:py-2 rounded-full text-[10px] md:text-sm font-semibold transition-all ${
                    isCurrent
                      ? "bg-brand-accent text-white shadow-md shadow-blue-200"
                      : isCompleted
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-gray-100 text-brand-gray"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={13} />
                  ) : (
                    <step.icon size={13} />
                  )}
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{step.id}</span>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`w-3 md:w-6 h-0.5 mx-0.5 rounded-full transition-colors ${
                      i < activeStep ? "bg-green-300" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Step label ─── */}
        <div className="text-center mb-1.5 md:mb-4">
          <span className="inline-flex items-center gap-1.5 md:gap-2 text-brand-gray text-[10px] md:text-sm">
            <span className="number-badge !w-5 !h-5 md:!w-7 md:!h-7 !text-[9px] md:!text-[11px]">
              {activeStep + 1}
            </span>
            <span className="font-semibold text-brand-dark">
              {steps[activeStep].label}
            </span>
          </span>
        </div>

        {/* ─── Active panel ─── */}
        <div className="flex-1 flex items-center justify-center relative min-h-[240px] md:min-h-[340px]">
          <div
            key={activeStep}
            className="w-full animate-fadeSlide"
          >
            {panels[activeStep]()}
          </div>
        </div>

        {/* ─── Navigation buttons ─── */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-6">
          <button
            onClick={goPrev}
            disabled={activeStep === 0}
            className={`flex items-center gap-1 md:gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeStep === 0
                ? "opacity-30 cursor-not-allowed bg-gray-100 text-brand-gray"
                : "bg-white text-brand-dark border border-gray-200 hover:border-brand-accent hover:text-brand-accent shadow-sm"
            }`}
          >
            <ChevronLeft size={14} className="md:hidden" />
            <ChevronLeft size={16} className="hidden md:block" />
            {tr(t.process.previous)}
          </button>

          <span className="text-xs md:text-sm text-brand-gray font-medium px-1 md:px-2">
            {activeStep + 1} / {steps.length}
          </span>

          <button
            onClick={goNext}
            disabled={activeStep === steps.length - 1}
            className={`flex items-center gap-1 md:gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeStep === steps.length - 1
                ? "opacity-30 cursor-not-allowed bg-gray-100 text-brand-gray"
                : "bg-brand-accent text-white hover:bg-brand-deep shadow-md shadow-blue-200"
            }`}
          >
            {tr(t.process.nextStep)}
            <ChevronRight size={14} className="md:hidden" />
            <ChevronRight size={16} className="hidden md:block" />
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
}
