import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductCTA from "@/components/products/ProductCTA";

export default function YedekParcaPage() {
  return (
    <>
      <ProductHero
        title="Yedek Parça"
        description="Sürgülü ve çarpma kapak sistemleri için conta, menteşe, kulp, ray ve diğer yedek parçaların satışını gerçekleştiriyoruz."
        image="/images/products/surgulu.jpeg"
      />

      <ProductFeatures
        title="Yedek Parça Çeşitleri"
        features={[
          "Conta",
          "Menteşe",
          "Kulp",
          "Ray Sistemleri",
          "Cam Aksesuarları",
          "Diğer Yedek Parçalar",
        ]}
      />

      <ProductCTA />
    </>
  );
}