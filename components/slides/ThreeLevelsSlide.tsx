"use client";

import { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { MessageSquareText, PenLine, BrainCircuit } from "lucide-react";
import { useTr } from "../../lib/LanguageContext";

export default function ThreeLevelsSlide({
  isActive,
}: {
  isActive: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(1);
  const { tr, t } = useTr();

  const levels = [
    {
      level: 1,
      icon: MessageSquareText,
      title: tr(t.threeLevels.level1Title),
      era: "2000s",
      desc: tr(t.threeLevels.level1Desc),
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
      title: tr(t.threeLevels.level2Title),
      era: "2023\u201324",
      desc: tr(t.threeLevels.level2Desc),
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
      title: tr(t.threeLevels.level3Title),
      era: "Eloquens\u00ae",
      desc: tr(t.threeLevels.level3Desc),
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

  const handleClick = (level: number) => {
    setSelected(selected === level ? null : level);
  };

  return (
    <SlideWrapper isActive={isActive} variant="soft">
      <div className="w-full max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-3 md:mb-10">
          <p className="text-[10px] md:text-sm font-semibold text-brand-accent uppercase tracking-wider mb-1 md:mb-3">
            {tr(t.threeLevels.tag)}
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            {tr(t.threeLevels.titleStart)}{" "}
            <span className="gradient-text">{tr(t.threeLevels.titleHighlight)}</span>
          </h2>
        </div>

        {/* Three interactive tiers */}
        <div className="space-y-2 md:space-y-4">
          {levels.map((item) => {
            const isSelected = selected === item.level;
            const isDimmed = selected !== null && !isSelected;

            return (
              <div
                key={item.level}
                onClick={() => handleClick(item.level)}
                className={`
                  relative rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 lg:p-8 flex items-center gap-2.5 sm:gap-4 md:gap-6
                  cursor-pointer select-none
                  transition-all duration-300 ease-out
                  ${
                    isSelected
                      ? `${item.color.bg} border-2 ${item.color.border} shadow-lg ${item.color.shadow} scale-[1.02]`
                      : isDimmed
                      ? "bg-gray-50 border border-gray-200 opacity-40 scale-[0.98] hover:opacity-60 hover:border-gray-300 hover:shadow-sm"
                      : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }
                `}
              >
                {/* Icon badge */}
                <div
                  className={`
                    flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center
                    transition-all duration-300
                    ${
                      isSelected
                        ? `${item.color.iconBg} text-white shadow-md ${item.color.shadow}`
                        : isDimmed
                        ? "bg-gray-300 text-gray-500"
                        : "bg-gray-200 text-brand-gray"
                    }
                  `}
                >
                  <item.icon size={14} className="md:hidden" />
                  <item.icon size={22} className="hidden md:block" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 mb-0.5 md:mb-1">
                    <h3
                      className={`
                        text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors duration-300
                        ${
                          isSelected
                            ? "text-brand-dark"
                            : isDimmed
                            ? "text-gray-500"
                            : "text-brand-dark"
                        }
                      `}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`
                        px-1.5 py-0.5 md:px-2.5 rounded-full text-[10px] md:text-sm font-semibold
                        transition-all duration-300
                        ${
                          isSelected
                            ? `${item.color.eraBg} text-white`
                            : isDimmed
                            ? "bg-gray-200 text-gray-500"
                            : "bg-gray-200 text-brand-gray"
                        }
                      `}
                    >
                      {item.era}
                    </span>
                  </div>
                  <p
                    className={`
                      text-[10px] md:text-sm leading-snug md:leading-relaxed transition-colors duration-300
                      ${
                        isSelected
                          ? "text-brand-slate"
                          : isDimmed
                          ? "text-gray-500"
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
                          ? "text-gray-400"
                          : "text-gray-300"
                      }
                    `}
                  >
                    {tr(t.threeLevels.level)} {item.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom hint */}
        <div className="text-center mt-3 md:mt-6">
          <p className="text-[10px] md:text-xs text-gray-400 tracking-wide">
            {tr(t.threeLevels.hint)}
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
