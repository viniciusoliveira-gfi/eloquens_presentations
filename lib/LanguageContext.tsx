"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Lang } from "./translations";
import translations from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Helper to extract current language string from a translation entry */
export function useTr() {
  const { lang, t } = useContext(LanguageContext);
  const tr = useCallback(
    (entry: Record<Lang, string>) => entry[lang],
    [lang]
  );
  return { tr, t, lang };
}
