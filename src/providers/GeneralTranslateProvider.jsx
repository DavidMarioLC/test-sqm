"use client";
import { createContext, useContext, useState } from "react";

const GeneralTranslateContext = createContext();

export function GeneralTranslateProvider({
  children,
  initialTranslations,
  initialLanguage = "es",
}) {
  const [translations, setTranslations] = useState(initialTranslations || null);
  const [language, setLanguage] = useState(initialLanguage);

  return (
    <GeneralTranslateContext.Provider
      value={{
        translations,
        language,
        setTranslations,
        setLanguage,
      }}
    >
      {children}
    </GeneralTranslateContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(GeneralTranslateContext);
  if (!context) {
    throw new Error(
      "useTranslations must be used within a GeneralTranslateProvider",
    );
  }
  return context;
}
