import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Название компании */}
        <div>
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold">
              Диван<span className="text-amber-600">Уют</span>
            </h2>
          </Link>

          <p className="text-stone-400 text-xs uppercase tracking-wider mt-2">
            Семейная мебельная мастерская
          </p>
        </div>

        {/* Навигация */}
        <nav className="flex flex-col gap-3 text-stone-300 text-sm">
          <Link to="/" className="hover:text-amber-500 transition">
            Главная
          </Link>

          <Link to="/catalog" className="hover:text-amber-500 transition">
            Каталог
          </Link>

          <Link to="/custom" className="hover:text-amber-500 transition">
            Диваны под заказ
          </Link>

          <Link to="/about" className="hover:text-amber-500 transition">
            О компании
          </Link>

          <Link to="/contacts" className="hover:text-amber-500 transition">
            Контакты
          </Link>
        </nav>

        {/* Контакты */}
        <div className="flex flex-col gap-3 text-stone-300 text-sm">
          <a
            href="tel:+78000000000"
            className="hover:text-amber-500 transition"
          >
            +7 (800) 000-00-00
          </a>

          <a
            href="mailto:info@divanuyut.ru"
            className="hover:text-amber-500 transition"
          >
            info@divanuyut.ru
          </a>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="border-t border-stone-700 pt-6 text-sm text-stone-500">
          © {new Date().getFullYear()} ДиванУют. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
