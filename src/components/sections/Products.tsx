import SectionTitle from "@/components/ui/SectionTitle";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="urunler"
      className="bg-white py-24"
    >
      <Container>

        <SectionTitle
          badge="ÜRÜNLERİMİZ"
          title="Endüstriyel Kapak Çözümleri"
          description="Market, pastane ve endüstriyel soğutucu dolapları için uzun ömürlü, kaliteli ve özel ölçü üretim çözümleri."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
              href={product.href}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}