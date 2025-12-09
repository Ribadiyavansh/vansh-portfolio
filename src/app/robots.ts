import { DATA } from "@/data/resume";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
