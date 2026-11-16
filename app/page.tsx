import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIAS = [
  "Chile", "Internacional", "Salud", "Ciencia",
  "Medio ambiente", "Estilo de vida", "Opinión",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-papel font-sans">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <p className="text-2xl font-bold">Solo 30 minutos para enterarte de todo lo que pasó hoy</p>
          <p className="text-tinta/50 mt-4">Próximamente</p>
        </div>
      </main>
      <Footer categorias={CATEGORIAS} />
    </div>
  );
}
