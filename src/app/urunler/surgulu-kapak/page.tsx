import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductCTA from "@/components/products/ProductCTA";

export default function SurguluKapakPage() {
  return (
    <>
      <ProductHero
        title="Sürgülü Kapak Sistemleri"
        description="Market, pastane ve endüstriyel soğutucu dolapları için özel ölçü sürgülü kapak üretimi yapıyoruz. Dayanıklı alüminyum profil, kaliteli cam ve uzun ömürlü aksesuarlarla estetik çözümler sunuyoruz."
        image="/images/products/surgulu.jpeg"
      />

      <ProductFeatures
        title="Sürgülü Kapak Özellikleri"
        features={[
          "Temperli Cam",
          "Alüminyum Profil",
          "Sessiz Ray Sistemi",
          "Özel Ölçü Üretim",
          "Yüksek Isı Yalıtımı",
          "Kolay Temizlik",
        ]}
      />

      <ProductCTA />
    </>
  );
}