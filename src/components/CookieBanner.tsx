"use client";

// Imports
import { useTranslations } from "next-intl";
import { useCookieConsent } from "@/context/CookieConsentContext";
//---------------------

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const { consent, setConsent } = useCookieConsent();

  if (consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t("message")}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setConsent("declined")}
            className="rounded-md border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-300"
          >
            {t("decline")}
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
