import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.isotopeeconomy.com";

  const routes = [
    "",
    "/guide",
    "/learn",
    "/advanced",
    "/about",
    "/map",
    "/graph",
    "/isotopes",
    "/facilities",
    "/companies",
    "/watch",
    "/capital",
    "/links",
    "/applications/medicine",
    "/applications/quantum",
    "/applications/nuclear",
  ];

  return routes.map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/watch" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/map" || path === "/graph" ? 0.9 : 0.7,
  }));
}
