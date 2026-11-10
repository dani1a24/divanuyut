import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function SofaCard({ sofa }) {
  return (
    <Link to={`/catalog/${sofa.id}`} className="group block min-w-0">
      {/* Фото */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-100">
        <img
          src={sofa.image}
          alt={sofa.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Название */}
      <div className="pt-3">
        <h3 className="text-lg font-medium text-stone-900 transition-colors group-hover:text-amber-800">
          {sofa.name}
        </h3>

        <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-amber-800">
          Подробнее
          <ArrowUpRight size={15} />
        </div>
      </div>
    </Link>
  );
}
