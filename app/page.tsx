import Link from "next/link";
import type { Article } from "@/lib/data";
import { latestArticles, articlesByCategory } from "@/lib/data";
import { categorias, nombreCategoria } from "@/lib/categorias";

export const dynamic = "force-static";

// Paleta de bloques de color de la maqueta (negro y amarillo).
const PAL: { bg: string; fg: string }[] = [
  { bg: "#FFCC00", fg: "#0C0C0D" }, { bg: "#0A0A0A", fg: "#FAFAF7" },
  { bg: "#FFFFFF", fg: "#0C0C0D" }, { bg: "#2B2B2B", fg: "#FAFAF7" },
  { bg: "#FFF2A9", fg: "#0C0C0D" }, { bg: "#2B2B2B", fg: "#FAFAF7" },
  { bg: "#FFFFFF", fg: "#0C0C0D" }, { bg: "#FFCC00", fg: "#0C0C0D" },
];

const Logo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/logo-claro.svg" alt="30 Minutos Más" style={{ height: 54 }} />
);

export default function Home() {
  const posts = latestArticles(30);
  const top = (slug: string): Article | undefined => articlesByCategory(slug)[0] || posts.find((p) => p.category === slug);
  const destacada = posts[0];
  const edicion = posts.slice(0, 11);
  const opinion = posts.slice(0, 3);
  const ultimo = posts.slice(0, 8);

  const vars: React.CSSProperties = {
    // @ts-expect-error CSS custom properties
    "--bg": "#0D1E19", "--tx": "#F2F7F4", "--mu": "#a3b8b0", "--ln": "#24403a", "--sf": "#14302a",
    "--ac": "#FFD60A", "--hf": "'Sora'", "--bf": "'Outfit'", "--hw": 700, "--hbg": "#FFFFFF",
    "--htx": "#0C0C0D", "--hln": "#d9d9d2", "--hch": "#FFD60A", "--hcf": "#0C0C0D",
  };

  const hoy = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long" });

  return (
    <div className="site" style={{ ...vars, background: "#0D1E19" }}>
      <div className="mm">
        {/* Encabezado */}
        <div className="hdr hh">
          <span className="hbtn">☰ Menú</span>
          <div className="lg"><Link href="/"><Logo /></Link></div>
          <div className="dt"><b>Edición del día</b><span>{hoy}</span></div>
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "70px 20px" }}>
            <h1 style={{ fontSize: 34 }}>30 Minutos Más</h1>
            <p style={{ color: "var(--mu)" }}>Solo 30 minutos para enterarte de todo lo que pasó hoy.</p>
          </div>
        ) : (
          <>
            {/* Módulo 0 — Briefing */}
            <section className="mod">
              <div className="prog">{edicion.map((_, i) => <i key={i} className={i === 0 ? "on" : ""} />)}</div>
              <div className="stg">
                <Link href={`/articulo/${destacada.slug}`} className="card" style={{ background: "#FFCC00", color: "#0C0C0D", padding: destacada.image ? 0 : undefined, overflow: "hidden" }}>
                  {destacada.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={destacada.image} alt="" style={{ width: "100%", height: 220, objectFit: "cover", display: "block", flexShrink: 0 }} />
                  )}
                  <div style={{ padding: "24px 32px 0", flex: 1 }}>
                    <div className="lab" style={{ opacity: 0.75 }}>{nombreCategoria(destacada.category)} · {destacada.readTime} · 1 de {edicion.length}</div>
                    <h1>{destacada.title}</h1>
                    <p>{destacada.excerpt}</p>
                  </div>
                  <div className="nv" style={{ padding: "0 32px 24px" }}><span style={{ marginLeft: "auto" }}>{destacada.readTime}</span></div>
                </Link>
                <div className="nxt">
                  <h4>EN ESTA EDICIÓN</h4>
                  {edicion.map((a, i) => (
                    <Link key={a.id} href={`/articulo/${a.slug}`} className={i === 0 ? "on" : ""} style={{ display: "block" }}>
                      {i + 1}. {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Módulo 1 — Tu edición: 30 minutos */}
            <section className="mod"><div className="pad">
              <h2 className="sh">Tu edición: 30 minutos</h2>
              <div className="bar">
                {categorias.map((c, i) => {
                  const n = Math.max(2, articlesByCategory(c.slug).length || 2);
                  const p = PAL[i % PAL.length];
                  return (
                    <div className="seg" key={c.slug} style={{ flex: n, background: p.bg, color: p.fg }}>
                      <b>{n}</b><span>{c.nombre}</span>
                    </div>
                  );
                })}
              </div>
            </div></section>

            {/* Módulo 2 — Por categoría (bloques de color) */}
            <section className="mod"><div className="pad">
              <h2 className="sh">Por categoría</h2>
              <div className="bl">
                {categorias.map((c, i) => {
                  const a = top(c.slug);
                  const p = PAL[i % PAL.length];
                  const inner = (
                    <>
                      <span className="mi">{a?.readTime || "—"}</span>
                      <h2>{c.nombre}</h2>
                      <p>{a ? a.title : "Pronto, las primeras notas."}</p>
                    </>
                  );
                  return (
                    <Link key={c.slug} href={a ? `/articulo/${a.slug}` : `/categoria/${c.slug}`} className={`b${i === 0 ? " w2" : ""}`} style={{ background: p.bg, color: p.fg }}>{inner}</Link>
                  );
                })}
              </div>
            </div></section>

            {/* Módulo 3 — Opinión */}
            <section className="mod"><div className="pad">
              <h2 className="sh">Opinión</h2>
              <div className="g3">
                {opinion.map((a, i) => (
                  <Link href={`/articulo/${a.slug}`} className="oc" key={a.id} style={{ display: "block" }}>
                    <div className="av">C{i + 1}</div>
                    <small>Columnista · {nombreCategoria(a.category)}</small>
                    <h3 style={{ marginTop: 6 }}>{a.title}</h3>
                  </Link>
                ))}
              </div>
            </div></section>

            {/* Módulo 4 — Lo último (feed) */}
            <section className="mod"><div className="pad">
              <h2 className="sh">Lo último</h2>
              <div className="fl">
                <span className="on">Todo</span>
                {categorias.map((c) => <Link key={c.slug} href={`/categoria/${c.slug}`}>{c.nombre}</Link>)}
              </div>
              {ultimo.map((a, i) => {
                const p = PAL[i % PAL.length];
                return (
                  <div className="ev" key={a.id}>
                    <time>{a.date.slice(5)}</time>
                    <div style={{ flex: 1 }}>
                      <span className="c" style={{ background: p.bg, color: p.fg }}>{nombreCategoria(a.category)}</span>
                      <h3><Link href={`/articulo/${a.slug}`}>{a.title}</Link></h3>
                      <p>{a.excerpt}</p>
                    </div>
                    {a.image
                      ? /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={a.image} alt="" style={{ width: 96, height: 72, objectFit: "cover", borderRadius: 8, flexShrink: 0, alignSelf: "center" }} />
                      : <span className="m">{a.readTime}</span>
                    }
                  </div>
                );
              })}
            </div></section>

            {/* Módulo 5 — Newsletter */}
            <section className="mod"><div className="nl">
              <h2>Todo lo de hoy, en tu correo en 30 minutos</h2>
              <div className="inp">tu@correo.cl</div>
              <button>Suscribirme</button>
            </div></section>
          </>
        )}

        {/* Módulo 6 — Pie */}
        <section className="mod"><div className="ft">
          <div><h4>30 Minutos Más</h4><p>Solo 30 minutos para enterarte de todo lo que pasó hoy.</p></div>
          <div><h4>Secciones</h4>{categorias.slice(0, 4).map((c) => <p key={c.slug}><Link href={`/categoria/${c.slug}`}>{c.nombre}</Link></p>)}</div>
          <div><h4>Más</h4>{categorias.slice(4).map((c) => <p key={c.slug}><Link href={`/categoria/${c.slug}`}>{c.nombre}</Link></p>)}</div>
          <div><h4>Medio</h4><p>Quiénes somos</p><p>Contacto</p><p>Publicidad</p><p>Términos</p></div>
        </div></section>
      </div>
    </div>
  );
}
