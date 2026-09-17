"use client";

// Imports
import { useTranslations } from "next-intl";
import { useCookieConsent } from "@/context/CookieConsentContext";
//------------------------

type Props = {
  lat: number;
  lon: number;
};

export default function LocationMap({ lat, lon }: Props) {
  const { consent } = useCookieConsent();
  const t = useTranslations("cookies");

  if (consent !== "accepted") {
    return (
      <div className="flex h-64 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {t("mapBlocked")}
      </div>
    );
  }

  const offset = 0.05;
  const bbox = `${lon - offset}%2C${lat - offset}%2C${lon + offset}%2C${lat + offset}`;

  return (
    <iframe
      title="Mapa lokality"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat}%2C${lon}`}
      className="h-64 w-full rounded-lg border border-slate-200 dark:border-slate-800"
      loading="lazy"
    />
  );
}
