import { MetadataRoute } from 'next'
import { articles } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://30mas.cl'
  const articlesUrls = articles
    .filter((a) => !a.draft)
    .map((a) => ({
      url: `${base}/articulo/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'hourly', priority: 1 },
    { url: `${base}/categoria/chile`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/categoria/internacional`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/categoria/salud`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/categoria/ciencia`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/categoria/medio-ambiente`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/categoria/estilo-de-vida`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    ...articlesUrls,
  ]
}
