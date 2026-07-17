type Props = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
      <span className="h-6 w-1.5 rounded-full bg-indigo-600" />
      {children}
    </h2>
  );
}
