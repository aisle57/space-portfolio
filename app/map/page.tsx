"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const GlobeView = dynamic(
  () => import("@/components/map/GlobeView").then((m) => m.GlobeView),
  { ssr: false }
);

type SiteType =
  | "Research reactor"
  | "University reactor"
  | "Neutron source"
  | "Accelerator"
  | "Enrichment";

type MapSite = {
  name: string;
  location: string;
  type: SiteType;
  lat: number;
  lng: number;
};

type LayerKey = "reactors" | "accelerators" | "enrichment";

const SITES: MapSite[] = [
  { name: "HFIR", location: "Oak Ridge, USA", type: "Research reactor", lat: 35.93, lng: -84.31 },
  { name: "ATR", location: "Idaho, USA", type: "Research reactor", lat: 43.52, lng: -112.05 },
  { name: "MURR", location: "Columbia, Missouri, USA", type: "University reactor", lat: 38.95, lng: -92.33 },
  { name: "McMaster", location: "Hamilton, Canada", type: "University reactor", lat: 43.26, lng: -79.92 },
  { name: "BR2", location: "Mol, Belgium", type: "Research reactor", lat: 51.22, lng: 5.09 },
  { name: "HFR Petten", location: "Petten, Netherlands", type: "Research reactor", lat: 52.79, lng: 4.67 },
  { name: "FRM II", location: "Garching, Germany", type: "Research reactor", lat: 48.27, lng: 11.67 },
  { name: "ILL", location: "Grenoble, France", type: "Neutron source", lat: 45.19, lng: 5.72 },
  { name: "LVR-15", location: "Rez, Czech Republic", type: "Research reactor", lat: 50.16, lng: 14.37 },
  { name: "MARIA", location: "Swierk, Poland", type: "Research reactor", lat: 52.12, lng: 21.35 },
  { name: "RIAR", location: "Dimitrovgrad, Russia", type: "Research reactor", lat: 54.19, lng: 49.48 },
  { name: "OPAL", location: "Lucas Heights, Australia", type: "Research reactor", lat: -34.05, lng: 150.98 },
  { name: "HANARO", location: "Daejeon, South Korea", type: "Research reactor", lat: 36.42, lng: 127.37 },
  { name: "Dhruva", location: "Trombay, India", type: "Research reactor", lat: 19.01, lng: 72.92 },
  { name: "CARR", location: "Beijing area, China", type: "Research reactor", lat: 39.74, lng: 116.04 },
  { name: "JRR-3", location: "Tokai, Japan", type: "Research reactor", lat: 36.46, lng: 140.6 },
  { name: "SAFARI-1", location: "Pelindaba, South Africa", type: "Research reactor", lat: -25.8, lng: 27.94 },
  { name: "RA-3", location: "Ezeiza, Argentina", type: "Research reactor", lat: -34.83, lng: -58.52 },
  { name: "ETRR-2", location: "Inshas, Egypt", type: "Research reactor", lat: 30.29, lng: 31.41 },
  { name: "IEA-R1", location: "Sao Paulo, Brazil", type: "Research reactor", lat: -23.56, lng: -46.74 },
  { name: "BLIP", location: "Brookhaven, USA", type: "Accelerator", lat: 40.87, lng: -72.87 },
  { name: "LANL IPF", location: "Los Alamos, USA", type: "Accelerator", lat: 35.88, lng: -106.3 },
  { name: "TRIUMF", location: "Vancouver, Canada", type: "Accelerator", lat: 49.25, lng: -123.23 },
  { name: "ARRONAX", location: "Nantes, France", type: "Accelerator", lat: 47.25, lng: -1.52 },
  { name: "PSI", location: "Villigen, Switzerland", type: "Accelerator", lat: 47.54, lng: 8.22 },
  { name: "iThemba LABS", location: "Cape Town area, South Africa", type: "Accelerator", lat: -33.98, lng: 18.62 },
  { name: "Centrus ACP", location: "Piketon, Ohio, USA", type: "Enrichment", lat: 39.07, lng: -83.01 },
  { name: "Urenco USA", location: "Eunice, New Mexico, USA", type: "Enrichment", lat: 32.41, lng: -103.2 },
  { name: "Urenco Netherlands", location: "Almelo, Netherlands", type: "Enrichment", lat: 52.35, lng: 6.66 },
  { name: "Urenco UK", location: "Capenhurst, UK", type: "Enrichment", lat: 53.26, lng: -2.95 },
  { name: "Urenco Deutschland", location: "Gronau, Germany", type: "Enrichment", lat: 52.21, lng: 7.04 },
  { name: "Orano Georges Besse II", location: "Tricastin, France", type: "Enrichment", lat: 44.33, lng: 4.73 },
  { name: "Novouralsk UEIP", location: "Novouralsk, Russia", type: "Enrichment", lat: 57.25, lng: 60.08 },
  { name: "Zelenogorsk ECP", location: "Zelenogorsk, Russia", type: "Enrichment", lat: 56.11, lng: 94.55 },
  { name: "Seversk SCC", location: "Seversk, Russia", type: "Enrichment", lat: 56.6, lng: 84.87 },
  { name: "Angarsk AECC", location: "Angarsk, Russia", type: "Enrichment", lat: 52.53, lng: 103.89 },
  { name: "Lanzhou Enrichment", location: "Lanzhou, China", type: "Enrichment", lat: 36.15, lng: 103.52 },
  { name: "Hanzhong Enrichment", location: "Hanzhong, China", type: "Enrichment", lat: 33.07, lng: 107.02 },
  { name: "ASP Pretoria", location: "Pretoria, South Africa", type: "Enrichment", lat: -25.75, lng: 28.23 },
  { name: "JNFL Rokkasho", location: "Rokkasho, Japan", type: "Enrichment", lat: 40.96, lng: 141.37 },
  { name: "INB Resende", location: "Resende, Brazil", type: "Enrichment", lat: -22.47, lng: -44.45 },
  { name: "RMP Rattehalli", location: "Rattehalli, India", type: "Enrichment", lat: 12.97, lng: 76.4 },
];

