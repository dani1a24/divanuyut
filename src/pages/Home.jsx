import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SofaCard from "../components/SofaCard";
import Showrooms from "../components/Showrooms";
import Reviews from "../components/Reviews";
import { sofas } from "../data/sofas";

export default function Home() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Главный баннер */}
      <Hero />

      {/* Популярные модели */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Хиты продаж</h2>
          </div>

          <Link
            to="/catalog"
            className="text-sm font-medium hover:text-amber-700 transition"
          >
            Все модели →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sofas.slice(0, 3).map((sofa) => (
            <SofaCard key={sofa.id} sofa={sofa} />
          ))}
        </div>
      </section>

      {/* Карточки и карта магазина */}
      <Showrooms />
      {/* Отзывы покупателей */}
      <Reviews />

      {/* О компании */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-amber-800 uppercase tracking-widest text-sm mb-3">
            О нас
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Всё начинается с любви к своему делу
          </h2>

          <div className="max-w-3xl">
            <p className="text-stone-600 text-lg leading-8">
              «Когда я создавал ДиванУют, мне хотелось одного — делать мебель,
              которую я с гордостью поставил бы в собственном доме.
            </p>

            <p className="text-stone-600 text-lg leading-8 mt-5">
              Для меня важно не просто изготовить диван, а создать вещь, которая
              будет радовать вас каждый день. Поэтому в основе нашего дела —
              честный подход, внимание к деталям и забота о каждом покупателе».
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 text-amber-800 font-medium hover:text-amber-600 transition"
          >
            Узнать нашу историю →
          </Link>
        </div>
      </section>
    </div>
  );
}
