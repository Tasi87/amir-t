"use client";

// Imports
import { createContext, useContext, useEffect, useState } from "react";
//---------------------

type Consent = "accepted" | "declined" | null;

type ContextValue = {
  consent: Consent;
  setConsent: (value: Consent) => void;
};

const CookieConsentContext = createContext<ContextValue | null>(null);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsentState] = useState<Consent>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setConsentState(stored);
  }, []);

  function setConsent(value: Consent) {
    setConsentState(value);
    if (value) localStorage.setItem("cookie-consent", value);
  }

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent musí byť použité vnútri CookieConsentProvider",
    );
  }
  return context;
}
