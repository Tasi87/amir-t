// Imports
import { NextResponse } from "next/server";
import type { WeatherData } from "@/features/meteo/types";
//-------------------------------

// API route handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const lang = searchParams.get("lang") ?? "en";

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=${lang}`,
  );

  if (!res.ok) {
    return NextResponse.json({ message: "City not found" }, { status: 404 });
  }

  const data = await res.json();

  const weather: WeatherData = {
    city: data.name,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };

  return NextResponse.json(weather);
}
