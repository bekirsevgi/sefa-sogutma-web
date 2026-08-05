import Button from "@/components/ui/Button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="w-full max-w-none">

      {/* Üst Rozet */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">
        <span className="text-lg">⭐</span>

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          20+ YILLIK TECRÜBE
        </span>
      </div>

      {/* Başlık */}
      <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl xl:text-7xl">
        Market, Pastane ve

        <span className="block text-blue-700">
          Endüstriyel
        </span>

        Soğutucu Dolapları İçin

        <span className="block">
          Profesyonel Kapak Sistemleri
        </span>
      </h1>

      {/* Açıklama */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        20 yılı aşkın tecrübemizle market, pastane ve endüstriyel
        soğutucu dolapları için
        <strong className="text-slate-900"> özel ölçü sürgülü kapak</strong>,
        <strong className="text-slate-900"> çarpma kapak</strong>,
        <strong className="text-slate-900"> tamir</strong> ve
        <strong className="text-slate-900"> yedek parça</strong>
        çözümleri sunuyoruz.
      </p>

      {/* Butonlar */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="tel:+905334965253">
          📞 Hemen Ara
        </Button>

        <Button
          href="https://wa.me/905334965253"
          variant="secondary"
        >
          💬 WhatsApp'tan Yaz
        </Button>
      </div>

      {/* İstatistikler */}
      <div className="mt-12">
        <HeroStats />
      </div>

    </div>
  );
}