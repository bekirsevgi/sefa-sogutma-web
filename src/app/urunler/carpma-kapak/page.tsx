import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductCTA from "@/components/products/ProductCTA";

export default function CarpmaKapakPage() {
  return (
    <>
      <ProductHero
        title="Çarpma Kapak Sistemleri"
        description="Market, şarküteri ve endüstriyel soğutucu dolapları için dayanıklı çarpma kapak sistemleri üretiyoruz. Estetik görünüm, uzun ömürlü kullanım ve kaliteli malzeme ile işletmenize değer katıyoruz."
        image="/images/products/carpma.jpeg"
      />

      <ProductFeatures
        title="Çarpma Kapak Özellikleri"
        features={[
          "Temperli Cam",
          "Dayanıklı Menteşe",
          "Manyetik Conta",
          "Özel Ölçü Üretim",
          "Yüksek Isı Yalıtımı",
          "Kolay Temizlik",
        ]}
      />

      <ProductCTA />
    </>
  );
}