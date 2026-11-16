import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { latestArticles } from "@/lib/data";

export const dynamic = "force-static";

export default function Home() {
  const posts = latestArticles(24);
  const destacada = posts[0];
  const resto = posts.slice(1);

  return (
    <div className="min-h-screen bg-papel font-sans">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <h1 className="text-3xl font-bold">30 Minutos Más</h1>
            <p className="text-tinta/60 mt-3 text-lg">Solo 30 minutos para enterarte de todo lo que pasó hoy.</p>
            <p className="text-tinta/40 mt-1">Próximamente.</p>
          </div>
        ) : (
          <>
            {destacada && (
              <a href={`/articulo/${destacada.slug}`} className="group block mb-10 pb-10 border-b border-tinta/10">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-amarillo px-1.5 py-0.5">{destacada.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 group-hover:underline decoration-amarillo decoration-4">{destacada.title}</h1>
                <p className="text-lg text-tinta/70 mt-3 max-w-3xl">{destacada.excerpt}</p>
                <p className="text-xs text-tinta/40 mt-3">{destacada.date} · {destacada.readTime}</p>
              </a>
            )}
            <div className="grid md:grid-cols-3 gap-6">
              {resto.map((a) => <NewsCard key={a.id} a={a} />)}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
