const mapUrl = "https://yandex.ru/maps/-/CXRxZLNd";

export default function Reviews() {
  return (
    <section className="bg-[#faf9f6] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Отзывы наших покупателей
          </h2>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-amber-800 hover:text-amber-600 transition"
          >
            Все отзывы →
          </a>
        </div>

        {/* Контейнер отзывов */}
        <div className="w-full bg-white border border-stone-200 rounded-lg p-5 md:p-8">
          {/* Виджет Яндекс Карт */}
          <div className="max-w-[760px] mx-auto">
            <iframe
              src="https://yandex.ru/maps-reviews-widget/72695836466?comments"
              title="Отзывы покупателей на Яндекс Картах"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center mt-6">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 text-white px-6 py-3 rounded-md text-sm hover:bg-amber-800 transition"
          >
            Оставить отзыв
          </a>
        </div>
      </div>
    </section>
  );
}
