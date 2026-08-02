// Imports
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/projects";
//-----------------------------

// Portfolio Page Component
export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <main className="flex-1 py-16">
      <Container>
        <section className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl dark:text-slate-100">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              icon={project.icon}
              title={t(`projects.${project.slug}.title`)}
              description={t(`projects.${project.slug}.description`)}
              viewLabel={t("viewProject")}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
