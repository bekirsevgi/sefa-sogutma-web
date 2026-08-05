export default function HeroStats() {
  const stats = [
    {
      value: "20+",
      label: "Yıllık Tecrübe",
    },
    {
      value: "1000+",
      label: "Üretilen Kapak",
    },
    {
      value: "81 İl",
      label: "Türkiye Geneli",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-3xl font-black text-blue-700">
            {item.value}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}