type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
  light?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`font-semibold uppercase tracking-[0.25em] ${
          light ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {badge}
      </p>

      <h2
        className={`mt-5 text-4xl font-black leading-tight md:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-8 text-lg leading-8 md:text-xl md:leading-9 ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}