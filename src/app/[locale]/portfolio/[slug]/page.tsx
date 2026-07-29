// Imports
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { projects } from "@/lib/projects";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
//-----------------------------

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("portfolio");
  const Icon = project.icon;

  return (
    <main className="flex-1 py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToPortfolio")}
          </Link>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lx bg-indigo-50">
            <Icon className="h-7 w-ý text-indigo-600" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-slate-900">
            {t(`projects.${slug}.title`)}
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            {t(`projects.${slug}.details`)}
          </p>
        </div>
      </Container>
    </main>
  );
}
