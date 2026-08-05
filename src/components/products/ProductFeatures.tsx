import Container from "@/components/ui/Container";

type ProductFeaturesProps = {
  title: string;
  features: string[];
};

export default function ProductFeatures({
  title,
  features,
}: ProductFeaturesProps) {
  return (
    <section className="bg-white py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            ÖZELLİKLER
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            {title}
          </h2>

          <p className="mt-7 text-xl leading-9 text-slate-600">
            Tüm ürünlerimiz uzun ömürlü kullanım, yüksek performans ve estetik
            görünüm sağlayacak şekilde kaliteli malzemeler kullanılarak
            üretilmektedir.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110">
                ✓
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Ürünümüzün bu özelliği uzun ömürlü kullanım ve yüksek verim
                sağlayacak şekilde tasarlanmıştır.
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}