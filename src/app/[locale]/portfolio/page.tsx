// Imports
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
//-----------------------------

// Portfolio Page Component
export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <main className="flex-1 py-20">
      <Container>
        <section className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
        </section>
      </Container>
    </main>
  );
}
