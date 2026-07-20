import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://zentreeplywood.com").replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",  // Disallow indexing of private directories if any
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
