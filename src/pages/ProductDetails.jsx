import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => String(item.id) === id);

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-3xl font-medium">Модель не найдена</h1>

          <Link to="/catalog" className="mt-6 inline-block text-amber-800">
            Вернуться в каталог →
          </Link>
        </div>
      </main>
    );
  }

  const images = product.images?.length
    ? product.images
    : [product.image].filter(Boolean);

  const currentImage = images[activeImage] || images[0];

  const previousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  const characteristics = product.characteristics || {};

  const details = [
    ["Ширина", characteristics.width],
    ["Глубина", characteristics.depth],
    ["Высота", characteristics.height],
    ["Спальное место", characteristics.sleepingPlace],
    ["Механизм", characteristics.mechanism],
    ["Материал обивки", characteristics.upholstery],
  ].filter(([, value]) => value);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-6 py-10 pb-24">
        {/* Назад в каталог */}
        <Link
          to="/catalog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-amber-800"
        >
          <ArrowLeft size={17} />
          Назад в каталог
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
          {/* Галерея фотографий */}
          <div>
            <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-lg bg-stone-100">
              {currentImage && (
                <img
                  src={currentImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              )}

              {/* Стрелки переключения */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Предыдущее фото"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Следующее фото"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Миниатюры */}
            {images.length > 1 && (
              <div className="mt-3 grid max-w-[420px] grid-cols-3 gap-3">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Показать фото ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`aspect-[3/4] overflow-hidden rounded-md border-2 transition ${
                      activeImage === index
                        ? "border-amber-800"
                        : "border-transparent hover:border-stone-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name}, фото ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Информация о модели */}
          <div className="lg:pt-5">
            <h1 className="mb-6 text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
              {product.name}
            </h1>

            <p className="mb-10 leading-8 text-stone-600">
              {product.description || "Описание модели скоро появится."}
            </p>

            {/* Характеристики */}
            <div className="border-t border-stone-200 pt-7">
              <h2 className="mb-6 text-xl font-medium">Характеристики</h2>

              {details.length > 0 ? (
                <div className="divide-y divide-stone-200">
                  {details.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-5 py-4 text-sm"
                    >
                      <span className="text-stone-500">{label}</span>

                      <span className="text-right font-medium text-stone-900">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-stone-500">
                  Характеристики скоро появятся.
                </p>
              )}
            </div>

            {/* Индивидуальное изготовление */}
            <div className="mt-10 border-t border-stone-200 pt-8">
              <h3 className="mb-3 text-xl font-medium">Мебель под заказ</h3>

              <p className="mb-5 leading-7 text-stone-600">
                Узнайте о возможностях индивидуального изготовления мебели для
                вашего интерьера.
              </p>

              <Link
                to="/custom"
                className="inline-flex items-center gap-2 font-medium text-amber-800 transition hover:text-amber-600"
              >
                Подробнее →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
