// Imports
import { Link } from "@/i18n/navigation";
import type { LucideIcon } from "lucide-react";
//-----------------------------

// ProjectCard component
type Props = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  viewLabel: string;
};

export default function ProjectCard({
  slug,
  icon: Icon,
  title,
  description,
  viewLabel,
}: Props) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group flex flex-col rounded-xl border border-slate200 bg-white p-5 transition hover:border-indigo-600"
    >
      <div className="mb-3.5 flex h-10 w 10 items-center justify-center rounded-lg bg-indigo-50">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>
      <p className="mb-1 text-base font_semibold text-slate-900">{title}</p>
      <p className="mb-3 text-sm text-slate-500">{description}</p>
      <span className="mt-auto text-xs font-medium text-indigo-600">
        {viewLabel} →
      </span>
    </Link>
  );
}
