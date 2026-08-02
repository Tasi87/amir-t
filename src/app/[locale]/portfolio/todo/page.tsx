// Imports
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import TodoList from "@/features/todo/TodoList";
//-----------------------------

export default async function TodoProjectPage() {
  const t = await getTranslations("portfolio");

  return (
    <main className="flex-1 py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToPortfolio")}
          </Link>

          <h1 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
            {t("projects.todo.title")}
          </h1>

          <TodoList />
        </div>
      </Container>
    </main>
  );
}
