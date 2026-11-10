import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";

function Placeholder({ title }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-stone-500">Этот раздел скоро появится.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />

            <Route path="/about" element={<Placeholder title="О компании" />} />
            <Route
              path="/contacts"
              element={<Placeholder title="Контакты" />}
            />
            <Route
              path="/custom"
              element={<Placeholder title="Диваны под заказ" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
