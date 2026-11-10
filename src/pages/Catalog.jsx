import { useState } from "react";
import { products } from "../data/products";
import SofaCard from "../components/SofaCard";

export default function Catalog() {
  const [category, setCategory] = useState("all");

  const categories = [
    { id: "all", label: "Все модели" },
    { id: "sofa", label: "Диваны" },
    { id: "bed", label: "Кровати" },
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Заголовок */}
        <h1 className="mb-10 text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
          Каталог
        </h1>

        {/* Категории */}
        <div className="mb-8 flex flex-wrap gap-3 border-b border-stone-200 pb-6">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === item.id
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Количество моделей */}
        <p className="mb-6 text-sm text-stone-500">
          Найдено моделей: {filteredProducts.length}
        </p>

        {/* Карточки товаров */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <SofaCard key={product.id} sofa={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
