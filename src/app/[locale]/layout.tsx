// Imports
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import CookieBanner from "@/components/CookieBanner";
//-----------------------------

// Metadata
export const metadata: Metadata = {
  title: "Amir T",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <CookieConsentProvider>
          <ThemeProvider>
            <NextIntlClientProvider>
              <Header />
              {children}
              <CookieBanner />
            </NextIntlClientProvider>
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
