"use client";
// Imports
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
//-----------------------------

// Header Component
export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("common");
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <nav className="flex items-center justify-between gap-y-3 py-4 max-[430px]:flex-col max-[430px]:justify-center">
          <span className="order-1 text-lg font-semibold text-slate-900 transition dark:text-slate-100">
            Tahssain Amir
          </span>
          {pathname !== "/" && (
            <Link
              href="/"
              className="order-2 flex w-auto items-center justify-start gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  d="M3 9.5 12 3l9 6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 10v10h14V10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t("backHome")}
            </Link>
          )}
          <div className="order-3 flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
