import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: "🛠️",
    title: "20+ Yıllık Tecrübe",
    description:
      "Yılların verdiği deneyimle market, pastane ve endüstriyel soğutucu dolapları için güvenilir kapak sistemleri üretiyoruz.",
  },
  {
    icon: "📐",
    title: "Özel Ölçü Üretim",
    description:
      "Her projeye özel ölçülerde sürgülü ve çarpma kapak çözümleri tasarlıyor ve üretiyoruz.",
  },
  {
    icon: "🚚",
    title: "Türkiye Geneli Teslimat",
    description:
      "Siparişlerinizi özenle paketleyerek Türkiye'nin dört bir yanına güvenle ulaştırıyoruz.",
  },
  {
    icon: "⭐",
    title: "Kaliteli Malzeme",
    description:
      "Dayanıklı alüminyum profiller, kaliteli cam ve uzun ömürlü aksesuarlar kullanıyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="neden-biz"
      className="bg-slate-50 py-32"
    >
      <Container>
        <SectionTitle
  badge="NEDEN SEFA SOĞUTMA?"
  title="Kalite, Tecrübe ve Güven Bir Arada"
  description="20 yılı aşkın üretim tecrübemizle market, pastane ve endüstriyel soğutucu dolapları için estetik, dayanıklı ve uzun ömürlü kapak sistemleri üretiyoruz."
/>
        

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}