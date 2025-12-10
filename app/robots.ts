import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = 'https://readmebit.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/feedback/'
    },
    sitemap: `${baseURL}/sitemap.xml`
  }
}