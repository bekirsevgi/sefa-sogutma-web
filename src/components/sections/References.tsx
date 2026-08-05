import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const references = [
  {
    title: "Market Dolabı",
    image: "/images/products/surgulu.jpeg",
  },
  {
    title: "Pastane Dolabı",
    image: "/images/products/carpma.jpeg",
  },
  {
    title: "Şarküteri Dolabı",
    image: "/images/products/ozel.jpeg",
  },
  {
    title: "Soğuk Hava Tüneli",
    image: "/images/products/tunel.jpeg",
  },
  {
    title: "Özel Proje",
    image: "/images/products/yedek.jpeg",
  },
  {
    title: "Endüstriyel Soğutucu",
    image: "/images/products/surgulu.jpeg",
  },
];

export default function References() {
  return (
    <section
      id="referanslar"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          badge="REFERANSLAR"
          title="Tamamladığımız Bazı Projeler"
          description="Gerçek proje fotoğraflarımız yakında eklenecektir. Aşağıdaki görseller temsilidir."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {references.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}