function layerForType(type: SiteType): LayerKey {
  if (type === "Accelerator") return "accelerators";
  if (type === "Enrichment") return "enrichment";
  return "reactors";
}

function markerColor(type: SiteType) {
  if (type === "Accelerator") return "#fbbf24";
  if (type === "Enrichment") return "#c084fc";
  return "#38bdf8";
}

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d");
  const [layers, setLayers] = useState({
    reactors: true,
    accelerators: true,
    enrichment: true,
  });

  const counts = useMemo(() => {
    const reactors = SITES.filter((s) => layerForType(s.type) === "reactors").length;
    const accelerators = SITES.filter((s) => layerForType(s.type) === "accelerators").length;
    const enrichment = SITES.filter((s) => layerForType(s.type) === "enrichment").length;
    return { reactors, accelerators, enrichment };
  }, []);

  const visibleSites = useMemo(() => {
    return SITES.filter((site) => layers[layerForType(site.type)]);
  }, [layers]);

  const visibleCount = visibleSites.length;

  useEffect(() => {
    if (viewMode !== "2d") return;
    if (!mapRef.current || mapInstance.current) return;

    const cssId = "leaflet-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const scriptId = "leaflet-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: true,
        worldCopyJump: true,
      }).setView([20, 10], 2);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 18,
        }
      ).addTo(map);

      mapInstance.current = map;
    };

    if (existing && (window as any).L) {
      initMap();
      return;
    }

    const script = existing || document.createElement("script");
    script.id = scriptId;
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = initMap;
    if (!existing) document.body.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [viewMode]);

  useEffect(() => {
    if (viewMode !== "2d") return;
    const L = (window as any).L;
    const map = mapInstance.current;
    if (!L || !map) return;

    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    visibleSites.forEach((site) => {
      const marker = L.circleMarker([site.lat, site.lng], {
        radius: 7,
        color: markerColor(site.type),
        fillColor: markerColor(site.type),
        fillOpacity: 0.85,
        weight: 1,
      }).addTo(map);

      marker.bindPopup(
        `<strong>\( {site.name}</strong><br/> \){site.location}<br/>${site.type}`
      );
      markersRef.current.push(marker);
    });
  }, [visibleSites, viewMode]);

  const toggleLayer = (key: LayerKey) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="h-full w-full">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
          Supply Map
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-8">
          Research reactors, accelerators, and enrichment plants that sit behind
          medical, industrial, and specialty isotope production.
        </p>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setViewMode("2d")}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                viewMode === "2d"
                  ? "border-sky-400/50 text-sky-300 bg-sky-400/10"
                  : "border-white/10 text-gray-500"
              }`}
            >
              2D Map
            </button>
            <button
              onClick={() => setViewMode("3d")}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                viewMode === "3d"
                  ? "border-sky-400/50 text-sky-300 bg-sky-400/10"
                  : "border-white/10 text-gray-500"
              }`}
            >
              3D Earth
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleLayer("reactors")}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                layers.reactors
                  ? "border-sky-400/50 text-sky-300 bg-sky-400/10"
                  : "border-white/10 text-gray-500"
              }`}
            >
              Reactors · {counts.reactors}
            </button>
            <button
              onClick={() => toggleLayer("accelerators")}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                layers.accelerators
                  ? "border-amber-400/50 text-amber-300 bg-amber-400/10"
                  : "border-white/10 text-gray-500"
              }`}
            >
              Accelerators · {counts.accelerators}
            </button>
            <button
              onClick={() => toggleLayer("enrichment")}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                layers.enrichment
                  ? "border-purple-400/50 text-purple-300 bg-purple-400/10"
                  : "border-white/10 text-gray-500"
              }`}
            >
              Enrichment · {counts.enrichment}
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            Showing {visibleCount} of {SITES.length} sites
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
          {viewMode === "2d" ? (
            <div ref={mapRef} className="w-full h-[70vh] min-h-[420px]" />
          ) : (
            <GlobeView sites={visibleSites} />
          )}
        </div>

        <p className="text-gray-500 text-sm mb-10 max-w-3xl">
          Toggle layers to isolate production or enrichment capacity. Full
          context lives on the Facilities page. Company HQs and logistics
          networks are not plotted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <Link
            href="/facilities"
            className="py-3 px-6 button-primary text-center text-white rounded-lg"
          >
            Facilities
          </Link>
          <Link
            href="/companies"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Companies
          </Link>
          <Link
            href="/watch"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Q3 Watchlist
          </Link>
        </div>
      </div>
    </main>
  );
}
