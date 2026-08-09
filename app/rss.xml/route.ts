import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const base = "https://www.isotopeeconomy.com";

  const items = [
    {
      title: "Q3 2026 Watchlist",
      link: `${base}/watch`,
      description:
        "Structural pressure points in the isotope economy this quarter: Mo-99 / Tc-99m, Lu-177, Ac-225, Si-28, HALEU enrichment, and He-3. Next scheduled review: Q4 2026.",
      pubDate: new Date("2026-08-01T00:00:00Z").toUTCString(),
      guid: `${base}/watch#q3-2026`,
    },
    {
      title: "Supply Map and Knowledge Graph",
      link: `${base}/map`,
      description:
        "Interactive supply map of isotope production facilities and open knowledge graph of dependencies across isotopes, processes, facilities, companies, and applications.",
      pubDate: new Date("2026-08-01T00:00:00Z").toUTCString(),
      guid: `${base}/map#2026-08`,
    },
    {
      title: "How to read this system",
      link: `${base}/guide`,
      description:
        "Orientation guide for the hub: production over application, why the map is sparse, and how to read the knowledge graph.",
      pubDate: new Date("2026-08-01T00:00:00Z").toUTCString(),
      guid: `${base}/guide#2026-08`,
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Isotope Economy</title>
    <link>${base}</link>
    <description>Public orientation layer for isotope production, facilities, companies, and supply structure.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="false">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
