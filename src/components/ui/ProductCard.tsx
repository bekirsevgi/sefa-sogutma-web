import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ProductCard({
  title,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1280px)50vw,20vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 font-semibold text-blue-700">

          İncele

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

      </div>

    </Link>
  );
}