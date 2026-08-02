"use client";

// Imports
import { ThemeProvider as NextThemeProvider } from "next-themes";
//-----------------------------------

// ThemeProvider component
// React 19 varuje pri script tagoch vnútri komponentov.
// Toto varovanie je falošný poplach – next-themes script funguje správne počas SSR.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
