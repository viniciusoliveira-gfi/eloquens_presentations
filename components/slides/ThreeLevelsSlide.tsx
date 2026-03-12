"use client";

import { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { MessageSquareText, PenLine, BrainCircuit } from "lucide-react";

const levels = [
  {
    level: 1,
    icon: MessageSquareText,
    title: "Templated Auto-Replies",
    era: "2000s",
    desc: "Canned responses. No personalization. Customers feel ignored and relationships deteriorate.",
    color: {
      bg: "bg-red-50",
      border: "border-red-300",
      ring: "ring-red-200",
      iconBg: "bg-red-500",
      eraBg: "bg-red-500",
      text: "text-red-700",
      label: "text-red-400",
      shadow: "shadow-red-100",
    },
  },
  {
    level: 2,
    icon: PenLine,
    title: "AI Draft Generation",
    era: "2023\u201324",
    desc: "Copilot, Gemini, HubSpot AI. They draft, you review, you rewrite. Still manual. Still slow.",
    color: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      ring: "ring-amber-200",
      iconBg: "bg-amber-500",
      eraBg: "bg-amber-500",
      text: "text-amber-700",
      label: "text-amber-400",
      shadow: "shadow-amber-100",
    },
  },
  {
    level: 3,
    icon: BrainCircuit,
    title: "Autonomous Email Agents",
    era: "Eloquens",
    desc: "Reads, understands, replies, takes action. End-to-end resolutions.",
    color: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      ring: "ring-emerald-200",
      iconBg: "bg-emerald-600",
      eraBg: "bg-emerald-600",
      text: "text-emerald-700",
      label: "text-emerald-500",
      shadow: "shadow-emerald-100",
    },
  },
];

export default function ThreeLevelsSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (level: number) => {
    setSelected(selected === level ? null : level);
  };

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
            AI is the Answer, but
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Draft-Only AI Is{" "}
            <span className="gradient-text">Not Enough.</span>
          </h2>
        </div>

        {/* Three interactive tiers */}
        <div className="space-y-4">
          {levels.map((item) => {
            const isSelected = selected === item.level;
            const isDimmed = selected !== null && !isSelected;

            return (
              <div
                key={item.level}
                onClick={() => handleClick(item.level)}
                className={`
                  relative rounded-2xl p-6 md:p-8 flex items-center gap-6
                  cursor-pointer select-none
                  transition-all duration-300 ease-out
                  ${
                    isSelected
                      ? `${item.color.bg} border-2 ${item.color.border} shadow-lg ${item.color.shadow} scale-[1.02]`
                      : isDimmed
                      ? "bg-gray-50 border border-gray-200 opacity-40 scale-[0.98]"
                      : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }
                `}
              >
                {/* Icon badge */}
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                    transition-all duration-300
                    ${
                      isSelected
                        ? `${item.color.iconBg} text-white shadow-md ${item.color.shadow}`
                        : isDimmed
                        ? "bg-gray-200 text-gray-400"
                        : "bg-gray-200 text-brand-gray"
                    }
                  `}
                >
                  <item.icon size={22} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className={`
                        text-lg md:text-xl font-bold transition-colors duration-300
                        ${
                          isSelected
                            ? "text-brand-dark"
                            : isDimmed
                            ? "text-gray-400"
                            : "text-brand-dark"
                        }
                      `}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`
                        px-2.5 py-0.5 rounded-full text-xs font-semibold
                        transition-all duration-300
                        ${
                          isSelected
                            ? `${item.color.eraBg} text-white`
                            : isDimmed
                            ? "bg-gray-200 text-gray-400"
                            : "bg-gray-200 text-brand-gray"
                        }
                      `}
                    >
                      {item.era}
                    </span>
                  </div>
                  <p
                    className={`
                      text-sm leading-relaxed transition-colors duration-300
                      ${
                        isSelected
                          ? "text-brand-slate"
                          : isDimmed
                          ? "text-gray-400"
                          : "text-brand-gray"
                      }
                    `}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Level label on right */}
                <div className="hidden md:flex flex-shrink-0 items-center">
                  <span
                    className={`
                      text-sm font-bold transition-colors duration-300
                      ${
                        isSelected
                          ? item.color.label
                          : isDimmed
                          ? "text-gray-300"
                          : "text-gray-300"
                      }
                    `}
                  >
                    Level {item.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom hint */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400 tracking-wide">
            Click each level to explore
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
