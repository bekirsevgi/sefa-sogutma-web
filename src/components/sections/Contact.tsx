import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-slate-900 py-24 text-white"
    >
      <Container>

        <SectionTitle
          badge="İLETİŞİM"
          title="Bizimle İletişime Geçin"
          description="Fiyat teklifi almak, ürünlerimiz hakkında bilgi edinmek veya sipariş oluşturmak için bize hemen ulaşabilirsiniz."
          light
        />

        <div className="mt-20 grid items-start gap-16 lg:grid-cols-2">

          <div className="space-y-6">

            <div className="rounded-3xl bg-slate-800 p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
                TELEFON
              </p>

              <a
                href="tel:+905334965253"
                className="mt-3 block text-3xl font-bold hover:text-blue-400 transition"
              >
                0533 496 52 53
              </a>
            </div>

            <div className="rounded-3xl bg-slate-800 p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                WHATSAPP
              </p>

              <a
                href="https://wa.me/905334965253"
                target="_blank"
                className="mt-3 block text-3xl font-bold hover:text-green-400 transition"
              >
                0533 496 52 53
              </a>
            </div>

            <div className="rounded-3xl bg-slate-800 p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                KONUM
              </p>

              <p className="mt-3 text-2xl font-bold">
                Çorlu / Tekirdağ
              </p>

              <p className="mt-2 text-slate-300">
                Türkiye Geneline Üretim ve Teslimat
              </p>
            </div>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.383737593342!2d27.84130884036231!3d41.149147263051866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e12895555555%3A0x3f893cdf08ec326f!2zU2VmYSBTb8SfdXR1Y3UgS2FwxLFsYXLEsSDEsG1hbGF0IFRpY2FyZXQ!5e0!3m2!1str!2str!4v1785960730238!5m2!1str!2str"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    className="h-[560px] w-full"
  />

</div>

        </div>

      </Container>
    </section>
  );
}