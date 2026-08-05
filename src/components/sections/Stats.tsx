import Container from "@/components/ui/Container";

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
    value: "%100",
    label: "Özel Ölçü Üretim",
  },
  {
    value: "7/24",
    label: "Destek",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-6xl font-extrabold">
                {item.value}
              </h3>

              <p className="mt-4 text-lg opacity-90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}