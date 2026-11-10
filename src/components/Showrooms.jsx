import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

const mapUrl = "https://yandex.ru/maps/-/CXRxZLNd";

export default function Showrooms() {
  return (
    <section className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Левая колонка */}
          <div className="flex flex-col gap-6">
            {/* Популярные модели */}
            <Link
              to="/catalog"
              className="relative group h-[280px] rounded-lg overflow-hidden"
            >
              <img
                src="/images/popular.jpg"
                alt="Популярные модели диванов"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-semibold">Популярные модели</h3>
                <p className="mt-2 text-sm text-white/90">
                  Самые востребованные диваны нашей коллекции
                </p>
              </div>
            </Link>

            {/* Диваны под заказ */}
            <Link
              to="/custom"
              className="relative group h-[280px] rounded-lg overflow-hidden"
            >
              <img
                src="/images/custom.jpg"
                alt="Изготовление диванов под заказ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-semibold">Диван под заказ</h3>
                <p className="mt-2 text-sm text-white/90">
                  Индивидуальные размеры, материалы и дизайн
                </p>
              </div>
            </Link>
          </div>

          {/* Правая колонка — магазин */}
          <div className="border border-stone-200 rounded-lg overflow-hidden flex flex-col bg-white">
            <div className="p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Наш магазин</h3>
                <p className="text-stone-500 text-sm mt-2">
                  Приходите познакомиться с нашими диванами
                </p>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-md text-sm hover:bg-amber-800 transition"
              >
                <MapPin size={16} />
                Найти магазин
              </a>
            </div>

            {/* Яндекс Карта */}
            <div className="flex-1 min-h-[350px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.540008%2C50.212299&z=18&pt=39.539328%2C50.212255%2Cpm2rdm"
                title="Расположение нашего магазина"
                className="w-full h-full min-h-[350px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 flex items-center justify-between text-sm font-medium hover:text-amber-800 transition"
            >
              Открыть в Яндекс Картах
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
