// Imports
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import SectionHeading from "@/components/resume/SectionHeading";
import SkillBadge from "@/components/resume/SkillBadge";
import TimelineItem from "@/components/resume/TimeLineItem";
import Image from "next/image";
//-----------------------------

// Resume Page Component
export default function ResumePage() {
  const t = useTranslations("resume");

  return (
    <main className="flex-1 py-16">
      <Container>
        <section className="mb-16 flex flex-col items-center gap-8 border-b border-slate-200 pb-12 text-center sm:flex-row sm:text-left">
          <Image
            src="/img/Tasi-biela.jpeg"
            alt="Tahssain Amir"
            width={128}
            height={128}
            priority
            className="h-32 w-32 shrink-0 rounded-full object-cover shadow-md"
          />
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("greeting")}
            </p>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              {t("name")}
            </h1>
            <p className="mt-3 text-lg text-slate-500">{t("role")}</p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <aside className="space-y-10 lg:col-span-1">
            <div>
              <SectionHeading>{t("aboutTitle")}</SectionHeading>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("about")}
              </p>
            </div>

            <div>
              <SectionHeading>{t("contactTitle")}</SectionHeading>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>{t("contactEmail")}</li>
                <li>{t("contactLocation")}</li>
              </ul>
            </div>

            <div>
              <SectionHeading>{t("skillsTitle")}</SectionHeading>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>JavaScript</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>Tailwind CSS</SkillBadge>
                <SkillBadge>Bootstrap</SkillBadge>
                <SkillBadge>HTML</SkillBadge>
                <SkillBadge>CSS</SkillBadge>
                <SkillBadge>GitHub</SkillBadge>
              </div>
            </div>

            <div>
              <SectionHeading>{t("languagesTitle")}</SectionHeading>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>{t("languageSlovak")}</li>
                <li>{t("languageEnglish")}</li>
                <li>{t("languageGerman")}</li>
              </ul>
            </div>
          </aside>

          <div className="space-y-12 lg:col-span-2">
            <div>
              <SectionHeading>{t("experienceTitle")}</SectionHeading>
              <TimelineItem
                period={t("exp1Period")}
                title={t("exp1Title")}
                subtitle={t("exp1Subtitle")}
                description={t("exp1Description")}
              />
              <TimelineItem
                period={t("exp2Period")}
                title={t("exp2Title")}
                subtitle={t("exp2Subtitle")}
                description={t("exp2Description")}
              />
            </div>

            <div>
              <SectionHeading>{t("educationTitle")}</SectionHeading>
              <TimelineItem
                period={t("edu1Period")}
                title={t("edu1Title")}
                subtitle={t("edu1Subtitle")}
                description={t("edu1Description")}
              />
              <TimelineItem
                period={t("edu2Period")}
                title={t("edu2Title")}
                subtitle={t("edu2Subtitle")}
                description={t("edu2Description")}
              />
              <TimelineItem
                period={t("edu3Period")}
                title={t("edu3Title")}
                subtitle={t("edu3Subtitle")}
                description={t("edu3Description")}
              />
              <TimelineItem
                period={t("edu4Period")}
                title={t("edu4Title")}
                subtitle={t("edu4Subtitle")}
                description={t("edu4Description")}
              />
              <TimelineItem
                period={t("edu5Period")}
                title={t("edu5Title")}
                subtitle={t("edu5Subtitle")}
                description={t("edu5Description")}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
