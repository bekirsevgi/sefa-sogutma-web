import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductCTA from "@/components/products/ProductCTA";

export default function SogukHavaTunelleriPage() {
  return (
    <>
      <ProductHero
        title="Soğuk Hava Tünelleri"
        description="Gıda üretim tesisleri ve endüstriyel işletmeler için özel ölçülerde soğuk hava tünelleri üretiyoruz. Dayanıklı yapı, yüksek yalıtım ve uzun ömürlü kullanım sunuyoruz."
        image="/images/products/surgulu.jpeg"
      />

      <ProductFeatures
        title="Soğuk Hava Tüneli Özellikleri"
        features={[
          "Yüksek Isı Yalıtımı",
          "Özel Ölçü Üretim",
          "Dayanıklı Panel Sistemleri",
          "Endüstriyel Kullanım",
          "Kolay Montaj",
          "Uzun Ömürlü Yapı",
        ]}
      />

      <ProductCTA />
    </>
  );
}