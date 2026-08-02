type Props = {
  children: React.ReactNode;
};

export default function SkillBadge({ children }: Props) {
  return (
    <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
      {children}
    </span>
  );
}
