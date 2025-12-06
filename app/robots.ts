import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = 'readmebit.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/feedback/'
    },
    sitemap: `${baseURL}/sitemap.xml`
  }
}