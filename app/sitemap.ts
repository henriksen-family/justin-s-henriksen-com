import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/schema'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/fractional/ai-officer', priority: 0.9 },
    { path: '/fractional/solutions-architect', priority: 0.9 },
    { path: '/fractional/ai-integration-director', priority: 0.9 },
    { path: '/jh-card', priority: 0.6 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
