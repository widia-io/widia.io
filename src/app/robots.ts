import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/propostas/', '/preview/'],
    },
    sitemap: 'https://widia.io/sitemap.xml',
  }
}
