import Link from "next/link";

export default function Footer({ categorias }: { categorias: string[] }) {
  return (
    <footer className="bg-tinta text-papel mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 text-sm mb-6">
          {categorias.map((c) => (
            <Link
              key={c}
              href={`/categoria/${c.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-amarillo transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
        <p className="text-papel/50 text-xs">
          © {new Date().getFullYear()} 30 Minutos Más · Chile
        </p>
      </div>
    </footer>
  );
}
