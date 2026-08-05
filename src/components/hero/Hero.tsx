import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="absolute -left-52 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="absolute -right-52 top-24 h-[520px] w-[520px] rounded-full bg-sky-100/50 blur-[120px]" />

      <Container>

        <div className="grid items-center gap-20 py-20 pb-32 xl:grid-cols-[48%_52%]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}