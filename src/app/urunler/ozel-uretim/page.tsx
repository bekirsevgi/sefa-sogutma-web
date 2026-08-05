import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductCTA from "@/components/products/ProductCTA";

export default function OzelUretimPage() {
  return (
    <>
      <ProductHero
        title="Özel Ölçü Üretim"
        description="İşletmenizin ihtiyaçlarına uygun özel ölçülerde soğutucu dolap kapakları üretiyoruz. Projenize özel çözümler geliştiriyor, kaliteli işçilik ve uzun ömürlü kullanım sunuyoruz."
        image="/images/products/ozel.jpeg"
      />

      <ProductFeatures
        title="Özel Üretim Avantajları"
        features={[
          "İstenilen Ölçüde Üretim",
          "Projeye Özel Tasarım",
          "Kaliteli Malzeme",
          "Profesyonel İşçilik",
          "Hızlı Üretim",
          "Uzun Ömürlü Kullanım",
        ]}
      />

      <ProductCTA />
    </>
  );
}