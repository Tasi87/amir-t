"use client";
// Imports
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
//-----------------------------

// Header Component
export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("common");
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <nav className="flex items-center justify-between gap-y-3 py-4 max-[415px]:flex-col max-[415px]:justify-center">
          <span className="order-1 text-lg font-semibold text-slate-900">
            Tahssain Amir
          </span>
          {pathname !== "/" && (
            <Link
              href="/"
              className="order-2 flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
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
          <div className="order-3">
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
}
