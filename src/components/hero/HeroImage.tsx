import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Arka Plan Glow */}
      <div className="absolute h-[650px] w-[650px] rounded-full bg-blue-100/60 blur-[130px]" />

      {/* Sol Üst Kart */}
      <div className="absolute left-0 top-12 z-20 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
            📐
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Özel Ölçü
            </h4>

            <p className="text-xs text-slate-500">
              Projeye özel üretim
            </p>
          </div>

        </div>

      </div>

      {/* Ana Görsel */}
      <div className="relative z-10 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl">

        <Image
          src="/images/products/surgulu.jpeg"
          alt="Sefa Soğutma"
          width={720}
          height={820}
          priority
          className="h-auto w-full max-w-[700px] object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Sağ Kart */}
      <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
            🛠️
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Tamir & Servis
            </h4>

            <p className="text-xs text-slate-500">
              Hızlı çözüm
            </p>
          </div>

        </div>

      </div>

      {/* Sol Alt Kart */}
      <div className="absolute bottom-8 left-4 z-20 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
            🚚
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Türkiye Geneli
            </h4>

            <p className="text-xs text-slate-500">
              Güvenli teslimat
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}