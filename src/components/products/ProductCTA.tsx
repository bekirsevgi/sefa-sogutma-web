import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-blue-700 py-28 text-white">

      {/* Arka plan efektleri */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <Container>

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-200">
            HEMEN TEKLİF ALIN
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Projenize Uygun
            <span className="block">
              Özel Ölçü Fiyat Teklifi
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-100">
            Ölçülerinizi bizimle paylaşın. En kısa sürede fiyatlandırma,
            üretim süreci ve teslimat hakkında size dönüş yapalım.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <Button
              href="tel:+905334965253"
              className="bg-white text-blue-700 hover:bg-slate-100"
            >
              📞 Hemen Ara
            </Button>

            <Button
              href="https://wa.me/905334965253"
              variant="secondary"
              className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700"
            >
              💬 WhatsApp'tan Yaz
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}