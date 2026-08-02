// Imports
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
//-----------------------------

// Home Page Component
export default function HomePage() {
  const t = useTranslations("home"); // const t = const translate

  return (
    <main className="flex flex-1 items-center justify-center py-20">
      <Container>
        <section className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
            {t("title")}
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              {t("portfolio")}
            </Link>
            <Link
              href="/resume"
              className="rounded-lg border-2 border-slate-900 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
            >
              {t("resume")}
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
