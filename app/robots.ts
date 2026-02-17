import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = 'https://www.readmebit.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/feedback/'
    },
    sitemap: `${baseURL}/sitemap.xml`
  }
}