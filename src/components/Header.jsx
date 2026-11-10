import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Диваны под заказ", path: "/custom" },
    { name: "О компании", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <header className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 min-h-20 flex items-center justify-between gap-5">
        {/* Логотип и название */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.png"
            alt="Логотип ДиванУют"
            className="w-16 h-16 object-contain shrink-0"
          />

          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-stone-900">
              Диван<span className="text-amber-700">Уют</span>
            </span>

            <span className="text-[9px] uppercase tracking-wider text-stone-500">
              Семейная мебельная мастерская
            </span>
          </div>
        </Link>

        {/* Навигация */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-amber-700 transition whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Телефон */}
        <a
          href="tel:+78000000000"
          className="hidden xl:flex items-center gap-2 text-sm whitespace-nowrap"
        >
          <Phone size={17} />
          +7 (800) 000-00-00
        </a>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          className="lg:hidden"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-4 px-6 pb-6 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-700 transition"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+78000000000"
            className="flex items-center gap-2 text-sm mt-2"
          >
            <Phone size={17} />
            +7 (800) 000-00-00
          </a>
        </nav>
      )}
    </header>
  );
}
