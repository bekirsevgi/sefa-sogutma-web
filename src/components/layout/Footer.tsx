import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 xl:grid-cols-4">

          {/* Firma */}

          <div>

            <h3 className="text-3xl font-black">
              SEFA <span className="text-blue-500">SOĞUTMA</span>
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Market, pastane ve endüstriyel soğutucu dolapları için
              sürgülü kapak, çarpma kapak, projeye özel üretim,
              soğuk hava tünelleri ve yedek parça çözümleri sunuyoruz.
            </p>

          </div>

          {/* Menü */}

          <div>

            <h4 className="text-xl font-bold">
              Hızlı Menü
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>
                <a href="/">
                  Ana Sayfa
                </a>
              </li>

              <li>
                <a href="#urunler">
                  Ürünler
                </a>
              </li>

              <li>
                <a href="#referanslar">
                  Referanslar
                </a>
              </li>

              <li>
                <a href="#iletisim">
                  İletişim
                </a>
              </li>

            </ul>

          </div>

          {/* İletişim */}

          <div>

            <h4 className="text-xl font-bold">
              İletişim
            </h4>

            <div className="mt-6 space-y-4 text-slate-400">

              <a
                href="tel:+905334965253"
                className="block hover:text-white"
              >
                📞 0533 496 52 53
              </a>

              <a
                href="tel:+905305446177"
                className="block hover:text-white"
              >
                📱 0530 544 61 77
              </a>

              <p>
                📍 Tekirdağ / Çorlu
              </p>

            </div>

          </div>

          {/* Hizmet */}

          <div>

            <h4 className="text-xl font-bold">
              Hizmetlerimiz
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>Sürgülü Kapak</li>

              <li>Çarpma Kapak</li>

              <li>Projeye Özel Üretim</li>

              <li>Soğuk Hava Tünelleri</li>

              <li>Yedek Parça</li>

            </ul>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Sefa Soğutma. Tüm Hakları Saklıdır.
          </p>

          <p>
            Tekirdağ / Çorlu • Türkiye Geneline Hizmet
          </p>

        </div>

      </Container>

    </footer>
  );
}