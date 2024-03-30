import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
        allow: ['/'],
      },
      {
        userAgent: 'Yeti',
        allow: ['/'],
      },
    ],
    sitemap: 'https://cross-word.online/sitemap.xml',
  }
}
