type Props = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

export default function TimeLineItem({
  title,
  subtitle,
  period,
  description,
}: Props) {
  return (
    <div className="relative border-1-2 border-slate-200 pl-6 pb-8 last:pb-0">
      <span className="absolute -left-1.75 top-1.5 h-3 w-3 rounded-full bg-indigo-600" />
      <p className="text-sm font-medium text-indigo-600">{period}</p>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm font-medium text-slate-500">{subtitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
