import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const menuItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "#urunler" },
  { label: "Neden Biz?", href: "#hizmetler" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-3xl font-black tracking-tight text-slate-900">
            SEFA
          </span>

          <span className="text-lg font-bold tracking-[0.35em] text-blue-700">
            SOĞUTMA
          </span>
        </a>

        {/* Menü */}
        <nav className="hidden items-center gap-10 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sağ Buton */}
        <Button href="tel:+905334965253">
          📞 Hemen Ara
        </Button>
      </Container>
    </header>
  );
}