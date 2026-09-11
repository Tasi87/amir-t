"use client";

// Imports
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { WeatherData } from "./types";
import Image from "next/image";
//-------------------------------

// WeatherWidget component
export default function WeatherWidget() {
  const t = useTranslations("portfolio.projects.meteo");
  const locale = useLocale();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    if (!city.trim()) return;

    const query = city.trim();
    setLoading(true);
    setError(false);
    setWeather(null);

    const res = await fetch(
      `/api/weather?city=${encodeURIComponent(query)}&lang=${locale}`,
    );

    if (!res.ok) {
      setError(true);
      setLoading(false);
      return;
    }

    const data: WeatherData = await res.json();
    setWeather({ ...data, city: query });
    setLoading(false);
    setCity("");
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={t("placeholder")}
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          {t("search")}
        </button>
      </form>
      {loading && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t("loading")}
        </p>
      )}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {t("notFound")}
        </p>
      )}
      {weather && (
        <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            width={64}
            height={64}
          />
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {weather.city}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {weather.description}
            </p>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {weather.temperature}°C
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
