"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { langLabels, type Lang } from "../lib/translations";

const langs: Lang[] = ["en", "it", "de", "pt", "cs"];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed top-3 right-3 md:top-4 md:right-4 z-[60]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-xs md:text-sm font-medium text-brand-dark"
      >
        <Globe size={14} className="text-brand-accent" />
        {langLabels[lang]}
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden min-w-[80px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`w-full px-3 py-2 text-xs md:text-sm font-medium text-left transition-colors ${
                l === lang
                  ? "bg-blue-50 text-brand-accent"
                  : "text-brand-dark hover:bg-gray-50"
              }`}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
