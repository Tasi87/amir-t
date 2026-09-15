type Props = {
  lat: number;
  lon: number;
};

export default function LocationMap({ lat, lon }: Props) {
  const offset = 0.05;
  const bbox = `${lon - offset}%2C${lat - offset}%2C${lon + offset}%2C${lat + offset}`;

  return (
    <iframe
      title="Mapa lokality"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat}%2C${lon}`}
      className="h-64 w-full rounded-lg border border-slate-200 dark:border-slate-800"
      loading="lazy"
    />
  );
}
