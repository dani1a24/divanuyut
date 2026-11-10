import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-center bg-stone-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <p className="uppercase tracking-[0.25em] text-sm mb-5">
          Комфорт в каждой детали
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold max-w-2xl leading-tight">
          Диваны для вашего уюта
        </h1>

        <p className="mt-6 text-lg max-w-lg text-stone-100">
          Современные модели, качественные материалы и продуманный дизайн для
          вашего дома.
        </p>

        <Link
          to="/catalog"
          className="inline-block mt-9 bg-white text-stone-900 px-8 py-4 font-medium hover:bg-stone-200 transition"
        >
          Смотреть каталог →
        </Link>
      </div>
    </section>
  );
}
