"use client";

// Imports
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
//-------------------------------------

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  function cycleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  const icons = { light: Sun, dark: Moon, system: Monitor };
  const Icon = icons[theme as keyof typeof icons] ?? Monitor;

  return (
    <button
      onClick={cycleTheme}
      aria-label="Zmeniť farebný režim"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
