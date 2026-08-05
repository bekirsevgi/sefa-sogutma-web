import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type ProductHeroProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProductHero({
  title,
  description,
  image,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Arka plan efektleri */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-100/40 blur-[120px]" />

      <Container>

        <div className="relative grid items-center gap-20 lg:grid-cols-2">

          {/* Sol */}

          <div>

            <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
              ÜRÜNLER
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
              {title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              {description}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Button href="#iletisim">
                📋 Teklif Al
              </Button>

              <Button
                href="https://wa.me/905334965253"
                variant="secondary"
              >
                💬 WhatsApp
              </Button>

            </div>

            {/* Bilgi Kutuları */}

            <div className="mt-14 flex flex-wrap gap-4">

              <div className="rounded-2xl bg-white px-6 py-4 shadow-md">
                <p className="text-sm text-slate-500">
                  Üretim
                </p>

                <h4 className="mt-1 font-bold text-slate-900">
                  Özel Ölçü
                </h4>
              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-md">
                <p className="text-sm text-slate-500">
                  Malzeme
                </p>

                <h4 className="mt-1 font-bold text-slate-900">
                  Kaliteli Profil
                </h4>
              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-md">
                <p className="text-sm text-slate-500">
                  Teslimat
                </p>

                <h4 className="mt-1 font-bold text-slate-900">
                  Türkiye Geneli
                </h4>
              </div>

            </div>

          </div>

          {/* Sağ */}

          <div className="relative">

            <div className="absolute inset-0 scale-105 rounded-[36px] bg-blue-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src={image}
                alt={title}
                width={900}
                height={700}
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}