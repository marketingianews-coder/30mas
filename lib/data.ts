// Registro de artículos publicados (metadata). El panel inserta/edita aquí al publicar.
// El cuerpo de cada artículo vive en articulos/{id}.md.
export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string // slug de categorias.ts
  type: 'noticia' | 'analisis' | 'reportaje' | 'entrevista' | 'opinion'
  author: string
  date: string // YYYY-MM-DD
  readTime: string
  image?: string
  tags?: string[]
  draft?: boolean
}

export const articles: Article[] = [
  {
    id: '4',
    image: '/images/articles/4.jpg',
    slug: 'estrella-muerta-gira-8-minutos-pulsos-radio',
    title: 'Astrónomos hallan una estrella muerta que gira cada 8 minutos y emite misteriosos pulsos de radio',
    excerpt: 'Un equipo identificó una pareja estelar a más de 5.000 años luz donde una estrella muerta gira cada ocho minutos y emite pulsos de radio.',
    category: 'ciencia',
    type: 'noticia',
    author: 'Redacción 30 Minutos Más',
    date: '2026-11-15',
    readTime: '2 min',
    tags: ['astronomia', 'estrella', 'pulsos de radio', 'espacio', 'icrar'],
  },
  {
    id: '3',
    image: '/images/articles/3.jpg',
    slug: 'estudio-alzheimer-senales-cerebro-diez-anos-antes-sintomas',
    title: 'Un estudio detecta señales de Alzheimer en el cerebro hasta diez años antes de los síntomas',
    excerpt: 'Investigadores de Johns Hopkins hallaron que dos regiones del cerebro empiezan a encogerse hasta diez años antes de que aparezcan los problemas de memoria.',
    category: 'salud',
    type: 'noticia',
    author: 'Redacción 30 Minutos Más',
    date: '2026-11-15',
    readTime: '2 min',
    tags: ['alzheimer', 'cerebro', 'memoria', 'investigacion', 'johns hopkins'],
  },
  {
    id: '2',
    image: '/images/articles/2.jpg',
    slug: 'ue-blindar-ucrania-invierno-onu-oriente-medio',
    title: 'La UE busca blindar a Ucrania para el invierno mientras la ONU sesiona por Oriente Medio',
    excerpt: 'Los cancilleres de la Unión Europea abordan cómo reforzar a Ucrania de cara al invierno, mientras el Consejo de Seguridad de la ONU sesiona sobre Oriente Medio.',
    category: 'internacional',
    type: 'noticia',
    author: 'Redacción 30 Minutos Más',
    date: '2026-11-15',
    readTime: '2 min',
    tags: ['union europea', 'ucrania', 'onu', 'oriente medio', 'siria'],
  },
  {
    id: '1',
    image: '/images/articles/1.jpg',
    slug: 'gobierno-congela-precio-combustibles-febrero-camioneros',
    title: 'Gobierno congela el precio de los combustibles hasta febrero tras la presión de los camioneros',
    excerpt: 'El Ejecutivo reingresó el proyecto que congela el precio de los combustibles hasta febrero, tras negociar con gremios de camioneros en medio de movilizaciones.',
    category: 'chile',
    type: 'noticia',
    author: 'Redacción 30 Minutos Más',
    date: '2026-11-15',
    readTime: '2 min',
    tags: ['combustibles', 'camioneros', 'gobierno', 'movilizaciones'],
  },
]

export const publishedArticles = () => articles.filter((a) => !a.draft)
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug)
export const articlesByCategory = (slug: string) => publishedArticles().filter((a) => a.category === slug)
export const latestArticles = (n = 30) => publishedArticles().slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, n)
