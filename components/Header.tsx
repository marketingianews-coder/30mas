import Image from "next/image";
import Link from "next/link";
import { categorias } from "@/lib/categorias";

export default function Header() {
  return (
    <header className="bg-papel border-b-2 border-tinta">
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-4 flex items-center justify-between border-b border-tinta/15">
          <Link href="/">
            <Image src="/logo-claro.svg" alt="30 Minutos Más" width={170} height={70} priority />
          </Link>
          <span className="hidden sm:block text-xs text-tinta/50">Todo lo de hoy, en 30 minutos</span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 py-2 text-sm font-medium">
          {categorias.map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              className="text-tinta hover:bg-amarillo px-1 transition-colors"
            >
              {c.nombre}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
