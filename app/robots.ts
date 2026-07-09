import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://zentreeplywood.com";

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
