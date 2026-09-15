"use client";

// Imports
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { WeatherData } from "./types";
import Image from "next/image";
import LocationMap from "@/components/LocationMap";
//-------------------------------

// WeatherWidget component
export default function WeatherWidget() {
  const t = useTranslations("portfolio.projects.meteo");
  const locale = useLocale();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("meteo-history");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHistory(JSON.parse(stored));
    }
  }, []);

  async function search(cityName: string) {
    setLoading(true);
    setError(false);
    setWeather(null);

    const res = await fetch(
      `/api/weather?city=${encodeURIComponent(cityName)}&lang=${locale}`,
    );

    if (!res.ok) {
      setError(true);
      setLoading(false);
      return;
    }

    const data: WeatherData = await res.json();
    setWeather({ ...data, city: cityName });
    addToHistory(cityName);
    setLoading(false);
    setCity("");
  }

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    if (!city.trim()) return;
    search(city.trim());
  }

  function addToHistory(cityName: string) {
    setHistory((prev) => {
      const withoutDuplicate = prev.filter(
        (c) => c.toLocaleLowerCase() !== cityName.toLocaleLowerCase(),
      );
      const updated = [cityName, ...withoutDuplicate].slice(0, 5);
      localStorage.setItem("meteo-history", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <div>
      {history.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {history.map((item) => (
            <button
              key={item}
              onClick={() => search(item)}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              {item}
            </button>
          ))}
        </div>
      )}
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
        <div className="flex flex-wrap gap-4 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
          <div className="flex shrink-0 items-center gap-4">
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
          <div className="min-w-70 flex-1 max-[550px]:w-full">
            <LocationMap lat={weather.lat} lon={weather.lon} />
          </div>
        </div>
      )}
    </div>
  );
}
