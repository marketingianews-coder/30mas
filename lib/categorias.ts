// Taxonomía oficial. Fuente de verdad para la nav y validación.
export type Categoria = { slug: string; nombre: string; descripcion: string }

export const categorias: Categoria[] = [
  { slug: 'chile', nombre: 'Chile', descripcion: 'La actualidad nacional: lo que pasa hoy en Chile.' },
  { slug: 'internacional', nombre: 'Internacional', descripcion: 'Las noticias del mundo que importan.' },
  { slug: 'salud', nombre: 'Salud', descripcion: 'Salud, bienestar y avances médicos.' },
  { slug: 'ciencia', nombre: 'Ciencia', descripcion: 'Descubrimientos, investigación y tecnología científica.' },
  { slug: 'medio-ambiente', nombre: 'Medio ambiente', descripcion: 'Clima, naturaleza y sostenibilidad.' },
  { slug: 'estilo-de-vida', nombre: 'Estilo de vida', descripcion: 'Cultura, tendencias y vida cotidiana.' },
  { slug: 'opinion', nombre: 'Opinión', descripcion: 'Columnas y análisis de opinión.' },
]

export const categoriaBySlug = (slug: string) => categorias.find((c) => c.slug === slug)
export const esCategoriaValida = (slug: string) => categorias.some((c) => c.slug === slug)
export const nombreCategoria = (slug: string) => categoriaBySlug(slug)?.nombre ?? slug
